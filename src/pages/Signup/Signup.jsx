import { StatusBar } from "react-native"
import { Box, Title, Text, Spacer, Button, Input, Touchable } from "../../components"

export default function SignUp({navigation: {navigate}}){
    return(
        <>
         <StatusBar barStyle="dark-content" />
            <Box background="light" justify="center" align="center" hasPadding >
                <Title>
                    Create new account
                </Title>
                <Spacer />
                <Text> 
                    Enter your details bellow
                </Text>
                <Spacer size="50px" />
                <Input placeholder="Name"/>
                <Spacer />
                <Input placeholder="E-mail" />
                <Spacer />
                <Input placeholder="Password" secureTextEntry/>
                <Spacer size="50px" />
                <Button block>
                    <Text color="light">
                        Create a new account
                    </Text>
                </Button>
                <Spacer />
                {/* <Touchable onPress={() => navigation.navigate('signin')}> */}
                    <Text 
                        underline 
                        onPress={() => navigate('signin')}
                    >
                        Back to SignIn
                    </Text>

            </Box>
        </>
    )
}