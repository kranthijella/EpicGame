import {HStack, Icon} from "@chakra-ui/react";
import {Text} from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox,FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";

interface Props{
    platforms : Platform[]
}

function PlatformList({platforms}: Props){
    const iconMap:{[key: string]: IconType} ={
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe,
        nintendo : SiNintendo
    }
    return (
        <HStack mt ="1em">
            {platforms.map((platform ) =>
            <Icon as ={iconMap[platform.slug]} color = "gray.500"></Icon>)}
        </HStack>
    )
}

export default PlatformList