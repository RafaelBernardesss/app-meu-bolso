import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Platform,
} from 'react-native';
import {useRouter} from "expo-router";
//components
import BalanceCard from "../../src/components/BalanceCard.js";
import {COLORS} from '../../src/constants/Theme.js';
import AppButton from '../../src/components/AppButton.js';  


export default function Home() {

    const router = useRouter();

    return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Meu Bolso</Text>
                        <Text style={styles.sub}>Resumo financeiro</Text>
                        <TouchableOpacity style={styles.profileView} onpress={() => router.push("/Perfil")}>
                            <Text style={styles.profile}>Perfil</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <BalanceCard balance={1000} />

                <AppButton title="Gerar relatorio PDF"/>
                <View style={styles.row}>
                    
                </View>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding:24,
        paddingTop:60
    },

    header: {
        justifyContent: 'between',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: '900',
        color: '#2f3640'
    },

    sub: {
        fontSize: 16,
        paddingTop: 20,
        color: '#7f8c8d'
    },

    profile: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'right',
    },

    profileView:{
        alignSelf: 'flex-end'
    },

    row: {
        flexDirection: 'row',
        marginHorizontal: -4
    },
})