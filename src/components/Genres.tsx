import  {Genre} from "../hooks/UseGenres.ts";
import UseGenres from "../hooks/UseGenres.ts";
import {ListItem, List, HStack, Image, Button, Spinner, Heading} from "@chakra-ui/react";
import Crop from "../services/imagecrop.ts";

interface Props{
    onSelectedGenre : (genre : Genre) => void;
}

function Genres({onSelectedGenre}:Props){
    const {data,isloading,error} = UseGenres()
    if(error) return null
    if(isloading) return <Spinner></Spinner>
    return (
        <>
        <Heading fontSize='2xl' marginBottom={3} marginY ={1}>Genres</Heading>
        <List>
            {data.map(genres =>
                <ListItem paddingY = '5px' key={genres.id}>
                <HStack>
                    <Image objectFit='cover' boxSize = "32px" src ={Crop(genres.image_background)} borderRadius={8}/>
                    <Button whiteSpace ='normal' textAlign = 'left' onClick={()=>onSelectedGenre(genres)} variant='link' fontSize='lg'>{genres.name}</Button>
                </HStack>
            </ListItem>)}
        </List>
            </>
    )
}

export default Genres