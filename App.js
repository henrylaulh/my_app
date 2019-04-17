import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

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
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput 
          placeholder="An awesome place" 
          title="Add"
          onPlaceNameChange={this.placeNameChangeHandler}
          onPlaceSubmit={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} />
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
