import React from "react"
import { FlatList, View, Text, StyleSheet } from "react-native";

import PlaceItem from './PlaceItem';
import { InPlace } from "../interface";
import { Colors } from "../../constants/Colors";

const PlaceList = (props: {places: InPlace[]}) => {
  if(!props.places || props.places.length === 0) return(
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}> No places added yet - start adding some!</Text>
    </View>
  )

  return(
    <FlatList
      keyExtractor={item => item.id}
      data={props.places}
      renderItem={({item}) => <PlaceItem place={item} onSelect={() => {}}/>}
    />
  )
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  }
})

export default PlaceList;
