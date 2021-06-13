import React, { Component } from 'react';
import {Text,View, ScrollView} from 'react-native';
import axios from'axios';
import AlbumDetail from './AlbumDetail';



class AlbumList extends Component{
    state ={
        places: [],
    }
    componentDidMount(){
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => this.setState({places:response.data}));
    }

    renderData(){
        return this.state.places.map(place=>
            <AlbumDetail place={place} key={place.id}/>);
    }

    render()
    {
        // console.log(this.state);
        return(
            <ScrollView>
            <View>{this.renderData()}</View>
            </ScrollView>
        );
    }
}

export default AlbumList;