import React, { FC, memo } from 'react';
import { VStack, Text } from '@chakra-ui/react';

// pages/index.page.tsx
export const HomeScreen: FC = memo(() => {
  return (
    <VStack bg="black" height="100vh" justifyContent="center">
      <Text>hello</Text>
    </VStack>
  );
});
