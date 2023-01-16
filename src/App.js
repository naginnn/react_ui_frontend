import Table from "./components/Table";
import {Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react'
import {ChakraProvider} from '@chakra-ui/react'
import {Box, Flex, Grid, SimpleGrid} from "@chakra-ui/react"
import {Field, Form, Formik} from 'formik';
import Autorization from "./components/forms/Autorization";

function App() {
    return (
        <ChakraProvider>
            <Table/>
           <Autorization/>
        </ChakraProvider>
    );
}
export default App;
