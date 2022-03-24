import React from "react"
import { View, Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const IconButton = (props: {icon: any, size: number, color: any, onPress: any}) => {
  return(
    <Pressable
      style={({pressed}) => [styles.Button, pressed && styles.Pressed]}
      onPress={props.onPress}
    >
      <Ionicons name={props.icon} size={props.size} color={props.color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Button: {
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Pressed: {
    opacity: 0.7
  }
})

export default IconButton;
