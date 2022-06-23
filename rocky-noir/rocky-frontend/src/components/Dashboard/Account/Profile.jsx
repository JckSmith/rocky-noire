import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link as ChakraLink,
  Button,
  Heading,
  useColorModeValue,
  HStack,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PageOne = () => {
  return (<Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={5} mx={'auto'}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'}>Notes</Heading>
        </Stack>
      
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          minWidth={['16em', '25em']}
          p={8}
        >
          Evidence
         <ul>
                <li>Name: Tyler Encase</li>
                <li>Age: 47</li>
                <li>Weight 180lbs</li>
                <li>Cause of Death: Strangulation</li>
                <li>Location of Body: In Dumpster behind the bar "Stingers</li>
                <li>Time Passed before discovery: Approx. three minutes</li>
              </ul>
        </Box>
      </Stack>
    </Flex>
  );
}
export default PageOne;

