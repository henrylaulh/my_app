import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

// Import image like this will auto update its source path when its on different devices
import placeImage from './src/assets/images/beautiful-place.jpg';

export default class App extends Component {

  state = {
    placeName : '',
    places : [],
    selectedPlace : null,
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
            image: {
              uri: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/shutterstock_351622814.jpg"
            }
          }
        )
      };
    });
  }




  placeSelectedHandler = key => {

    this.setState(prevState => {
      return {
        selectedPlace : prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }



  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} 
            onItemDeleted={this.placeDeletedHandler} 
            onModalClosed={this.modalClosedHandler}/>
        <PlaceInput placeholder="An awesome place" title="Add"
          onPlaceNameChange={this.placeNameChangeHandler}
          onPlaceSubmit={this.placeSubmitHandler}
        />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
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
