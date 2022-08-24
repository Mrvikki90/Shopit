import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, ButtonGroup, Flex, Heading, Image, Spacer } from '@chakra-ui/react'

const Nav = () => {
  return (
    <Flex height={'30'}  borderRadius={30} p={12} boxShadow="2xl" bgColor='messenger.500'   alignItems='center' marginBottom={'8'}  >
    <Box p='2'>
    <Link to={'/'}><Image height="300" marginBottom='62' src="logo4.png" alt="logo2.png"/></Link>
    </Box>
    <Spacer/>
    <ButtonGroup gap='2' marginRight={'5'}>
    <Link to={'/wishlist'}><Image height='50'  src="wishlist.jpg" alt="png"/></Link>
     <Link to={'/login'}><Button colorScheme='teal' variant='outline'>Log In</Button></Link>
     <Link to={'/signup'}> <Button colorScheme='teal'>Sign Up</Button></Link>
    </ButtonGroup>
  </Flex>
  )
}

export default Nav