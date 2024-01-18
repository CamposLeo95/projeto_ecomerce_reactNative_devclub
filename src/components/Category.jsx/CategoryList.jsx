import { ScrollView } from "..";
import Category from "./Category";

export default function CategoryList(){
    return(
        <ScrollView hasPadding fluid>
            {Array.from(Array(20))?.map((item, index) => (
                <Category key={index} />
            ))}
        </ScrollView>
    )
}