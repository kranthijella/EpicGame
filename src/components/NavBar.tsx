import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./colorModeSwitch.tsx";
import SearchInput from "./searchInput.tsx";
interface Props{
    onSearch : (searchText:string) => void;
}
function NavBar({onSearch}:Props){
    return(
        <>
            <HStack justifyContent ="space-between" >
                <Image src = {logo} boxSize="60px" ></Image>
                <SearchInput onSearch={onSearch}/>
                <ColorModeSwitch/>
            </HStack>
        </>
    )
}

export default NavBar