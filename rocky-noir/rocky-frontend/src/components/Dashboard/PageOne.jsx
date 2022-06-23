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
  
  const PageOne = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              
              <Text color={'black.400'} as={'span'}>
              It was sudden, unreal, after spending time working on petty case after case who would've thought you would be investigating a murder, let alone it being your mentor Tyler. Looking over the case details again, not believing it, you read,

  
              </Text>{' '}
            </Heading>
            <Flex align={'center'} textAlign="left">
              <ul>
                <li>Name: Tyler Encase</li>
                <li>Age: 47</li>
                <li>Weight 180lbs</li>
                <li>Cause of Death: Strangulation</li>
                <li>Location of Body: In Dumpster behind the bar "Stingers</li>
                <li>Time Passed before discovery: Approx. three minutes</li>
              </ul>
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
                Read On
              </Button>
        </Flex>
      </Stack>
      </>
    );
  }
  export default PageOne;