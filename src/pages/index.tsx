import type { NextPage } from 'next'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
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

      <Flex
        flexDirection={{ xl: 'column', md: 'column', sm: 'column' }}
        align={'center'}
        mt={47}
        mb={54}
      >
        <Flex
          w={{ xl: '1089px ', md: '708px', sm: '239px' }}
          flexDirection={{ xl: 'row', md: 'row', sm: 'column' }}
        >
          <Stack
            direction={{ xl: 'row', md: 'row', sm: 'column' }}
            spacing="21px"
            w={{ xl: '1089px ', md: '708px', sm: '239px' }}
          >
            <CaseStudy description="Member since 2012" name="Frankie" />
            <CaseStudy description="Member since 2016" name="Camile" />
            <CaseStudy description="Member since 2018" name="Elayne" />
          </Stack>
        </Flex>

        <Box>
          <Box
            as="h1"
            maxW={{ xl: '850px ', md: '544px', sm: '225px' }}
            h={{ xl: '126px ', md: '89px', sm: '155px' }}
            mt={'59px'}
            fontFamily={'heading'}
            fontWeight={'black'}
            textAlign="center"
            lineHeight={{ xl: '48px ', md: '38px', sm: '36px' }}
            fontSize={{ xl: '44px', md: '28px', sm: '26px' }}
          >
            Learn how others are reaching their audience easier than ever
            before.
          </Box>
          <Flex
            mt={'5px'}
            justify={{ md: 'space-around', sm: 'center' }}
            align={{ md: 'start', sm: 'center' }}
            flexDirection={{ xl: 'row', md: 'row', sm: 'column' }}
            maxW={{ xl: '668px', md: '438px', sm: '223px' }}
          >
            <Flex
              mt={'5px'}
              textAlign="center"
              flexDirection={'column'}
              alignItems={{ xl: 'flex-start', md: 'flex-start', sm: 'center' }}
            >
              <Input
                type="text"
                w={{ xl: '420px', md: '275px', sm: '223px ' }}
                h={{ xl: '65px', md: '42px', sm: '42px ' }}
                borderRadius={5}
                placeholder="Enter your email"
              />
              <Box
                as="p"
                w={{ xl: '254px', md: '157px', sm: '142px ' }}
                h={{ xl: '25px', md: '15px', sm: '14px ' }}
                fontSize={{ xl: '21px', md: '13px ', sm: '12px ' }}
                mt={'6px'}
                color={'green'}
              >
                Thanks! Email received
              </Box>
            </Flex>

            <Button
              mt={'7px'}
              borderRadius={0}
              w={'131px'}
              h={{ xl: '65px', md: '42px', sm: '42px ' }}
              fontSize={'13px'}
              lineHeight={'15px'}
              fontWeight={'black'}
              bgColor={'#4BA87D'}
              color={'white'}
            >
              JOIN OUR LIST
            </Button>
          </Flex>
        </Box>
      </Flex>

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
          flexDirection={{ xl: 'row', md: 'row', sm: 'column' }}
          mb={{ xl: '56.14px', md: '37.72px', sm: '11.72px' }}
          ml={{ xl: '228px', md: '63px', sm: '17px' }}
        >
          <Flex
            w={'155px'}
            h={'52px'}
            align={'center'}
            ml="10px"
            mt={{ xl: '82px', md: '47px', sm: '47px' }}
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
            mt={{ xl: '88px', md: '51px', sm: '3.73px' }}
            ml={{ xl: '194.61px', md: '128.97', sm: '17px' }}
            fontWeight={'bold'}
            fontFamily={'text'}
            fontSize={{ xl: '19px', md: '"12px"', sm: '12px' }}
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
          mt={{ xl: '39px', md: '25px', sm: '22px' }}
          flexDirection={{ xl: 'row', md: 'row', sm: 'column' }}
          justify={'center'}
          align={'cemter'}
        >
          <Box
            as="p"
            ml={'17px'}
            mr={{ xl: '98px', md: '93px', sm: '0' }}
            fontSize={{ xl: '15px', md: '9px', sm: '9px' }}
            lineHeight={'18px'}
            fontFamily={'text'}
            fontWeight={700}
            maxW={{ xl: '561px', md: '333px', sm: '186px' }}
          >
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </Box>

          <Box
            as="p"
            ml={'17px'}
            fontSize={{ xl: '15px', md: '9px', sm: '9px' }}
            mt={{ xl: '0', md: '0', sm: '14px' }}
            mr={{ xl: '30px', md: '35px', sm: '0' }}
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
            mb={{ xl: '39px', md: '30px', sm: '51px' }}
            fontSize={{ xl: '15px', md: '9px', sm: '9px' }}
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
