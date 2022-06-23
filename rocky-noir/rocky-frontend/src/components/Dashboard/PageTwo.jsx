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
  
  const PageTwo = () => {
    return (
      <>
        <Stack style={{}} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '3xl', lg: '3xl' }}>
              
              
              <Text color={'black.400'} as={'span'}>
There are multiple witnesses to the discovery of the body, each with their own testimony and alibi, as the time of death was only moments before discovery, it has to be one of the following.

            
  
              </Text>{' '}
            </Heading>
            <Flex align={'center'} textAlign="left">
            <ul>
               <li>Wilson Mett, Officer who was patrolling nearby arrived at scene

</li>
<li>Emily Power, Tyler’s Ex wife, was at the bar at time of discovery 
</li>
<li>Tim Lax, Career criminal, had just finished his time in prison, was at the bar at time of Discovery
</li>
<li>Jason Mills, called police after discovering the body in the dumpster out back
</li>


 
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
                to="/pagethree">
                Wilson's Alibi
              </Button>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pagefour">
                Emily's Alibi
        </Button>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pagefive">
                Tim's Alibi
        </Button>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pageseven">
                Jason's Alibi
        </Button>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pagesix">
                Accuse
        </Button>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={Link}
                to="/pageone">
                Back to Evidence
        </Button>
        </Flex>
        
      </Stack>
      </>
    );
  }
  export default PageTwo;