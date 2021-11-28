import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import Cores from '../constantes/Cores'

const ContatoItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelect}
            style={styles.contatoItem}>


            <View
                style={styles.infoContainer}>
                <Text 
                    style={styles.nomeContato}>{props.nomeContato}</Text>
                <Text
                    style={styles.numero}>{props.numero}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoItem: {
        borderColor: Cores.neutral,
        borderTopWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: Cores.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        marginTop: 10
    },
    infoContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nomeContato: {
        fontSize: 30,
        marginBottom: 12,
        fontWeight: 'bold',
        color: Cores.dark,
    },
    numero: {
        fontSize: 24,
        marginBottom: 12,
        fontWeight: 'normal',
        color: Cores.dark,
    },
})

export default ContatoItem