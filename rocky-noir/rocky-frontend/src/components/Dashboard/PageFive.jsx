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
  
  const PageFive = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              
              <Text color={'black.400'} as={'span'}>
              "It's my favorite bar, why do I need an excuse to be there?"

  
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
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pagetwo">
                Back To alibi's
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pagetwo">
                Press further
              </Button>
        </Flex>
      </Stack>
      </>
    );
  }
  export default PageFive;