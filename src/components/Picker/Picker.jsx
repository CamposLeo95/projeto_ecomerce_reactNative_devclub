import { Box, Text, Touchable, Spacer } from '../index'

import { StyleSheet } from 'react-native'

import { colors } from '../../styles/theme.json'

import { useEffect, useState } from 'react'

export default function Picker({title = "", options = [], initialValue = 'M'}){

    const [isChecked, setIsChecked] = useState ('')

    useEffect(() => {
        setIsChecked(initialValue)
    },[])

    return(
        <Box>
            <Text color="black" bold>{title}</Text>
            <Spacer />
            <Box row fluid height="50px">
                {options.map((opt, index) => (
                    <Touchable 
                        onPress={() => setIsChecked(opt.value)}
                        key={index} 
                        radius="7px"
                        style={[
                            style.base, 
                            style[isChecked === opt?.value ? 'checked': 'unchecked']
                        ]}
                    >
                        <Text
                            bold
                            style={isChecked === opt?.value && style.textChecked}
                        >
                            {opt.label}
                        </Text>
                    </Touchable>
                )) }
            </Box>
        </Box>
    )
}

const style = StyleSheet.create({
    base: {
        maxWidth: 35,
        height: 35,
        marginRight: 10,
        justifyContent: "center",
        alignItems:"center",
    },
    checked: {
        backgroundColor: colors.primary
    },
    textChecked: {
        color: colors.light
    },
    unchecked: {
        borderColor: colors.muted,
        borderWidth: 1,
        
    }
})