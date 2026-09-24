import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Platform
} from 'react-native';

export default function Home() {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.container}>
                <Text>Você esta na HomePage</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

})