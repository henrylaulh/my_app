import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

// Import image like this will auto update its source path when its on different devices
import placeImage from './src/assets/images/beautiful-place.jpg';

class App extends Component {

  state = {
    placeName : '',
    // places : [],
    // selectedPlace : null,
  }

  // By using "functionName = () => {}"
  // 'this' will refers to the class
  // Using "functionName(){}", 'this' will not do the case
  // placeNameChangeHandler = val => {
  //   this.setState({
  //     placeName: val,
  //   })
  // }




  placeSubmitHandler = val => {
    this.props.onAddPlace(val);
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }



  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} 
            onItemDeleted={this.placeDeletedHandler} 
            onModalClosed={this.modalClosedHandler}/>
        <PlaceInput placeholder="An awesome place" title="Add"
          onPlaceNameChange={this.placeNameChangeHandler}
          onPlaceSubmit={this.placeSubmitHandler}
        />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
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


const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);