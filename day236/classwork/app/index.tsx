import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function Index() {

  const showAlert = () => {
  Alert.alert(
    'Log in',
    'You have succesfully logged in!',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ],
    { cancelable: true } 
  );
};
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View style={styles.box}>
        <Text style={styles.texts}>Log in</Text>
        <TextInput placeholder="Enter your email" style={styles.input} />
        <TextInput placeholder="Enter your password" style={styles.input} />
        <View style={styles.button}>
          <Button title="Submit" onPress={showAlert} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    margin: 5,
    backgroundColor: "white"
  },
  texts: {
    fontWeight: 700,
    margin: 25,
    fontSize: "x-large",
    color: "white"
  },
  button: {
    margin: 30,
    width: 300
  },
  box: {
    width: 500,
    height: 300,
    backgroundColor: "lightgray",
    borderRadius: 50,
    color: "white",
  }
})