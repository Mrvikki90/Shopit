import Nav from "./Nav";
// import Products from './Apidata'
import { useEffect, useState } from "react";
import { Badge, Box ,Button,Flex,Grid,Image} from '@chakra-ui/react'
import axios from "axios";

const HomePage = () => {

    interface typeD {
        id: number,
        name: string,
        description: string,
        price: string,
        author : string,
        img : string,
        category : string
    };   

const [MenuData, setMenuData] = useState <typeD[]>([]);  

// console.log(MenuData);

useEffect(()=>{
   getData();
},[]);  

let getData = async () => {
    let url = "http://localhost:8080/users";
    let response =  await axios.post<any>(url);
    console.log(response.data);
    setMenuData(response.data.products); 
}
// console.log(MenuData);
return (  
<>
<Grid templateColumns='repeat(4,1fr)' gap={6}>
 {  MenuData.map((elem)=>{
return (
    <>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={elem.img} alt={elem.img} maxHeight='min-content' />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {elem.author}
        </Box>
        <Box>
          {elem.price}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>
        <Button colorScheme='whatsapp'>Add to Wishlist </Button>
      </Box>
    </Box>
    </>
)  
 })    
}    
</Grid>

</>
)}

export default HomePage