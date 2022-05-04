import { Box, Image } from '@chakra-ui/react'

const Thumb = () => {
  return (
    <Box
      maxW={209}
      h={275}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src="/img/thumb.png" alt="thumb.png" />

      <Box p="6"></Box>
    </Box>
  )
}

export default Thumb
