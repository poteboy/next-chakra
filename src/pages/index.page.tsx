import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { FC, memo } from 'react';
import { VStack, Text, Button } from '@chakra-ui/react';
import { colors } from '@src/styles';
import { Header } from '@src/components';

const Root: NextPage = () => {
  return <RootScreen />;
};

type Props = {};

const RootScreen: FC<Props> = memo(() => {
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

export default Root;
