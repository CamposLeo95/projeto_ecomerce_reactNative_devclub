import { Box, Text, ScrollView } from "../index"

import Story from "./Story"

export default function StoryList(){
    return(
        <Box fluid hasPadding height="280px">
            <Box fluid row justify="space-between" height="50px">
                <Text bold color="dark">
                    Stories
                </Text>
                <Text color="danger" >
                    Show All
                </Text>
            </Box>
            <ScrollView horizontal>
                {Array.from(Array(10))?.map((item, index) => (
                    <Story key={index}/>
                ))}
            </ScrollView>
        </Box>
    )
}