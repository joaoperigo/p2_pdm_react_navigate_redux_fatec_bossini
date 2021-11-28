import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import BotaoCabecalho from '../componentes/BotaoCabecalho'
import Cores from '../constantes/Cores'
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela'
import ListaDeContatosTela from '../telas/ListaDeContatosTela'
import MapaTela from '../telas/MapaTela'
import NovoContatoTela from '../telas/NovoContatoTela'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="ListaDeContatos"
            screenOptions={{
                headerStyle:{backgroundColor: Cores.neutral},
                headerTintColor: 'white'
            }}>
            <Stack.Screen 
                name="DetalhesDoContato" 
                component={DetalhesDoContatoTela}
                options={(props) => ({
                    headerTitle: props.route.tituloContato
                })}
                />
            <Stack.Screen 
                name="ListaDeContatos" 
                component={ListaDeContatosTela}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons
                            HeaderButtonComponent={BotaoCabecalho}>
                            <Item 
                               title="Adicionar"
                               iconName="md-add"
                               onPress={() => {
                                    props.navigation.navigate('NovoContato')
                               }} 
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen name="Mapa" component={MapaTela}/>
            <Stack.Screen name="NovoContato" component={NovoContatoTela} />
        </Stack.Navigator>   
    </NavigationContainer>
)

export default container
