import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'

const Thumb = () => {
  return (
    <Box
      w={{ xl: 320, md: 209.28, sm: 209 }}
      h={{ xl: 198, md: 290.16, sm: 294 }}
      borderWidth="1px"
      shadow={'lg'}
    >
      <Image src="/img/thumb.png" alt="thumb.png" />

      <Box px={'25px'} mt={'17px'}>
        <Box
          as="p"
          fontSize={'12px'}
          lineHeight={'16px'}
          fontFamily={'text'}
          fontWeight={500}
        >
          Launch campaigns but also find new customers. Our unique platform
          handles campaigns from start to end.
        </Box>
        <Link href="#">
          <Box
            as={'a'}
            fontSize={'12px'}
            lineHeight={'14px'}
            fontFamily={'text'}
            fontWeight={800}
            color="#4BA87D"
          >
            Learn More &gt;
          </Box>
        </Link>
      </Box>
    </Box>
  )
}

export default Thumb
