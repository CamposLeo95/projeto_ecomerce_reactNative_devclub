import { Box, Text, Cover, Touchable, Spacer } from "..";
import { Entypo, AntDesign, FontAwesome5  } from '@expo/vector-icons';

import {colors} from '../../styles/theme.json'

export default function Post(){
    return(
        <Box hasPadding fluid>
                <Box row >
                    <Box row align="center">
                        <Cover 
                            circle 
                            width="40px" 
                            height="40px"
                            image="https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.webp?b=1&s=170667a&w=0&k=20&c=cpeePSCsbsTQNZkyw31mcmgudO69CPELyCWoEAfKUsI="
                        />
                        <Box spacing="0px 0px 0px 10px">
                            <Text bold color="dark"> 
                                Menina Silva
                            </Text>
                            <Text variant="small">20 Minutes ago</Text>
                        </Box>
                    </Box>
                    <Touchable 
                        height="40px" 
                        width="100px" 
                        align="flex-end"
                        onPress={() => console.log("object")}
                        spacing="0px 15px 0px 0px"
                    >
                        <Entypo 
                            name="dots-three-horizontal" 
                            size={18} 
                            color={colors.muted} 
                        />
                    </Touchable>
                </Box>

                <Cover 
                    width="100%"
                    height="220px"
                    radius="10px"
                    spacing="10px 0px"
                    image="https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.webp?b=1&s=170667a&w=0&k=20&c=cpeePSCsbsTQNZkyw31mcmgudO69CPELyCWoEAfKUsI="
                />

                <Box fluid row align="center">
                    <Box align="center" row>
                        {Array.from(Array(3)).map((item, index) => (
                            <Cover 
                                key={index}
                                circle 
                                width="30px" 
                                height="30px"
                                spacing="0px -15px 0px 0px"
                                border={`1px solid ${colors.muted}`}
                                image="https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.webp?b=1&s=170667a&w=0&k=20&c=cpeePSCsbsTQNZkyw31mcmgudO69CPELyCWoEAfKUsI="
                            />
                        ))}
                        <Text spacing="0px 20px">
                            Liked by 10.098
                        </Text>
                    </Box>

                    <Box justify="flex-end" row align="center">
                        <Touchable 
                            width="24px" 
                            height="24px" 
                            spacing="0px 10px 0px 0px"
                        >
                            <AntDesign 
                                name="hearto" 
                                size={24} 
                                color={`${colors.danger}`} 
                            />
                        </Touchable>     
                        <Touchable 
                            width="24px" 
                            height="24px" 
                            spacing="0px 10px 0px 0px"
                        >
                            <FontAwesome5 
                                name="comment" 
                                size={24} 
                                color={`${colors.muted}`} 
                            />
                        </Touchable>  
                        <Touchable 
                            width="24px" 
                            height="24px" 
                        >
                            <AntDesign 
                                name="sharealt" 
                                size={24} 
                                color={`${colors.muted}`} 
                            />
                        </Touchable>     
                    </Box>
                </Box>

                <Spacer />

                <Text color="dark"> 
                    Interview: Shoe Designer John Fluevog On New Book, Spiritual 'Slow Fashion'
                </Text>
        </Box>

    )
}