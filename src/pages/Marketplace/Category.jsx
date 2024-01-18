import { Box, Touchable } from "../../components";
import Header from "../../components/Header/Header";
import ProductList from "../../components/Product/ProductList";

import { SimpleLineIcons } from '@expo/vector-icons';

export default function Category(){
    return(
        <>
            <Header 
                title="Category"
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
            <Box 
                fluid 
                justify="center" 
                align="center" 
                background="muted"
            >
                <ProductList />
            </Box>
        </>
    )
}