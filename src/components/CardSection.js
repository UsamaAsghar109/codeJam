import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardSection = (props) => {
   
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

}
const styles=StyleSheet.create({
    containerStyle:{
        
        borderBottomWidth:1,
        borderColor:'#f8f8f8',
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative'
    }
})


export default CardSection;