import { StatusBar } from "react-native"
import { Box, Title, Text, Spacer, Button, Input } from "../../components"

import {useNavigation} from '@react-navigation/native'
import { useState } from "react";

import api from '../../services/api'

export default function SignIn(){
    const {navigate} = useNavigation()

    const [user, setUser] = useState ({
        email: '',
        password: ''
    })

    const requestLogin = async () => {
        try {
            const { data } = await api.get('/users', {
                params: {
                    email: user.email,
                    password: user.password
                }
            })
            console.log(data);
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <>
            <StatusBar barStyle="dark-content" />
            <Box background="light" justify="center" align="center" hasPadding >
                <Title bold variant="big"> LOOKUP </Title>
                <Spacer size="50px" />

                <Title>  SignIn my account </Title>
                <Spacer size="50px" />

                <Input 
                    placeholder="E-mail" 
                    value={user.email}
                    onChangeText={(email) => setUser({...user, email})}
                />
                <Spacer />
                <Input 
                    placeholder="Password" 
                    value={user.password}
                    onChangeText={(password) => setUser({...user, password})}
                    secureTextEntry
                />
                <Spacer size="50px" />
                <Button block onPress={requestLogin}>
                    <Text color="light">
                        SignIn my account
                    </Text>
                </Button>
                <Spacer />
                    <Text underline onPress={() => navigate('signup')}>
                        Create a new account
                    </Text>

            </Box>
        </>
    )
}