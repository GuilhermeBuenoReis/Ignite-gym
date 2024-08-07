import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from '@gluestack-ui/themed';

import { useNavigation } from '@react-navigation/native';

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Input } from '@components/input';
import { Button } from '@components/button';

import { AuthNavigatorRoutesProps } from '@routes/auth-routes';

export function SignIn() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleAuthAcount() {
    navigator.navigate('signUp');
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg='$gray700'>
        <Image
          source={BackgroundImage}
          alt='Pessoas Treinando'
          w='$full'
          h={624}
          defaultSource={BackgroundImage}
          position='absolute'
        />

        <VStack flex={1} px='$10' pb='$16'>
          <Center my='$24'>
            <Logo />

            <Text color='$gray100' fontSize={'$sm'}>
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center gap='$2'>
            <Heading color='$gray100'>Acesse a conta</Heading>

            <Input
              placeholder='email'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Input placeholder='senha' secureTextEntry />

            <Button title='Acessar' />
          </Center>

          <Center flex={1} justifyContent='flex-end' mt='$4'>
            <Text color='$gray100' fontSize='$sm' fontFamily='$body'>
              Ainda não tem acesso?
            </Text>

            <Button
              title='Criar conta'
              mt='$3'
              variant='outline'
              onPress={handleAuthAcount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
