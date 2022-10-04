import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CitiesProps{
    icon: string;
    pais:string;
    cidade:string;
    imagem:string
}

export default function City({icon,pais,cidade,imagem}:CitiesProps){
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src={`/${imagem}.jpg`} h="170px" w="100%" />
            <Flex
              p="6"
              align="center"
              justify="space-between"
              background="white"
              border="1px"
              borderColor="yellow.300"
              borderTop="0"
              
              >
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">
                        {cidade}
                    </Heading>
                    <Text mt="3" fontSize="md" color="gray.500">
                        {pais}
                    </Text>
                </Flex>
                <Image src={`${icon}`} w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
        </Box>
    )
}