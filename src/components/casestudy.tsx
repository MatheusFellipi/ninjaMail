import { Box, Heading } from '@chakra-ui/react'

const CaseStudy = () => {
  const caseStudyStyles = {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'end',
    textAlign: 'center',
    color: 'white',
    fontSize: '20px',
    background: 'url(/img/VIDEO.png) center/cover no-repeat',
  }

  return (
    <Box sx={caseStudyStyles} w={'223px'} h={'157px'}>
      <Heading
        lineHeight={'26px'}
        fontSize={'22px'}
        fontFamily={'text'}
        fontWeight={900}
        ml={17.06}
      >
        Frankie
      </Heading>
      <Heading
        mb={4.66}
        ml={17.06}
        lineHeight={'14px'}
        fontSize={'12px'}
        fontFamily={'text'}
        fontWeight={700}
      >
        Frankie
      </Heading>
    </Box>
  )
}

export default CaseStudy
