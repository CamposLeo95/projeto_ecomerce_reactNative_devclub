import { Box, Title, Touchable } from '../index'

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../styles/theme.json'

import { useNavigation } from '@react-navigation/native'

import { StatusBar, View } from 'react-native';

import util from '../../util';

export default function Header({
    title = "Explore", 
    right = false, 
    goBack = false 
}){
    const navigation = useNavigation()
    return(
        <>
        
        <StatusBar barStyle={'light-content'}/>
            <View  
                style={{
                    flexDirection: "row",
                    alignItems:"center",
                    borderBottomColor: util.toAlpha(colors.muted, 80),
                    borderBottomWidth: 1,
                }}
            >
                    <Touchable 
                        align="center"
                        fluid
                        onPress={() => navigation[!goBack 
                                    ? 'openDrawer'
                                    : 'goBack']()
                                }
                    >
                        <Ionicons 
                            name={!goBack? "menu" : "arrow-back-outline"} 
                            size={20} 
                            color="black" 
                        />
                    </Touchable>

                    <Box align="center" hasPadding>
                        <Title color="dark" bold variant="small">{title}</Title>
                    </Box>

                    {right ? right() : <Touchable></Touchable>}
            </View>
        </>

    )
}