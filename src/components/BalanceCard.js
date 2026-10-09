import React from 'react';
import {Text, StyleSheet} from 'react-native';

import AppCard from './AppCard.js'
import {formatCurrency} from '../utils/format.js'

export default function BalanceCard({balance}) {
    return (
        
        <AppCard style={styles.card}>
            <Text style={styles.title}>Saldo Atual</Text>
            <Text style={styles.balance}>{formatCurrency(balance)}</Text>
        </AppCard>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#2f3640',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 10,
        color: '#dcdde1'
    },
    balance: {
        fontSize: 30,
        fontWeight: '900',
        marginTop: 6,
        color: '#fff',
    },
});