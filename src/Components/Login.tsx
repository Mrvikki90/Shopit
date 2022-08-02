import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(""); 

    const navigate = useNavigate();

    const firemodal = () => {  
        Swal.fire({  
          title: 'Success',  
          text: 'Data has been added successfully.',   
          confirmButtonColor: '#3085d6',   
          confirmButtonText: 'ok'  
        }).then((result) => {  
            if( result.isConfirmed == true ) {
                navigate('/');

            }
           })}; 
    
    return (
     <>
        <Flex h="100vh" alignItems="center" justifyContent="center" bgColor='gray.500' >
        <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
              <Heading mb={6}>Login Account </Heading>
              <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'}  >
                <FormLabel>Email address</FormLabel>
                <Input type='email' name='email' 
                onChange={(e:any) => setEmail(e.target.value)}/>
                <FormLabel>Password</FormLabel>
                <Input type='password' name='password'
                onChange={(e:any) => setPassword(e.target.value)}/>
                <Button onClick={firemodal}
                    margin={4} colorScheme='teal' type='submit'>Login
                </Button>
                <Link to={'/signup'} > Dont Have An Account ? Click Here </Link>
            </FormControl>
            </Flex>
            </Flex>
    </> 
    )
}

export default Login