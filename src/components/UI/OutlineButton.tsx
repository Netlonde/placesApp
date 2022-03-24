import { Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

const OutlineButton = (props: any) => {
  return(
    <Pressable style={({pressed}) => [styles.Button, pressed && styles.Pressed]} onPress={props.onPress}>
      <Ionicons style={styles.Icon} name={props.icon} size={18} color={Colors.primary500} />
      <Text style={styles.Text} >{props.children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500
  },
  Pressed: {
    opacity: 0.7
  },
  Icon: {
    marginRight: 6
  },
  Text: {
    color: Colors.primary500
  }
})

export default OutlineButton;
