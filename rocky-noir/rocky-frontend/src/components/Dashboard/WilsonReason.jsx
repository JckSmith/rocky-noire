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
  
  const WilsonReason = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              
              <Text color={'black.400'} as={'span'}>
              "I said I wanted to go to my usual speed trap spot, don't get on my nerves kid."

  
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
                to="/wilsonpress">
                Back to pressing
              </Button>
             
        </Flex>
      </Stack>
      </>
    );
  }
  export default WilsonReason;