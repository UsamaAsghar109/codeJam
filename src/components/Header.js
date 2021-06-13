import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const Header = (props) =>{
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    headerTextStyle:{
        fontSize:20,
        color:'black'
        
    },
    headerContainer:{
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
       
        
    }
})

export default Header;