import React from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';


export function ButtonAdd({ onPress }){
    return (
            <TouchableOpacity 
                style={styles.button}
                activeOpacity={.8}
                onPress={onPress} //significa ao pressionar faça isso
                // o onPress branco conecta com a onPress laranja ali de cima, envolto por chaves, 
                //..e esse laranja linka essa propriedade onPress lá no arquivo 'Home.js' 
                //.. como se fosse uma propriedade do componente q eu eu //..criei e chamei de ButtonAdd.
            
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            
        )
    }

    const styles = StyleSheet.create ({
       
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
        
        
    })
        ;