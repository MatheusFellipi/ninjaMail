import type { NextPage } from 'next'
import {
  Box,
  Button,
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

      <Flex
        flexDirection={'column'}
        align="center"
        justify={'space-between'}
        as={'section'}
        pt={'42px'}
        pb={'59px'}
        bgColor="#4BA87D"
        h={'290px'}
        width={'100%'}
      >
        <Box
          as="h1"
          fontFamily={'heading'}
          fontSize={'42px'}
          lineHeight={'48px'}
          fontWeight={'black'}
          textAlign={'center'}
          color={'white'}
        >
          Get started today!
        </Box>
        <Button
          borderRadius={0}
          w={'131px'}
          h={'42px'}
          fontSize={'13px'}
          lineHeight={'15px'}
          fontWeight={'black'}
          color={'#4BA87D'}
        >
          PICK A PLAN
        </Button>
      </Flex>

      <Box as="footer">
        <Flex
          flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
          mb={{ lg: '56.14px', md: '37.72px', sm: '11.72px' }}
          ml={{ lg: '228px', md: '63px', sm: '17px' }}
        >
          <Flex
            w={'155px'}
            h={'52px'}
            align={'center'}
            ml="10px"
            mt={{ lg: '82px', md: '47px', sm: '47px' }}
          >
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
            mt={{ lg: '88px', md: '51px', sm: '3.73px' }}
            ml={{ lg: '194.61px', md: '128.97', sm: '17px' }}
            fontWeight={'bold'}
            fontFamily={'text'}
            fontSize={{ lg: '19px', md: '"12px"', sm: '12px' }}
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
        </Flex>

        <Divider h={'1px'} colorScheme="#DBDBDB" orientation="horizontal" />
        <Flex
          mt={{ lg: '39px', md: '25px', sm: '22px' }}
          flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
          justify={'center'}
          align={'cemter'}
        >
          <Box
            as="p"
            ml={'17px'}
            mr={{ lg: '98px', md: '93px', sm: '0' }}
            fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
            lineHeight={'18px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={{ lg: '561px', md: '333px', sm: '186px' }}
          >
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </Box>

          <Box
            as="p"
            ml={'17px'}
            fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
            mr={{ lg: '30px', md: '35px', sm: '0' }}
            lineHeight={'18px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={'186px'}
          >
            Terms & Conditions
          </Box>

          <Box
            as="p"
            ml={'17px'}
            mb={{ lg: '39px', md: '30px', sm: '51px' }}
            fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
            lineHeight={'19px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={'186px'}
          >
            Privacy Policy
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Home
