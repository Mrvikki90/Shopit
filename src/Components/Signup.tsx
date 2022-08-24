import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Signup = () => {

  const navigate = useNavigate();

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState(""); 
  const [phone , setphone] = useState(""); 

  const handelLogin = async () => {

    let result = await fetch("http://localhost:8080/signup",{
      method : 'post',
      body : JSON.stringify({name,email,password,phone}),
      headers : {
        'Content-Type' : 'application/json'
      },
    });
 

    interface data {
      email : string,
      name : string,
      password : string,
      phone : string
    }
    

    const res:data[]  = await result.json();
    if(res){
      alert("Rejestration succesfully")
      navigate('/');
    }else{
      alert("enter credentails");
    }}


  return (
    <> 
    <Flex h="100vh" alignItems="center" justifyContent="center" bgColor='gray.500' >
    <Flex flexDirection="column"  borderRadius={8} p={12} boxShadow="2xl" bgColor='whiteAlpha.900'>
          <Heading mb={6}>Create An Acoount</Heading>
          <FormControl display={'grid'} marginTop={'10'} alignItems={'center'} justifyContent={'center'}>
          <FormLabel>Name</FormLabel>
            <Input type='name' 
                onChange={(e:any) => setName(e.target.value)}/>
            <FormLabel>Email address</FormLabel>
            <Input type='email' 
                onChange={(e:any) => setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel>
            <Input type='password' 
                onChange={(e:any) => setPassword(e.target.value)}/>
                  <FormLabel>Phone No</FormLabel>
            <Input type='number' 
                onChange={(e:any) => setphone(e.target.value)}/>
            <Button onClick={handelLogin}
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

