import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import GameCardSkeletion from "./GameCardSkeletion.tsx";
import useGames from "../hooks/UseGames.ts";
import {GameQuery} from "../App.tsx";

interface Props{
    gameQuery : GameQuery
}
function GameGrid({gameQuery}:Props){
    const {data,error,isloading} = useGames(gameQuery);
    const skeletons = [1,2,3,5,6,9]
    return(
        <>
            {error && <Text>{error} </Text>}
            <SimpleGrid columns ={{sm : 1, md : 2 , lg : 3, xl : 4}} padding = '10px' spacing ={10}>
                {isloading && skeletons.map(s => <GameCardSkeletion key = {s}/>) }
                {data.map((game )=> (
                        <GameCard key ={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid