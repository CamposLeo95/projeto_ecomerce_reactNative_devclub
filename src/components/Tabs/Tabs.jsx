import { StyleSheet  } from "react-native";
import {  ScrollView, Touchable, Text } from "..";

import { colors } from '../../styles/theme.json'

export default function Tabs({tabs = [], active, onChange = (tab) => {}}){

    const totalTabs = tabs?.length;

    return(
        <ScrollView 
            horizontal 
            style={{
                maxHeight: 70,
            }}
        >
              {tabs?.map((tab, index) => (
                    <Touchable
                        key={index} 
                        hasPadding
                        onPress={() => onChange(tab.value)}
                        style={[
                            {
                                width: `${100 / totalTabs}%`,
                                minWidth: 0,
                            },
                            active === tab?.value ? style.activeTabStyle : {}
                         ]}
                    >
                        <Text
                            style={
                                active === tab?.value 
                                && {color: `${colors.danger}`}}
                        >{tab.label}</Text>
                    </Touchable>
                ))}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    activeTabStyle:{
        borderBottomWidth: 3,
        borderColor: `${colors.danger}`,
    }
})