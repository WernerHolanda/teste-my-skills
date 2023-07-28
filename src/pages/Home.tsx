import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import {  View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';

export function Home(){
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Welcome again, Werner</Text>
            
            <TextInput 
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555" 
            />

            <TouchableOpacity 
            style={styles.button}
            activeOpacity={.8}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginTop: 50 }]}>
                My Skills
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 70,
        
        backgroundColor: '#121015',
        
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    
    },

    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS =='ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },

    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    }
    ,
    
})
    ;