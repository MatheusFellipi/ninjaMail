import type { NextPage } from 'next'
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react'
import Header from '../components/heeader'
import Video from '../components/video'
import Thumb from '../components/thumb'
import CaseStudy from '../components/casestudy'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box bgColor="red" mt={'8px'} h={[324.22, 250, 500]} w={[300, 711, 500]}>
        This is a box
      </Box>
      <Box mt={'41.78px'} w={'100%'}>
        <Video />
      </Box>
      <Box mt={33}>
        <Thumb />
      </Box>

      <Box mt={47}>
        <CaseStudy />
      </Box>
      <Box as="footer" h={'486px'}>
        <Box>
          <Flex w={'155px'} h={'52px'} align={'center'} ml="10px">
            <Box width={84} height={42} mt={'12px'}>
              <Image src="/icon/ninjamail.svg" alt="ninjamail" />
            </Box>

            <Heading
              fontSize="22px"
              lineHeight={'26px'}
              fontStyle={'normal'}
              fontFamily={'text'}
              h={'25px'}
              fontWeight={'black'}
              ml={'-10px'}
            >
              NinjaMail
            </Heading>
          </Flex>

          <Flex
            mt={'3.73px'}
            ml={'17px'}
            fontWeight={700}
            fontFamily={'text'}
            fontSize="12px"
            lineHeight={'14px'}
          >
            <Box>
              <VStack
                flexDirection={'column'}
                align={'flex-start'}
                textAlign="initial"
                spacing="7px"
              >
                <span>Pricing</span>
                <span>Services</span>
                <span>Partners</span>
                <span>About Us</span>
                <span>Tutorials</span>
                <span>Resources</span>
                <span>Help Center</span>
                <span>Templates</span>
                <span>Case Studies</span>
              </VStack>
            </Box>
            <Box ml={'72px'}>
              <VStack
                flexDirection={'column'}
                align={'flex-start'}
                textAlign="initial"
                spacing="7px"
              >
                <span>Medium</span>
                <span>Twitter</span>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>Contact Us</span>
                <span>Slack</span>
                <span>Jobs</span>
              </VStack>
            </Box>
          </Flex>
        </Box>

        <Box>
          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>
          <Box
            as="p"
            ml={'17px'}
            fontSize={'9px'}
            lineHeight={'19px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={'186px'}
            h={'53px'}
          >
            NinjaMail is a sample project for Quest AI.
            <br />© 2019 Quest AI, All rights reserved.
          </Box>

          <Box
            as="p"
            ml={'17px'}
            fontSize={'9px'}
            lineHeight={'19px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={'186px'}
            h={'53px'}
          >
            Terms & Conditions
            <br />
            Privacy Policy
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
