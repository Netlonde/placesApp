import React, { useState } from "react"
import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import ImagePicker from "./ImagePicker";

const PlaceForm: React.FC = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  function handleChangeTitle(enteredInput: string){
    setEnteredTitle(enteredInput);
  }

  return(
    <ScrollView style={styles.Form}>
      <View>
        <Text style={styles.Label}>Title</Text>
        <TextInput style={styles.Input} value={enteredTitle} onChangeText={handleChangeTitle}/>
      </View>

      <ImagePicker />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Form: {
    flex: 1,
    padding: 24
  },
  Label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500
  },
  Input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100
  }
})

export default PlaceForm;
