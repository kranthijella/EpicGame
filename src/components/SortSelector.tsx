import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props{
    onSelectOrder : (sortOrder : string) => void;
    sortOrders : string
}
function SortSelector({sortOrders,onSelectOrder}:Props){
    const sortOrder = [
        {
            value : '',label : 'Relavance'
        },
        {
            value : '-added',label : 'Date added'
        },
        {
            value : 'name',label : 'Name'
        },
        {
            value : '-released',label : 'Release Date'
        },
        {
            value : 'metacritic',label : 'Popularity'
        },
        {
            value : '-rating',label : 'Average Dating'
        }
    ]
    const currentSortOrder = sortOrder.find(order => order.value === sortOrders)
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                    {currentSortOrder ? currentSortOrder.label : "Order by: Relavance"}
                </MenuButton>
                <MenuList>
                    {sortOrder.map((order) => <MenuItem onClick={() => onSelectOrder(order.value) } key ={order.value} value={order.value}>{order.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </>
    )
}

export default SortSelector