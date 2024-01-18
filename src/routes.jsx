import { NavigationContainer  } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

import Home from './pages/Home/Home';
import SignIn from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import Feed from './pages/Feed/Feed';
import Marketplace from './pages/Marketplace/Marketplace';
import Product from './pages/Marketplace/Product';
import Category from './pages/Marketplace/Category';
import Cart from './pages/Cart/Cart';
import Orders from './pages/Orders/Orders';

import { colors } from './styles/theme.json'

import util from './util';

import { FontAwesome } from '@expo/vector-icons';
import { Title } from './components';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const CustomDrawerComponent = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <Title 
                bold  
                color="light" 
                variant="big"  
                hasPadding 
            >
                LOOKAPP
            </Title>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const DrawerComponent = () =>{
    return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerComponent {...props} />}
        screenOptions={{
            drawerActiveBackgroundColor:colors.primary,
            drawerActiveTintColor: colors.light,
            drawerInactiveTintColor: util.toAlpha(colors.light, 60),
            drawerStyle: {
                backgroundColor: colors.black,
              },
            headerShown: false
        }}
    >
            <Drawer.Screen 
                options={{
                    drawerIcon:({ color }) =>{
                        return <FontAwesome name="users" color={color} />
                    }
                }} 
                name="Feed"     
                component={Feed}
            />
            <Drawer.Screen 
                options={{
                    drawerIcon:({ color }) =>{
                        return <FontAwesome name="bookmark" color={color} />
                    }
                }}
                name="Marketplace"     
                component={Marketplace}
            />
            <Drawer.Screen 
                options={{
                    drawerIcon:({ color }) =>{
                        return <FontAwesome name="shopping-basket" color={color} />
                    }
                }}
                name="Orders"     
                component={Orders}
            />
        </Drawer.Navigator>
    )}

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
               <Stack.Screen 
                    options={{headerShown:false}} 
                    name="home" 
                    component={Home} 
                />
               <Stack.Screen 
                    options={{headerShown:false}} 
                    name="signin" 
                    component={SignIn} 
                />
               <Stack.Screen 
                    options={{headerShown:false}} 
                    name="signup" 
                    component={SignUp} 
                />
               <Stack.Screen 
                    options={{headerShown:false}} 
                    name="feed" 
                    component={DrawerComponent} 
                />
                <Stack.Screen 
                    options={{headerShown:false}} 
                    name="product" 
                    component={Product} 
                />
                <Stack.Screen 
                    options={{headerShown:false}} 
                    name="category" 
                    component={Category} 
                />
                <Stack.Screen 
                    options={{headerShown:false}} 
                    name="cart" 
                    component={Cart} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}