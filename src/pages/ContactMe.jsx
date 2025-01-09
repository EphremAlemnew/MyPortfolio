import React, { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  Input, 
  Button,
  Textarea, 

} from "@chakra-ui/react";

const ContactMe = () => {

  return (
    <Box id="contact" p={8} borderRadius="md" maxWidth="800px" mx="auto">
      <Heading as="h1" size="2xl" fontWeight={'extrabold'} mb={4}>
        Contact
      </Heading>
      <Text mb={6}>
        Feel free to get in touch by filling out the form below. I'd love to
        hear from you!
      </Text>
      <Input 
                        placeholder='Your Name' 
                        name='name' 
                        // value={newProduct.name} 
                        // onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
                        />
                        
                    <Input my={4}
                        placeholder='Email Address' 
                        name='price' 
                        // value={newProduct.price} 
                        // onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
                        />
                    <Textarea height={16}
                        placeholder='Message' 
                        name='image' 
                        size={'md'}
                        h={'36'}
                        // value={newProduct.image} 
                        // onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
                        />
        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          mt={4}
        >
          Send
        </Button>
    </Box>
  );
};

export default ContactMe;
