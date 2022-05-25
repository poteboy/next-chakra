import React, { FC, memo } from 'react';
import { HStack, Container, Flex, Button, Text } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { useWindowSize } from '@src/hooks';

export const Header: FC = memo(() => {
  return (
    <Flex as="header" bg={colors.White} alignItems="center">
      <Container maxW={'1200px'} py="12px">
        <HStack justifyContent="space-between" mx="auto">
          <Button>HOME</Button>
          <Text>HELLO</Text>
        </HStack>
      </Container>
    </Flex>
  );
});
