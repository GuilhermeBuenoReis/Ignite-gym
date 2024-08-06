import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Icon,
} from '@gluestack-ui/themed';

import { ChevronRight } from 'lucide-react-native';

type ExerciseCardProps = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        backgroundColor='$gray500'
        alignItems='center'
        p='$2'
        pr='$4'
        rounded='$md'
        mb='$3'
      >
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp/v1/fill/w_350,h_375,al_c/2edbed_60c206e178ad4eb3801f4f47fc6523df~mv2.webp',
          }}
          alt='imagem do exercício'
          w='$16'
          h='$16'
          rounded='$md'
          mr='$4'
          resizeMode='cover'
        />

        <VStack flex={1}>
          <Heading fontSize='$lg' color='$white' fontFamily='$heading'>
            Puxada Frontal
          </Heading>

          <Text fontSize='$sm' color='$gray300' mt='$1' numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color='$gray300' />
      </HStack>
    </TouchableOpacity>
  );
}
