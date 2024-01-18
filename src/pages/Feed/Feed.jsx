import { StatusBar } from 'react-native'
import { Box, ScrollView, Spacer } from '../../components'

import Header from '../../components/Header/Header'
import StoryList from '../../components/Story/StoryList'
import PostList from '../../components/Post/PostList'

export default function Feed(){
    return(
        <>
            <StatusBar barStyle={'dark-content'}/>
            <Box background="light">
                <Header title="Explore"/>
                <ScrollView fluid>
                    <StoryList />
                    <Spacer />
                    <PostList />
                </ScrollView>
            </Box>
        </>
    )
}