import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import Input from './src/components/Input/Input';
import ListItemContainer from './src/components/ListItemContainer/ListItemContainer';

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

  placeSubmitHandler = () => {
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
    
    // const placesOutput = this.state.places.map((place, i) => (
    //   <ListItem key={i} placeName={place} />
    // ));

    return (
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler}
          />
          <Button style={styles.placeButton} title="Add" onPress={this.placeSubmitHandler} />
        </View> */}
        <Input placeholder="An awesome place" title="Add" />
        <ListItemContainer places={this.state.places} />
        {/* <View style={styles.listContainer}>{placesOutput}</View> */}
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
  },
  inputContainer:{
    // flex:1,
    width: "100%",
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  },
  listContainer:{
    width:"100%",
  }
});
