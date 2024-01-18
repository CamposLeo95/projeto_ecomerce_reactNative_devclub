import { Box } from "..";
import Post from "./Post";


export default function PostList(){
    return(
        <Box>
            {Array.from(Array(15)).map((item,index) => (
                <Post key={index}/>
            ))}
        </Box>
    )
}