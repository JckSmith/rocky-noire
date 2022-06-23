import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  
  const WilsonThreat = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              
              <Text color={'black.400'} as={'span'}>
              "I really suggest you stop questioning me, besides, you have other troublemakers to question, capiche?"

  
              </Text>{' '}
            </Heading>
            <Flex align={'center'} textAlign="left">
              
            </Flex>
          </Stack>
        </Flex>
        <Flex flex={1}>
        <Button
                rounded={'full'}
                size={'lg'}
                px={6}
                as={Link}
                to="/pagetwo">
                Back to alibi's
              </Button>
              
        </Flex>
      </Stack>
      </>
    );
  }
  export default WilsonThreat;