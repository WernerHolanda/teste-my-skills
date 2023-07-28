import React from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet
 } from 'react-native';

export function SkillCard({ skill // a 'skill' laranja aqui é o link com o Home, para passar exatamente as propriedades que passaram aqui. Lembrando que na HOme, eu tenho que chamar essa propriedade 'Skill' 
}){
    return(
            <TouchableOpacity key={skill // a 'skill' aqui sgn que o txt passado ficará opaco se clicado.
            } style={styles.buttonSkill}>
                <Text style={styles.textSkill}>
                    {skill //a 'skill' aqui significa que é pra escrever o txt de qual skill foi passada
                    } 
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({

    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius:50,
        alignItems: 'center',
        marginVertical: 10,
        
    },

    textSkill: {
        color: '#FFF',      
        fontSize: 22,
        fontWeight: 'bold',
        
    },   
})
    