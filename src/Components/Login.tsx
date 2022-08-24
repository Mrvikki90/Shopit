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
 

        interface data {
            email : string,
            name : string,
            password : string,
          }
          
            const handleLogin = async () =>{
              let result= await fetch("http://localhost:8080/login",{
                method : "POST",
                body : JSON.stringify({email,password}),
                headers : {
                  "Content-type" : "application/json"
                },
              })
          
              const res:data[]  = await result.json();
              if(res.length){
                localStorage.setItem('user', JSON.stringify(result));
                alert("login succesfully");
                navigate('/adminpanel');
              }else{
                alert("wrong credentails");
              }
            };
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
                <Button onClick={handleLogin}
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