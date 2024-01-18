import { useState } from 'react'

import Header from '../../components/Header/Header'
import Tabs from '../../components/Tabs/Tabs'
import Product from '../../components/Product/Product'
import CongratsModal from '../../components/Modals/CongratsModal'

import { Box, Text, ScrollView, Spacer, Title, Button } from '../../components'

import { colors } from '../../styles/theme.json'

import util from '../../util'
import PaymentForm from '../../components/Forms/PaymentForm'

export default function Cart(){

    const [showCongrats, setShowCongrats] = useState(false)
    const [tab, setTab] = useState('payment')

    return(
        <>
            {showCongrats && <CongratsModal />}
            <Header goBack title="Cart"/>
            <Tabs 
                tabs={[
                    {label: 'Cart', value: 'cart'},
                    {label: 'Payment', value: 'payment'},
                ]}
                active={tab}
                onChange ={ (value) => setTab(value) }
            />
            <ScrollView hasPadding>
                <Spacer size="20px"/>
                <Title variant="small">Order number is 325465461</Title>
                <Spacer size="20px"/>

                {tab === 'cart' && (
                    <>
                        {Array.from(Array(3)).map((item, index) => (
                            <Product 
                                key={index}
                                selected
                            />   
                        ))}
                        <Spacer size="30px"/>
                        <Box row justify="space-between">
                            <Text color="black">Order:</Text>
                            <Text color="black">$445.00</Text>
                        </Box>
                        <Spacer />
                        <Box row justify="space-between">
                            <Text color="black">Discount:</Text>
                            <Text color="success">$-44.50</Text>
                        </Box>
                        <Spacer />
                        <Box row justify="space-between">
                            <Text color="black">Delivery:</Text>
                            <Text color="black">$10.00</Text>
                        </Box>
                        <Spacer />
                        <Box row justify="space-between">
                            <Text color="black" bold>Total order:</Text>
                            <Text color="black" bold>$410.50</Text>
                        </Box>
                        <Spacer size="30px"/>
                        <Button block onPress={() => setTab('payment')}>
                            <Text>Place Order</Text>
                        </Button>
                        
                    </>
                )}

                {tab ==='payment' && (
                    <>
                        <Spacer size="20px"/>
                        <Box 
                            row 
                            justify="space-between" 
                            style={{
                                borderBottomWidth: 1,
                                borderColor: util.toAlpha(colors.muted,40),
                                paddingBottom: 10
                            }}
                        >
                            <Text color="dark" bold>Shipping address</Text>
                            <Text color="danger">Change</Text>
                        </Box>
                        <Spacer />
                        <Text color="dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa illo quisquam 
                        </Text>
                        <Spacer size="20px"/>
                        <Box 
                            row 
                            justify="space-between" 
                            style={{
                                borderBottomWidth: 1,
                                borderColor: util.toAlpha(colors.muted,40),
                                paddingBottom: 10
                            }}
                        >
                            <Text color="dark" bold>Delivery Details</Text>
                            <Text color="danger">Change</Text>
                        </Box>
                        <Spacer />
                        <Text color="dark">Standart Delivery</Text>
                        <Text color="dark">Staurday 27 - Tuesday 30</Text>
                        <Text color="dark">Cost: $10</Text>
                        <Spacer size="30px"/>

                        <PaymentForm 
                            onChange={(creditCardData) => console.log(creditCardData)}
                        />
                        
                        <Spacer size="30px"/>
                        <Button block onPress={() => setShowCongrats(true)}>
                            <Text color="light">Confirmation</Text>
                        </Button>
                        <Spacer size="50px"/>
                    </>
                )}

            </ScrollView>
        </>
    )
}