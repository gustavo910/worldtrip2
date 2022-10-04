import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities(){
    return(
        <>
        <Heading fontWeight={500} fontSize={["2xl","4xl"]} mb="10" >Cidades +100</Heading>
        <Grid 
        templateColumns={["1fr","1fr 1fr","repeat(3,1fr)","repeat(4,1fr)"]} 
        gap={["20px","45px"]} 
        alignItems="center" 
        justifyContent="center"
        px={["30px","0"]}
        >
            <City imagem={"FotoLondon"} icon={"/Ellipselondon.jpg"} pais={"Reino Unido"} cidade={"Londres"} />
            <City icon={"/EllipseParis.jpg"} pais={"França"} cidade={"Paris"} imagem={"Fotoparis"} />
            <City icon={"/EllipseRoma.jpg"} pais={"Itália"} cidade={"Roma"} imagem={"Fotoroma"} />
            <City icon={"/EllipsePraga.jpg"} pais={"França"} cidade={"Paris"} imagem={"Fotopraga"} />
            <City icon={"/EllipseAmsterdam.jpg"} pais={"Holanda"} cidade={"Amsterdã"} imagem={"Fotoamsterda"} />
        </Grid>
        </>
    )
}