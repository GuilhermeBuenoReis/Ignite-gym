import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
} from '@gluestack-ui/themed';

import BackgroundImage from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth-routes';

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBackLogin() {
    navigator.navigate('signIn');
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

          <Center gap='$2' flex={1}>
            <Heading color='$gray100'>Crie sua conta</Heading>

            <Input placeholder='nome' />

            <Input
              placeholder='email'
              keyboardType='email-address'
              autoCapitalize='none'
            />

            <Input placeholder='senha' secureTextEntry />

            <Button title='Criar' />
          </Center>

          <Button
            title='Voltar para o login'
            variant='outline'
            mt='$12'
            onPress={handleGoBackLogin}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
