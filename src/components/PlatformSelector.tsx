import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/UsePlatform.ts";
import {Platform} from "../hooks/UseGames.ts";

interface Props{
    onSelectedPlatform : (platform: Platform) => void ;
    selectedPlatform : Platform | null
}
function PlatformSelector({selectedPlatform,onSelectedPlatform}: Props){
    const {data,error} = usePlatforms()
    if(error) return null
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform ? selectedPlatform.name : 'Platform'}
            </MenuButton>
            <MenuList>
                {data.map((item) => <MenuItem onClick={() => onSelectedPlatform(item)} key={item.id}>{item.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector