import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'

const Nav = () => {
  return (
    <Flex bg='blue' height={'50'} marginTop={'5'}  minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
      <Heading size='md'>Chakra App</Heading>
    </Box>
    <Spacer/>
    <ButtonGroup gap='2' marginRight={'5'}>
     <Link to={'/login'}><Button colorScheme='teal'>Log In</Button></Link>
     <Link to={'/signup'}> <Button colorScheme='teal'>Sign Up</Button></Link>
    </ButtonGroup>
  </Flex>
  )
}

export default Nav