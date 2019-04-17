import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// create a component
class PlaceInput extends Component {

    placeNameChangeHandler = val => {
        this.props.onPlaceNameChange(val);
    }

    placeSubmitHandler = () => {
        this.props.onPlaceSubmit();
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput}
                    placeholder={this.props.placeholder}
                    // value={this.state.placeName} 
                    onChangeText={this.placeNameChangeHandler}
                />
        
                <Button 
                    style={styles.placeButton} 
                    title={this.props.title} 
                    onPress={this.placeSubmitHandler} 
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputContainer:{
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
})


export default PlaceInput;