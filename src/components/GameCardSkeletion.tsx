import {CardBody, Skeleton, SkeletonText,Card} from "@chakra-ui/react";

function GameCardSkeletion(){
    return (
        <Card>
            <Skeleton width="100%"  borderRadius={10} overflow = 'hidden' height = "200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}

export default GameCardSkeletion