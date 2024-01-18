import { Touchable, Title , Text, Cover, Spacer, Box } from "..";

import util from "../../util";

import { colors } from '../../styles/theme.json'

import { useNavigation } from '@react-navigation/native'

export default function Category({category= "Categoria", items= "descrição"}){

    const { navigate } = useNavigation()

    return(
        <Touchable
            width="100%"
            height="200px"
            radius="10px"
            spacing="10px 0px"
            onPress={() => navigate('category')}
        >
            <Cover
                width="100%"
                height="100%"
                image="https://www.gruposelpe.com.br/wp-content/uploads/2021/10/como-fazer-gestao-de-pessoas.jpg"
            >
                <Box 
                    background={util.toAlpha(colors.black, 50)} 
                    fluid
                    justify="center"
                    align="center"
                >
                    <Title bold color="light">{category}</Title>
                    <Text color="light">{items}</Text>
                </Box>
            </Cover>
            <Spacer />
        </Touchable>
    )
}