import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ContatoItem from '../componentes/ContatoItem'

const ListaDeContatosTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos)
    return (
        <FlatList 
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato => (
                <ContatoItem 
                    nomeContato={contato.item.titulo}
                    numero={contato.item.numTel}
                    onSelect={() => props.navigation.navigate('DetalhesDoContato', {
                        tituloContato: contato.item.titulo, numeroContato: contato.item.numTel, idContato: contato.item.id
                    })}
                />
                
            )}
        />
    )
}

export default ListaDeContatosTela

const styles = StyleSheet.create({})
