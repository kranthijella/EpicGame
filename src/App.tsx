import {Grid, Show, GridItem, HStack} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import Genres from "./components/Genres.tsx";
import {useState} from "react";
import {Genre} from "./hooks/UseGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/UseGames.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery{
    genre : Genre |null ;
    platform : Platform | null;
    sortOrder : string
    searchText : string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return(
      <>
          <Grid templateAreas = {{
              base : `"nav"  "main"`,
              lg : `"nav nav" "aside main"`
          }}
                templateColumns={{
                base :'1fr',
                    lg : '200px 1fr'
                }}
          >
                <GridItem area = 'nav' >
                    <NavBar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
                </GridItem>
                <Show above="lg">
                    <GridItem area = 'aside' paddingX={5}>
                        <Genres onSelectedGenre={(genre) => setGameQuery({...gameQuery,genre})}/>
                    </GridItem>
                </Show>
                <GridItem area = 'main' >
                    <GameHeading gameQuery={gameQuery}/>
                    <HStack spacing={5} paddingLeft={3} marginBottom={5}>
                        <PlatformSelector selectedPlatform = {gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
                        <SortSelector sortOrders ={gameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})} />
                    </HStack>
                    <GameGrid gameQuery={gameQuery}/>

                </GridItem>
          </Grid>
      </>
  )
}

export default App
