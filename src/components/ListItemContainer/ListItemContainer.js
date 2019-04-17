import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const listItemContainer = (props) => (

    <View style={styles.listContainer}>
        {props.places.map((place, i) => (
            <ListItem key={i} placeName={place} />
        ))}
    </View>
);

const styles = StyleSheet.create({
    listContainer:{
        width:"100%",
    }
});

export default listItemContainer;