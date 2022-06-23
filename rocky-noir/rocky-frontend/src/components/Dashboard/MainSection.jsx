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

const MainSection = () => {
  return (
    <>
      <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
            
            
            <Text color={'black.400'} as={'span'}>
            In the small town called Groves town nestled in in Rocky mountains there is trouble stirring, a murder. While rare, crime is something that has been pestering the little town but never murder. Even worse, the victim was the lead detective, your mentor. As the only other detective in town, it is up to you to figure out who killed your superior and bring them to justice.

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
              to="/pageone">
              Start
            </Button>
      </Flex>
    </Stack>
    </>
  );
}
export default MainSection;