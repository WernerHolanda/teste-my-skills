import React, { useState, useEffect } from 'react';
import {  View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput,
    Platform, 
    FlatList,
    StatusBar
} from 'react-native';
import { ButtonAdd } from '../components/ButtonAdd';
import { SkillCard } from '../components/SkillCard';


export function Home(){
    const [newSkill,setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([])
    const [gretting, setGretting] = useState('')

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]) //setMy...significa atualizeminhas skills, pegando o estado antigo, spreadoperator, pegar minha old state, e adicione a newSkill
    }

    useEffect(() => { //useEffect é para renderizar uma alteração/ou estado, o 1ªparam é uma função, 2º é '[]' e isso carrega toda vez q o app for acessado. 
        const currentHour = new Date().getHours();
        
        if(currentHour < 12){
            setGretting('Good morning');
        }
        else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good Afternoon');
        }
        else {
            setGretting('Good Night');
        }

    }, [])

    
    

    return (
        <View style={styles.container}>
            
            <StatusBar barStyle="light-content" />

            <Text style={styles.title}>{gretting}</Text>

            <Text style={styles.title}>Welcome back again, Werner!</Text>
            
            <Text style={styles.title}>Lets put some of yours already learned dev languages:</Text>

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

            <FlatList
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item}// AQUI signf que eu desestruturei '{({item})}' e que peguei o item.item                    />
                    />
            )}
            />
            
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