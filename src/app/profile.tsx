import { useState } from 'react';

import { Alert, TouchableOpacity } from 'react-native';
import {
  Center,
  Heading,
  ScrollView,
  Text,
  VStack,
  useToast,
} from '@gluestack-ui/themed';

import { ToastMessage } from '@components/toast-message';
import { ScreenHeader } from '@components/screen-header';
import { UserPhoto } from '@components/user-photo';
import { Button } from '@components/button';
import { Input } from '@components/input';

import * as imagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export function Profile() {
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/guilhermebuenoreis.png',
  );

  const toast = useToast();

  async function handleUserPhotoSelect() {
    const photoSelected = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });

    if (photoSelected.canceled) {
      return;
    }

    const photoUri = photoSelected.assets[0].uri;

    if (photoUri) {
      const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
        size: number;
      };

      if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
        return toast.show({
          placement: 'top',
          render: ({ id }) => (
            <ToastMessage
              id={id}
              action='error'
              title='Essa imagem é muito grande'
              description='A imagem não pode ser maior que 5MB.'
              onClose={() => toast.close(id)}
            />
          ),
        });
      }

      setUserPhoto(photoUri);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt='$6' px='$10'>
          <UserPhoto
            source={{ uri: userPhoto }}
            alt='Foto de perfil'
            size='xl'
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color='$green500'
              fontFamily='$heading'
              fontSize='$md'
              mt='$2'
              mb='$8'
            >
              Alterar foto do usuário
            </Text>
          </TouchableOpacity>

          <Center w='$full' gap='$4'>
            <Input placeholder='Nome' bg='$gray600' />
            <Input value='arcbrgamer@gmail.com' bg='$gray600' isReadOnly />
          </Center>

          <Heading
            alignSelf='flex-start'
            color='$gray200'
            fontFamily='$heading'
            fontSize='$md'
            mt='$12'
            mb='$2'
          >
            Alterar senha
          </Heading>

          <Center w='$full' gap='$4'>
            <Input placeholder='Senha antiga' bg='$gray600' secureTextEntry />
            <Input placeholder='Nova senha' bg='$gray600' secureTextEntry />
            <Input
              placeholder='Confirme a nova senha'
              bg='$gray600'
              secureTextEntry
            />

            <Button title='Atualizar' />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
