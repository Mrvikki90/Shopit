import Nav from "./Nav";
// import Products from './Apidata'
import { Badge, Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import { JsxEmit } from "typescript";
import { FC } from "react";

export type typeD = {
  id: number;
  name: string;
  price: string;
  author: string;
  img: string;
};

interface UserProps {
  MenuData: typeD[];
}

const handelCart = async (name: string, image: string) => {
  const order = { name: name, image: image };
  console.log(order);
  const result = await fetch("http://localhost:8080/wishlist", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json",
    },
  });

  console.log(result);
  return result;
};

const HomePage: FC<UserProps> = ({ MenuData }): JSX.Element => {
  return (
    <>
      <Grid templateColumns="repeat(4,1fr)" gap={6}>
        {MenuData.map((element, index) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={index}
            >
              <Image
                src={element.img}
                alt={element.img}
                maxHeight="min-content"
              />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                </Box>
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {element.author}
                </Box>
                <Box>
                  <h4>Price {element.price} </h4>
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
                <Button
                  onClick={() => handelCart(element.name, element.img)}
                  colorScheme="whatsapp"
                >
                  Add to Wishlist{" "}
                </Button>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

export default HomePage;
