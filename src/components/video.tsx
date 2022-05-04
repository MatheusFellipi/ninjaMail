import { Box, Button, Flex, Heading } from '@chakra-ui/react'

const Video = () => {
  const basicBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
    px: 4,
    background: 'url(/img/VIDEO.png) center/cover no-repeat',
  }

  return (
    <Flex flexWrap="wrap" w={304} h={171} justifyContent="space-evenly">
      <Box sx={basicBoxStyles} w={'100%'}>
        <Heading
          lineHeight={'29px'}
          fontSize={'22px'}
          fontFamily={'heading'}
          borderRadius={0}
          w={'241px'}
          h={'29px'}
        >
          Reach More Customers
        </Heading>

        <Button
          mt={20.58}
          w={'65px'}
          h={'21px'}
          color={'green'}
          bgColor={'white'}
          borderRadius={0}
          fontSize="6px"
          lineHeight={'7px'}
          fontStyle={'normal'}
          fontFamily={'text'}
          fontWeight={'black'}
        >
          LEARN HOW
        </Button>
      </Box>
    </Flex>
  )
}

export default Video
