import React from 'react';
import {Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, SimpleGrid} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";

const Autorization = () => {

    function validateName(value) {
        let error
        if (!value) {
            error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
        }
        return error
    }

    return (
        <Flex justify="center" my='100'>
            <SimpleGrid
                justify="center"
                bg='gray.50'
                p='10'
                textAlign='center'
                rounded='lg'
                color='gray.800'
                border='1px'
                borderColor='gray.200'
                position='absolute'
            >
                <Formik
                    initialValues={{name: 'Sasuke'}}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            actions.setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field name='name' validate={validateName}>
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>login</FormLabel>
                                        <Input {...field} placeholder='name'/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='password' validate={validateName}>
                                {({field, form}) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel>password</FormLabel>
                                        <Input {...field} placeholder='name'/>
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                mt={4}
                                px={120}
                                colorScheme='teal'
                                isLoading={props.isSubmitting}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </SimpleGrid>
        </Flex>
    );
};

export default Autorization;

// /Users/sergeyesenin/.nvm/versions/node/v19.3.0/bin/node /Users/sergeyesenin/.nvm/versions/node/v19.3.0/lib/node_modules/npm/bin/npm-cli.js stop start --scripts-prepend-node-path=auto
