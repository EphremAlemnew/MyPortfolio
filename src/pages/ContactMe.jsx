import React, { useState } from "react";
import { 
  Box, 
  Heading, 
  Text, 
  Input, 
  Button,
  Textarea,
  VStack, 

} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = () =>{
    if(name=='' || email=='' || message==''){
      toaster.create({
        title: 'Sorry, Fill all required fields!',
        type: "error",
      })
    }else{
      toaster.create({
      title: 'Message sent Successfully',
      type: "success",
    })
    }
    
  }
  return (
    <Box id='contact' p={'8'} pt={{base:'8',lg:'0'}}
    >
      <Box  p={'8'} borderBottom="md" py={{lg:"60"}}>
        <VStack>
        <Heading as="h1" size="4xl" fontWeight={'bolder'} alignSelf={'start'}>Contact me</Heading>
      <Text mb={6} alignSelf={'start'}  fontSize={'lg'}>
        Feel free to get in touch by filling out the form below. I'd love to
        hear from you!
      </Text>
      <form action="https://getform.io/f/bxooxqga" method="POST">
      <Input 
                        placeholder='Full name' 
                        name='name' 
                        value={name}
                        required
                        onChange={(e)=>setName(e.target.value)}
                        />
                        
                    <Input my={4}
                        placeholder='Email Address' 
                        name='Email Address' 
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <Textarea height={16}
                        placeholder='Message' 
                        name='Message' 
                        size={'md'}
                        required
                        h={'36'}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        />
        <Button
          type="submit"
          colorScheme="blue"
          alignSelf={'end'}
          width={'1/3'}
          mt={4}
          onClick={()=>handleSubmit()}
        >
          Send
        </Button>
      </form>
      
        </VStack>
      
      </Box>
          
        </Box>
  );
};

export default ContactMe;
