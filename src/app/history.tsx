import { useState } from 'react';
import { SectionList } from 'react-native';

import { Heading, Text, VStack } from '@gluestack-ui/themed';

import { HistoryCard } from '@components/history-card';
import { ScreenHeader } from '@components/screen-header';

export function History() {
  const [exercise, setExercise] = useState([
    {
      title: '22.07.24',
      data: ['puxada frontal', 'remada unilateral'],
    },
    {
      title: '23.07.24',
      data: ['puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <SectionList
        sections={exercise}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color='$gray200'
            fontSize='$md'
            mt='$10'
            mb='$3'
            fontFamily='$heading'
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercise.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color='$gray100' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'} Vamos fazer exercícios
            hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
