import { Box,  Cover, Text, Touchable } from "..";

import { colors } from '../../styles/theme.json'

export default function Story(){
    return(
        <Touchable 
            onPress={() => console.log("Teste")}
            background="black"
            width="150px"
            height="190px"
            radius="10px"
            spacing="0px 10px 0px"
        >
            <Cover 
                width="100%" 
                height="100%" 
                image="https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.webp?b=1&s=170667a&w=0&k=20&c=cpeePSCsbsTQNZkyw31mcmgudO69CPELyCWoEAfKUsI="
            >
                <Box 
                    hasPadding background={`${colors.dark}30`} 
                    fluid 
                    justify="space-between"
                >
                    <Cover 
                        width="40px"
                        height="40px"
                        border={`1px solid ${colors.light}`}
                        image="https://media.istockphoto.com/id/1437816897/pt/foto/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring-or.webp?b=1&s=170667a&w=0&k=20&c=cpeePSCsbsTQNZkyw31mcmgudO69CPELyCWoEAfKUsI="
                        circle
                    />
                    <Box 
                        fluid 
                        height="50px" 
                        justify="flex-end"
                    >
                        <Text color='light' bold>
                            Menina Teste
                        </Text>
                        <Text color="light" variant="small">
                            2 min ago
                        </Text>
                    </Box>
                </Box>
            </Cover>
        </Touchable>
    )
}