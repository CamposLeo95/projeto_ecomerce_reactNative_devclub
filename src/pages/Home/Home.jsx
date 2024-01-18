import { StatusBar } from "react-native"

import { 
    Box, 
    Title, 
    Text, 
    Button, 
    Spacer, 
    Touchable 
} from '../../components'

import { useContext } from "react"
import { AppContext } from "../../contexts/app"

export default function Home({navigation}){

    const context = useContext(AppContext)

    return(
        <>
         <StatusBar barStyle="light-content" />
            <Box hasPadding background="dark">
                <Box justify="center" align="center" fluid>
                    <Title color="light" variant="big" bold >
                        LOOKAPP
                    </Title>
                    <Text onPress={() => alert("Hello")}></Text>
                    <Text align="center" spacing="0px 40px">
                        Stay on top the fashion world and buy your favorites looks
                    </Text>
                </Box>

                <Box fluid align="center" justify="flex-end">
                    <Button 
                        block 
                        onPress={() => navigation.navigate('signin')}
                    >
                        <Text color="light">
                        SignIn my account
                        </Text>
                    </Button>
                    <Spacer size="20px" />
                    <Touchable onPress={() => navigation.navigate('signup')}>
                        <Text  underline color="light">
                            Create new account 
                        </Text>
                    </Touchable>
                </Box>
                <Spacer size="60px"></Spacer>
            </Box>
        </>
    )
}