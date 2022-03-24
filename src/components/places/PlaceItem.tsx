import React from "react"
import { Image, View, Text, Pressable } from "react-native";

import { InPlace } from "../interface";


const PlaceItem = (props: {place: InPlace, onSelect: any}) => {
  return(
    <Pressable onPress={props.onSelect}>
      <Image source={{uri: props.place.imageUri}} />

      <View>
        <Text>{props.place.title}</Text>
        <Text>{props.place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem;
