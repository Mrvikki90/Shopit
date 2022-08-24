import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const AdminPanel = () => {
  const [item, setItem] = useState<data>();

  useEffect(() => {
    handleData();
  }, []);

  interface data {
    id: number;
    email: string;
    name: string;
    password: string;
    phone: string;
  }

  const handleData = async () => {
    let result = await fetch("http://localhost:8080/alldata", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const res = await result.json();
    console.log(res);
    setItem(res);
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
    "nav main"
    "nav footer"`}
        gridTemplateRows="50px 1fr 30px"
        gridTemplateColumns={"150px 1fr"}
        h="700px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          Admin Panel
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Contents
        </GridItem>
        <GridItem pl="2" bg="white.300" area={"main"}>
          <Heading textAlign={"center"}>Users</Heading>

          <TableContainer marginTop="10">
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>password</Th>
                  <Th>Phone No</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminPanel;
