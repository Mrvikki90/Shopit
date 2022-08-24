import { Badge, Box, Image, Heading, Grid, Button } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";

type typeD = {
  id: number;
  name: string;
  price: string;
  author: string;
  img: string;
};

interface data {
  id: number;
  name: string;
  image: string;
}

const Wishlist = () => {
  useEffect(() => {
    getWishlist();
  }, []);

  const [data, setData] = useState<any>();

  const getWishlist = async () => {
    const result = await fetch("http://localhost:8080/data/wishlist", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const wishlistdata = await result.json();
    console.log(wishlistdata);
    setData(wishlistdata);
  };

  const handleRemove = async (id: number) => {
    console.log(id);

    const deleteData = await fetch(
      `http://localhost:8080/delete/wishlist/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
      }
    );
  };

  return (
    <>
      <Heading mb={3} textAlign="center">
        wishlist Items
      </Heading>

      <Grid templateColumns="repeat(4,1fr)" gap={6}>
        {data &&
          data.map((element: data, index: number) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={index}
              >
                <Image
                  src={element.image}
                  alt={element.image}
                  maxHeight="min-content"
                />
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {element.name}
                  </Box>
                  <Button
                    onClick={() => handleRemove(element.id)}
                    colorScheme="yellow"
                    size={"xs"}
                  >
                    Remove from Wishlist
                  </Button>
                </Box>
              </Box>
            );
          })}
      </Grid>
    </>
  );
};

export default Wishlist;
