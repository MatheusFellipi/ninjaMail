import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      as={'header'}
      w={'100%'}
      h={'62px'}
      justify={'space-around'}
      align={'center'}
    >
      <Flex w={'155px'} h={'52px'} align={'center'}>
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
      <Box></Box>
      <Box>
        <Button
          lineHeight={'13px'}
          fontSize="11px"
          fontFamily={'text'}
          colorScheme={'green'}
          borderRadius={0}
          color={'white'}
          fontWeight={'extrabold'}
        >
          SIGN UP FREE
        </Button>
      </Box>
    </Flex>
  )
}
