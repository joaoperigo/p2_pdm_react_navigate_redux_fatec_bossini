import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import * as contatosActions from '../store/contatos-actions'
import Cores from '../constantes/Cores'
import { useDispatch } from 'react-redux'

const NovoContatoTela = (props) => {
    const [novoContato, setNovoContato] = useState('')
    const [numTel, setNumTel] = useState()
    const dispatch = useDispatch()
    const novoContatoAlterado = (texto) => {
        setNovoContato(texto)
    }
    const numTelAlterado = (numTel) => {
        setNumTel(numTel)
    }

    const adicionarContato = () => {
        const acao = contatosActions.addContato(novoContato, numTel)
        dispatch(acao)
        setNovoContato('')
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.titulo}>Novo contato</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={novoContatoAlterado}
                    value={novoContato}
                    placeholder="Nome do contato"
                />
                <Text style={styles.titulo}>Número</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={numTelAlterado}
                    value={numTel}
                    placeholder="Número do contato"
                />
                    <TouchableOpacity 
                        style={styles.saveBt}  
                        onPress={() => adicionarContato()}
                    >
                        <Text
                            style={styles.saveBtTxt}  
                        > Salvar </Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default NovoContatoTela

const styles = StyleSheet.create({
    form: {
        margin: 40
    },
    titulo: {
        fontSize: 30,
        marginBottom: 12,
        fontWeight: 'bold',
        color: Cores.primary,
    },
    textInput: {
        borderColor: Cores.neutral,
        borderWidth: 4,
        marginBottom: 12,
        paddingVertical: 8,
        paddingHorizontal: 15,
        fontSize: 30,
    },
    saveBt: {

    },
    saveBtTxt: {
        backgroundColor: Cores.secondary,
        color: Cores.dark,
        fontSize: 26,
        fontWeight: 'bold',
        padding: 20,
        textAlign:'center',
        borderRadius: 5,
        marginTop: 20
    }
})
