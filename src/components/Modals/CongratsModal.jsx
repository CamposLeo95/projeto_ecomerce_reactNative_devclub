import { StyleSheet } from "react-native";
import { Box, Button, Cover, Spacer, Text, Title } from "..";

import {colors} from '../../styles/theme.json'

export default function CongratsModal(){
    return(
        <Box
            hasPadding
            justify="center"
            align="center"
            style={style.modalContainer}
        >
            <Cover 
                width="200px"
                height="200px"
                background="transparent"
                image="https://www.gov.br/cvm/pt-br/assuntos/noticias/anexos/2022/20221101-icone-check.png/@@images/image.png"
            />
            <Spacer size="40px" />
            <Title>Congratulations</Title>
            <Spacer />
            <Text align="center">
                Your items are on the way and should arrive shortly
            </Text>
            <Spacer size="100px" />
            <Button block onPress={() => {}}>
                <Text color="light" >
                    Track your order
                </Text>
            </Button>
        </Box>
    )
}

const style = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        backgroundColor: colors.light,
        width: "100%",
        height: "100%",
        zIndex: 9999,
    }
})