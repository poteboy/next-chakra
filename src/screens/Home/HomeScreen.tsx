import React, { FC, memo } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header } from '@src/components';

// pages/index.page.tsx
export const HomeScreen: FC = memo(() => {
  return (
    <>
      <Header />
      <VStack bg={colors.BackGround} height="100vh" justifyContent="center">
        <Text>hello</Text>
        <Button>hello</Button>
      </VStack>
    </>
  );
});
