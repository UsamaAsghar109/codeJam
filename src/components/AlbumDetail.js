import { StyleSheet } from 'react-native';
import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({place}) => {
    const {name, username, id,website}=place;
  return (
    <Card>
      <CardSection>
        <View style={styles.idContentStyle}>
          <Text>{id}</Text>
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{name}</Text>
          <Text>{username}</Text>
          <Text>Website: {website}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Button onPress={()=>console.log(name)}>Press</Button>
      </CardSection>
    </Card>
  );
};

const styles=StyleSheet.create({
    headerContentStyle:{
        flexDirection:'column'
    },
    idContentStyle:{
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        alignItems:'center',
        
       
    },
    idTextStyle:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#000',
        height:10,
        width:10
    }
})

export default AlbumDetail;
