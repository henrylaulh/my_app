import React, {Component} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// create a component
class Input extends Component {

    state = {
        placeName
    }

    placeName = val => {

    } 

    placeNameChangeHandler = val => {

    }


    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput}
                    placeholder={props.placeholder}
                    // value={this.state.placeName} 
                    // onChangeText={this.placeNameChangeHandler}
                />
        
                <Button 
                    style={styles.placeButton} 
                    title={props.title} 
                    // onPress={this.placeSubmitHandler} 
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


export default Input;


// const input = (props) => (



//     <View style={styles.inputContainer}>

//         <TextInput 
//             style={styles.placeInput}
//             placeholder={props.placeholder}
//             // value={this.state.placeName} 
//             // onChangeText={this.placeNameChangeHandler}
//         />

//         <Button 
//             style={styles.placeButton} 
//             title={props.title} 
//             // onPress={this.placeSubmitHandler} 
//         />

//     </View>
// );