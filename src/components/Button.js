import React from 'react';
import { TouchableOpacity ,Text,StyleSheet} from 'react-native';



const Button = ({onPress,children}) =>{
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({

    textStyle:{
        color:'blue',
        fontSize:15,
        alignSelf:'center',
        
    },
    buttonStyle:{
        flex:1,
        backgroundColor:'white',
        alignSelf:'stretch',
        marginLeft:30,
        marginRight:30,
        borderWidth:2,
        borderColor:'blue',
        padding:5,
        elevation:2
    }

})

export default Button;