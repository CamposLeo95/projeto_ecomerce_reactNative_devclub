import { ScrollView } from '../index'
import Product from './Product'

export default function ProductList(){
    return(
        <ScrollView fluid >
            {Array.from(Array(40)).map((item, index) => (
                <Product key={index}/>   
            ))}
        </ScrollView>
    )
}