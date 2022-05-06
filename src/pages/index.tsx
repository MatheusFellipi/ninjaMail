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
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Header from '../components/heeader'
import Video from '../components/video'
import Thumb from '../components/thumb'
import CaseStudy from '../components/casestudy'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Flex
        as={'section'}
        justify={{ md: 'center', sm: 'center' }}
        bgImage={{ md: "url('/img/bg2.png')" }}
        bgRepeat="no-repeat"
        h={{ lg: '631.5px', md: '450px', sm: '324.22px' }}
      >
        <Box
          mt={'8px'}
          w={{ lg: '1088px ', md: '711px', sm: '301px' }}
          h={{ lg: '383px ', md: '250px', sm: '324.22px' }}
          position={'relative'}
        >
          <Box
            position="absolute"
            mt={{ sm: '48px' }}
            ml={{ lg: '408px', md: '266px' }}
            w={{ lg: '680px', md: '445px', sm: '300px' }}
            h={{ lg: '383px', md: '250px', sm: '169px' }}
          >
            <Image
              src="/img/photo_hero.png"
              alt="hero"
              w={{ lg: '680px', md: '445px', sm: '300px' }}
              h={{ lg: '383px', md: '250px', sm: '169px' }}
              objectFit="cover"
            />
          </Box>

          <Box
            mt={{ lg: '125px', md: '81px' }}
            ml={{ lg: '50px' }}
            position="absolute"
          >
            <Box
              as={'h1'}
              maxW={{ lg: '489px', md: '315px', sm: '267px' }}
              maxH={{ lg: '317px', md: '208px', sm: '138px' }}
              fontFamily={'heading'}
              fontWeight={'black'}
              fontSize={{ lg: '59px', md: '38px', sm: '36px' }}
              lineHeight={{ lg: '71px', md: '46px', sm: '46px' }}
            >
              Create Stunning Email Campaigns
            </Box>
            <Box
              as={'p'}
              mt={{ md: '17px', sm: '98px' }}
              fontFamily={'text'}
              fontSize={{ lg: '19px', md: '12px', sm: '14px' }}
              fontWeight={'medium'}
              lineHeight={{ lg: '26px', md: '16px', sm: '16px' }}
              maxW={{ lg: '446px', md: '282px', sm: '290px' }}
              maxH={{ lg: '52px', md: '32px', sm: '32px' }}
            >
              Create and launch email campaigns that captivate your customers in
              just a few clicks.
            </Box>

            <Flex mt={{ sm: '16px' }}>
              <Button
                borderRadius={0}
                w={{ lg: '200px', md: '131px', sm: '143px' }}
                h={{ lg: '65px', md: '42px', sm: '40.22px' }}
                mr={{ lg: '45px', md: '29px', sm: '17px' }}
                fontSize={'13px'}
                lineHeight={'15px'}
                fontWeight={'black'}
                bgColor={'#4BA87D'}
                color={'white'}
              >
                TRY NOW
              </Button>
              <Button
                borderRadius={0}
                border="4px"
                borderColor="#4BA87D"
                w={{ lg: '200px', md: '131px', sm: '143px' }}
                h={{ lg: '65px', md: '42px', sm: '40.22px' }}
                fontSize={'13px'}
                lineHeight={'15px'}
                fontWeight={'black'}
                color={'#4BA87D'}
              >
                GET A DEMO
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Flex justify={'center'} justifyContent={'center'} mt={'41.78px'}>
        <Video />
      </Flex>

      <Flex
        mt={33}
        justifyContent={'center'}
        p={2}
        alignItems="center"
        w={'100%'}
      >
        <Flex
          flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
          maxW={{ lg: '1098px', md: '710px', sm: '302px' }}
        >
          <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}>
            <Thumb
              description="Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."
              href="#"
              img="thumb"
            />
            <Thumb
              ml={{ lg: '47px', md: '30.71px', sm: '92.71px' }}
              mt={{ lg: '88px', md: '57.84px', sm: '14.84px' }}
              mr={{ lg: '46px', md: '29px', sm: '0' }}
              description="Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools."
              href="#"
              img="thumb"
            />
          </Flex>

          <Box
            ml={{ lg: '0', md: '0', sm: '28px ' }}
            mt={{ lg: '138px', md: '90px', sm: '14.84px' }}
          >
            <Box
              mt={'18px'}
              as="h1"
              fontFamily={'heading'}
              fontWeight={900}
              fontSize={'28px'}
              lineHeight={'31px'}
              maxW={{ lg: 1098, md: 710, sm: 232 }}
            >
              The source for proven, engaging email campaigns
            </Box>
            <Box
              as="p"
              mt={'17px'}
              fontFamily={'text'}
              fontWeight={500}
              fontSize={'12px'}
              lineHeight={'16px'}
              maxW={{ lg: 1098, md: 710, sm: 203 }}
            >
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Flex
        flexDirection={'column'}
        align={'center'}
        mt={{ lg: 133, md: 87, sm: 47 }}
      >
        <Flex
          w={{ lg: '1089px ', md: '708px', sm: '239px' }}
          flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
        >
          <Stack
            direction={{ lg: 'row', md: 'row', sm: 'column' }}
            spacing="21px"
            w={{ lg: '1089px ', md: '708px', sm: '239px' }}
          >
            <CaseStudy description="Member since 2012" name="Frankie" />
            <CaseStudy description="Member since 2016" name="Camile" />
            <CaseStudy description="Member since 2018" name="Elayne" />
          </Stack>
        </Flex>

        <Box>
          <Box
            as="h1"
            maxW={{ lg: '850px ', md: '544px', sm: '225px' }}
            h={{ lg: '126px ', md: '89px', sm: '155px' }}
            mt={'59px'}
            fontFamily={'heading'}
            fontWeight={'black'}
            textAlign="center"
            lineHeight={{ lg: '48px ', md: '38px', sm: '36px' }}
            fontSize={{ lg: '44px', md: '28px', sm: '26px' }}
          >
            Learn how others are reaching their audience easier than ever
            before.
          </Box>
          <Flex
            mt={'5px'}
            justify={{ md: 'space-around', sm: 'center' }}
            align={{ md: 'start', sm: 'center' }}
            flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
            maxW={{ lg: '668px', md: '438px', sm: '223px' }}
          >
            <Flex
              mt={'5px'}
              textAlign="center"
              flexDirection={'column'}
              alignItems={{
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'center',
              }}
            >
              <Input
                type="text"
                w={{ lg: '420px', md: '275px', sm: '223px ' }}
                h={{ lg: '65px', md: '42px', sm: '42px ' }}
                borderRadius={5}
                borderColor={'gray.600'}
                placeholder="Enter your email"
                _placeholder={{
                  color: '#000',
                }}
              />
              <Box
                as="p"
                w={{ lg: '254px', md: '157px', sm: '142px ' }}
                h={{ lg: '25px', md: '15px', sm: '14px ' }}
                fontSize={{ lg: '21px', md: '13px ', sm: '12px ' }}
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
              h={{ lg: '65px', md: '42px', sm: '42px ' }}
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
        justify={{ md: 'center', sm: 'center' }}
        align={{ md: 'center', sm: 'center' }}
        flexDirection={'column'}
        maxW={{ lg: '296px', md: '617px', sm: '281px' }}
        maxH={{ lg: '317px', md: '138px', sm: '242px' }}
        mt={{ lg: '', md: '50px', sm: '54px' }}
        mb={{ lg: '', md: '', sm: '58px' }}
        ml={{ lg: '', md: '75px', sm: '0px' }}
        mr={{ lg: '', md: '75px', sm: '0px' }}
        textAlign="center"
      >
        <Box
          maxW={{ lg: '296px', md: '315px', sm: '281px' }}
          maxH={{ lg: '317px', md: '208px', sm: '110px' }}
          as={'h1'}
          fontFamily={'heading'}
          fontSize={{ md: '38px', sm: '26px' }}
          fontWeight={'black'}
          lineHeight={{ md: '46px', sm: '36px' }}
        >
          All the best brands already use us.
        </Box>
        <Flex
          mt={{ lg: '', md: 'px', sm: '40px' }}
          flexWrap={{ sm: 'wrap' }}
          justify={'center'}
          align={'center'}
          w={{ lg: '296px', md: '100%', sm: '237px' }}
          maxH={{ lg: '317px', md: '31px', sm: '137px' }}
        >
          <Image
            mr={{ lg: '', md: '42px', sm: '67px' }}
            maxW={{ lg: '', md: '', sm: '55px' }}
            maxH={{ lg: '', md: '', sm: '29px' }}
            src="/icon/dragon_eye.svg"
            alt="dragon eye vodka"
            objectFit="cover"
          />
          <Image
            mr={{ lg: '', md: '42px', sm: '0' }}
            maxW={{ lg: '', md: '', sm: '91px' }}
            maxH={{ lg: '', md: '', sm: '15px' }}
            src="/icon/gamecommerce.svg"
            alt="gamecommerce"
            objectFit="cover"
          />
          <Image
            mt={{ lg: '', md: '0px', sm: '29px' }}
            mr={{ lg: '', md: '42px', sm: '41px' }}
            maxW={{ lg: '', md: '', sm: '104px' }}
            maxH={{ lg: '', md: '', sm: '22px' }}
            src="/icon/last_knight.svg"
            alt="last knight"
            objectFit="cover"
          />
          <Image
            mr={{ lg: '', md: '24px', sm: '0' }}
            mt={{ lg: '', md: '0px', sm: '30px' }}
            maxW={{ lg: '', md: '', sm: '92px' }}
            maxH={{ lg: '', md: '', sm: '17px' }}
            src="/icon/radio.svg"
            alt="radio tree"
            objectFit="cover"
          />
          <Image
            mr={{ lg: '', md: '42px', sm: '0px' }}
            mt={{ lg: '', md: '0px', sm: '29px' }}
            maxW={{ lg: '', md: '', sm: '94px' }}
            maxH={{ lg: '', md: '', sm: '31px' }}
            src="/icon/questai.svg"
            alt="quest ai"
            objectFit="cover"
          />
        </Flex>
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
          flexDirection={{ lg: 'row', md: 'row', sm: 'column' }}
          mb={{ lg: '56.14px', md: '37.72px', sm: '11.72px' }}
        >
          <Flex
            w={'155px'}
            h={'52px'}
            align={'center'}
            mt={{ lg: '82px', md: '47px', sm: '47px' }}
            ml={{ lg: '228px', md: '63px', sm: '17px' }}
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
            mt={{ lg: '79px', md: '51px', sm: '3.73px' }}
            ml={{ lg: '194.61px', md: '128.97', sm: '17px' }}
            fontWeight={'bold'}
            fontFamily={'text'}
            fontSize={{ lg: '19px', md: '"12px"', sm: '12px' }}
            lineHeight={'14px'}
          >
            <Flex flexDirection={{ lg: 'row', md: 'row', sm: 'row' }}>
              <Wrap
                spacingX={{ sm: 0 }}
                direction={{ lg: 'row', md: 'row', sm: 'column' }}
              >
                <WrapItem flexDirection={'column'}>
                  <p>Features</p>
                  <p>Pricing</p>
                  <p>Services</p>
                  <p>Partners</p>
                </WrapItem>
                <WrapItem flexDirection={'column'}>
                  <p>About Us</p>
                  <p>Tutorials</p>
                  <p>Resources</p>
                  <p>Help Center</p>
                  <p>Templates</p>
                  <p>Case Studies</p>
                </WrapItem>
              </Wrap>

              <Wrap
                ml={{ sm: '72px' }}
                spacingX={{ sm: 0 }}
                direction={{ lg: 'row', md: 'row', sm: 'column' }}
              >
                <WrapItem flexDirection={'column'}>
                  <p>Medium</p>
                  <p>Twitter</p>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>LinkedIn</p>
                </WrapItem>
                <WrapItem flexDirection={'column'}>
                  <p>Contact Us</p>
                  <p>Slack</p>
                  <p>Jobs</p>
                </WrapItem>
              </Wrap>
            </Flex>
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
            maxW={{ lg: '561px', md: '338px', sm: '186px' }}
          >
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All
            rights reserved.
          </Box>

          <Box
            as="p"
            ml={'17px'}
            fontSize={{ lg: '15px', md: '9px', sm: '9px' }}
            mt={{ lg: '0', md: '0', sm: '14px' }}
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
