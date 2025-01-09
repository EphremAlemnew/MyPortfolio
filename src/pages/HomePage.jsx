import { Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Container minW={'sm'}>
        <VStack>
        <Text
                fontSize={{ base: "22", sm: "28" }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={'to-r'}
                gradientFrom={'cyan.400'}
                gradientTo={'blue.500'}
                bgClip={"text"}
            >
                Current Products 🚀
                 </Text>
        </VStack>
    </Container>
  )
}

export default HomePage