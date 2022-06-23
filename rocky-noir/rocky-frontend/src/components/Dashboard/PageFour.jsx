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
  
  const PageFour = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              In front of you is a middle-aged woman with dirty blonde hair, bright red lipstick and a can-do attitude.
              <Text color={'black.400'} as={'span'}>
              "I was at the bar singing, I was hired to perform for the night. I'm a pretty good singer ya know?"

  
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
                to="/emilypress">
                Press further
              </Button>
        </Flex>
      </Stack>
      </>
    );
  }
  export default PageFour;