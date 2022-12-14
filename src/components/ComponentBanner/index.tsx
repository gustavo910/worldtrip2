import { Flex } from "@chakra-ui/react";


export default function ContinentBanner(){
    return (
        <Flex
        w="100%"
        h={["150px","300px","500px"]}
        px={["0","0","36"]}
        pt={["0","0","72"]}
        bgImage="url(/BannerEu.png)"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center","center","flex-start"]}
        >

        </Flex>
    )
}