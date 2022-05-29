import React, { FC, memo } from 'react';
import { HStack, Container, Flex, Button, Text } from '@chakra-ui/react';
import { colors, sp, MAX_MOBILE_WIDTH } from '@src/styles';
import { useWindowSize } from '@src/hooks';
import styled from 'styled-components';

export const Header: FC = memo(() => {
  return (
    <Flex as="header" bg={colors.White} alignItems="center">
      <ContentBar maxW={'1200px'} py="12px">
        <HStack justifyContent="space-between" mx="auto">
          <Button>HOME</Button>
          <Text>HELLO</Text>
        </HStack>
      </ContentBar>
    </Flex>
  );
});

const ContentBar = styled(Container)`
  ${sp`
    max-width: ${MAX_MOBILE_WIDTH * 0.8}px;
  `}
`;
