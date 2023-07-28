import React, { useState } from 'react';

import { Platform } from 'react-native';
import {  View, Text, StyleSheet, SafeAreaView, TextInput, } from 'react-native';
import { ButtonAdd } from '../components/ButtonAdd';
import { SkillCard } from '../components/SkillCard';


export function Home(){
    const [newSkill,setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])
    const [] = useState('')

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]) //setMy...significa atualizeminhas skills, pegando o estado antigo, spreadoperator, pegar minha old state, e adicione a newSkill
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Welcome again, Werner</Text>
            
            <TextInput 
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555" 
            onChangeText={setNewSkill}//aqui é a propriedade que diz q tda vez q mudar o txt setnewskill, vai mudar o texto do que está mostrando nesse inpút
            />

             
            <ButtonAdd onPress={handleAddNewSkill} //onPress é uma propriedade do componente Button
            />
            
            <Text style={[styles.title, { marginTop: 50 }]}>
                    My Skills                
            </Text>
        
            {  // abaixo signf que eu quero pelo map, a propriedade skill linkada no component Skill que receberá uma função exportada do SKillCard.js, com as propriedades lá colocadas, e que deve apresentar o testo {skill}
                mySkills.map(skill => (
                    <SkillCard skill={skill}
                    />
                ))        
            }
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
        padding: Platform.OS ==='ios' ? 15 : 10,
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