import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as y from 'yup';

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

import { Input } from '@components/input';
import { Button } from '@components/button';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigatorRoutesProps } from '@routes/auth-routes';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const signUpSchema = y.object({
  name: y.string().required('Informe o nome.'),
  email: y.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: y
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter pelo menos 6 digitos.'),
  password_confirm: y
    .string()
    .required('Confirme a senha.')
    .oneOf([y.ref('password'), ''], 'A confirmação da senha não confere'),
});

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigator = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBackLogin() {
    navigator.navigate('signIn');
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data);
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

          <Center flex={1}>
            <Heading color='$gray100' mb='$2'>
              Crie sua conta
            </Heading>

            <Controller
              control={control}
              name='name'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='nome'
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name='password'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='senha'
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              control={control}
              name='password_confirm'
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder='Confirme sua senha'
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType='send'
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <Button title='Criar' onPress={handleSubmit(handleSignUp)} />
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
