import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
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
    </>
  )
}

export default Home
