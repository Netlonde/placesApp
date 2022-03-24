import React, { useState } from "react";
import { View, StyleSheet, Button, Alert, Image, Text } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from "../../constants/Colors";
import OutlineButton from "../UI/OutlineButton";

const ImagePicker: React.FC = () => {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [imageUri, setImageUri] = useState('');

  async function verifyPermission() {
    if(cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if(cameraPermissionInformation?.status === PermissionStatus.DENIED){
      Alert.alert('Insufficient Permissions!',
                  'You need to grant campera permission to use this app.'
      );
      return false
    }

    return true;
  }

  async function handleTakeImage(){
    const hasPermission = await verifyPermission();

    if(!hasPermission) return;

    const image: any = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5
    });
    setImageUri(image.uri)
  }

  let imagePreview = (
    <View style={styles.ImagePreview}>
      <Text>No images taken yet.</Text>
    </View>
  )

  if(imageUri){
    imagePreview = (
      <View style={styles.ImagePreview}>
        <Image style={styles.Image} source={{uri: imageUri}} />
      </View>
    )
  }

  return(
    <View>
      {imagePreview}
      <OutlineButton icon="camera" onPress={handleTakeImage}>Take Image</OutlineButton>
    </View>
  )
}

const styles = StyleSheet.create({
  ImagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },
  Image: {
    width: '100%',
    height: '100%',
  }
})

export default ImagePicker;
