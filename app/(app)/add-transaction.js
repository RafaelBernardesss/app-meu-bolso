import React from 'react';
import {
    Text,
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import AppInput from '../../src/components/AppInput.js';
import AppButton from '../../src/components/AppButton.js'

export default function transaction(){
    return(

        <ScrollView contentContainerStyle={styles.container}>
            <AppInput label="Descrição" />
            <AppInput label="Valor" />

            <AppInput label="Data" />
            <AppInput label="Observação" multiline />

            <AppButton title="Salver Transação"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#f8f9fa',
    }
});