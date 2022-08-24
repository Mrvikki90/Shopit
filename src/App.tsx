import * as React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './Components/Router';


function App() {
  return (
    <ChakraProvider>
    <Router/>
    </ChakraProvider>
  );
}

export default App;
