import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IThumbProps {
  description: string
  href: string
  img: string
  mr?: object | number | string
  ml?: object | number | string
  mt?: object | number | string
  mb?: object | number | string
}

const Thumb = ({ description, href, img, mr, ml, mt, mb }: IThumbProps) => {
  const [link, setLink] = useState('#')

  useEffect(() => {
    if (href === undefined) {
      setLink('#')
    } else {
      setLink(href)
    }
  }, [href])

  return (
    <Box
      w={{ xl: 320, md: 209.28, sm: 209 }}
      h={{ xl: 198, md: 290.16, sm: 294 }}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      borderWidth="1px"
      shadow={'lg'}
    >
      <Image src={`/img/${img}.png`} alt="thumb.png" />

      <Box px={'14px'} mt={'16px'}>
        <Box
          as="p"
          fontSize={'12px'}
          lineHeight={'16px'}
          fontFamily={'text'}
          fontWeight={500}
        >
          {description}
        </Box>
        <Link href={link}>
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
