
import { 
    Box, 
    ScrollView, 
    Text, 
    Title, 
    Cover, 
    Touchable, 
    Spacer, 
    Button
} from "../../components";

import { StatusBar } from "react-native";

import Header from '../../components/Header/Header'

import { SimpleLineIcons } from '@expo/vector-icons';
import util from "../../util";
import { colors } from '../../styles/theme.json'
import Picker from "../../components/Picker/Picker";

export default function Product(){
    return(
        <>
        <StatusBar barStyle={'light-content'}/>
            <Header 
                title="Air Jordan"
                goBack
                right={() =>( 
                    <Touchable align="center">
                        <SimpleLineIcons 
                            name="bag" 
                            size={16} 
                            color="black" 
                        />
                    </Touchable>
                )}
            />
            <ScrollView fluid>
                <Cover
                    width="100%"
                    height="400px"
                    image="https://i.pinimg.com/736x/43/40/12/434012ce0895e04fdb003e4ad0cd1f29.jpg"
                >
                    <Box 
                        fluid 
                        background={`${util.toAlpha(colors.black, 50)}`}
                        justify="flex-end"
                    >
                        <Title 
                            width="100%" 
                            color="light" 
                            hasPadding
                            variant="big"
                        >$1080</Title>    
                    </Box>
                </Cover>
                <Spacer size="35px"/>
                <Box hasPadding>
                    <Text color="black" bold>Shirts</Text>
                    <Spacer size="35px"/>
                    <Title bold>A.P.C COLLECTION SPRING 2015</Title>
                    <Spacer size="35px"/>
                    <Text color="black" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias pariatur consectetur, provident accusantium soluta perferendis sint dolores architecto itaque quaerat laboriosam suscipit harum aliquam labore repellendus minima, corporis odit at? 
                    </Text>
                    <Spacer size="35px"/>

                    <Picker 
                        title="Size"
                        options={[
                            {label: 'P', value:'P'},
                            {label: 'M', value:'M'},
                            {label: 'G', value:'G'},
                            {label: 'XG', value:'XG'},
                        ]}
                        initialValue="M"
                    />

                    <Spacer size="35px"/>
                    <Button 
                        block
                        background="primary"
                    >
                        <Text color="light" bold>
                            Add to Cart
                        </Text>
                    </Button>
                </Box>
            </ScrollView>

        </>
    )
}