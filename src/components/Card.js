import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
   
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

}
    const styles=StyleSheet.create({
        containerStyle:{
            borderWidth:1,
            borderRadius:2,
            elevation:1,
            borderBottomWidth:0,
            borderColor:'#f8f8f8',
            shadowColor:'#000',
            shadowOffset:{width:0,height:2},
            shadowRadius:2,
            shadowOpacity:0.1,
            marginLeft:5,
            marginRight:5,
            marginTop:10,
            padding:10
        }
    })


export default Card;