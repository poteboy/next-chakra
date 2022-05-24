import React, { FC, memo } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';

// pages/index.page.tsx
export const HomeScreen: FC = memo(() => {
  return (
    <VStack height="100vh" justifyContent="center">
      <Text>hello</Text>
      <Button>hello</Button>
    </VStack>
  );
});
