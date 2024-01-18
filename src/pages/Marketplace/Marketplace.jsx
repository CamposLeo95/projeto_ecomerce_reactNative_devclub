import { Touchable } from "../../components";

import Header from "../../components/Header/Header";
import CategoryList from "../../components/Category.jsx/CategoryList";

import { SimpleLineIcons } from '@expo/vector-icons';

export default function Marketplace(){
    return(
        <>
            <Header 
                title="Categories" 
                right={() => (
                    <Touchable align="center">
                        <SimpleLineIcons 
                            name="bag" 
                            size={16} 
                            color="black" 
                        />
                    </Touchable>
                )}
            />
            <CategoryList />
        </>
    )
}