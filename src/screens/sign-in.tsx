import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImage}
        alt="Pessoas Treinando"
        w="$full"
        h={624}
        defaultSource={BackgroundImage}
        position="absolute"
      />

      <VStack flex={1} px="$10" pb="$16">
        <Center my="$24">
          <Logo />

          <Text color="$gray100" fontSize={"$sm"}>
            Treine sua mente e seu corpo.
          </Text>
        </Center>

        <Center gap="$2">
          <Heading color="$gray100">Acesse a conta</Heading>

          <Input
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>
      </VStack>
    </VStack>
  );
}
