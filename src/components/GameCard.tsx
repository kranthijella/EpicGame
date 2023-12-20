import {Game} from "../hooks/UseGames.ts"
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformList from "./PlatformList.tsx";
import CriticScore from "./criticScore.tsx";

interface Props{
    game : Game;
}
function GameCard({game}:Props){

    return (
        <Card borderRadius = {10} overflow = 'hidden'>
            <Image src ={game.background_image}/>
            <CardBody>
                <Heading fontSize = '2xl'>{game.name}</Heading>
                <HStack justifyContent="space-between">
                <PlatformList platforms={game.parent_platforms.map((p) => p.platform)}/>
                <CriticScore score={game.metacritic}/>
                </HStack>
                </CardBody>
        </Card>
    )
}

export default GameCard