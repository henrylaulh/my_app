import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

// Import image like this will auto update its source path when its on different devices
import placeImage from './src/assets/images/beautiful-place.jpg';

export default class App extends Component {

  state = {
    placeName : '',
    places : [],
  }

  // By using "functionName = () => {}"
  // 'this' will refers to the class
  // Using "functionName(){}", 'this' will not do the case
  placeNameChangeHandler = val => {
    this.setState({
      placeName: val,
    })
  }




  placeSubmitHandler = val => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          {
            key: Math.random().toString(), 
            name: prevState.placeName,
            image: placeImage
          }
        )
      };
    });
  }




  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }




  render() {
    return (
      <View style={styles.container}>
        <PlaceInput placeholder="An awesome place" title="Add"
          onPlaceNameChange={this.placeNameChangeHandler}
          onPlaceSubmit={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
