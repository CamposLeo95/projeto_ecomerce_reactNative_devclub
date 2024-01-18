import { Box, Cover, Spacer, Text, Touchable } from '../index'

import { useNavigation } from '@react-navigation/native'

export default function Product({ 
        cover = "https://i.pinimg.com/736x/43/40/12/434012ce0895e04fdb003e4ad0cd1f29.jpg",
        brand = "Nike", 
        title = "Air Jordan", 
        price = "900",
        selected = false
    }){

        const { navigate } = useNavigation()

    return(
        <Touchable 
            hasPadding ={!selected}
            row 
            align="center" 
            background="light" 
            spacing={selected ? '5px 0' : "0px 0px 1px 0px"}
            onPress={() => navigate('product')}
        >
            <Cover 
                height="80px"
                width="80px"
                image={cover}
            />
            <Box 
                spacing="0px 0px 0px 20px" 
                fluid 
                justify="flex-start"
                style={{paddingBottom: 0, paddingTop: 0}}
            >
                <Text color="dark">{title}</Text>
                {!selected && <Text bold color="dark">{brand}</Text>}
                <Spacer />
                <Box>
                    {selected && <Text color="dark">Size: XG</Text>}
                </Box>
                <Box row justify="space-between" fluid>
                    <Text color="dark">${price}</Text>
                    <Text color="danger">
                        {!selected 
                        ? 'Add to cart'
                        : 'Remove'}
                    </Text>     
                </Box>    
            </Box> 

        </Touchable>
    )
}