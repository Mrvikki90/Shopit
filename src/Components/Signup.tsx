import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <> 
    <Flex h="100vh" alignItems="center" justifyContent="center" bgColor='gray.500' >
    <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
          <Heading mb={6}>Create An Acoount</Heading>
          <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'}>
          <FormLabel>Name</FormLabel>
            <Input type='name'/>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            <Button
                margin={4} colorScheme='teal' type='submit'>Sign Up
            </Button>
            <Link to={'/login'} > Already Have An Account ? Click Here </Link>
        </FormControl>
        </Flex>
    </Flex>
    </>
  )
}

export default Signup