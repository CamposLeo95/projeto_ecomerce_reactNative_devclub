import { Box, ScrollView, Text } from "..";
import Order from "./Order";


export default function OrderList(){
    return(
        <ScrollView hasPadding>
            {Array.from(Array(5)).map((item, index) => (
                <Order key={index}/>   
            ))}

        </ScrollView>
    )
}