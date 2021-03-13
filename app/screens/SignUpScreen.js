import React from "react";
import {
  Text,
  TextInput,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

function SignUpScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <View style={styles.inputBoxes}>
        <TextInput
          style={styles.inputText}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputBoxes}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputBoxes}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>

      <View style={styles.inputBoxes}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
  },
  inputBoxes: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  inputText: {
    height: 50,
    width: 150,
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  loginButton: {
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    backgroundColor: "#FFC0CB",
  },
  logo: {
    width: 250,
    height: 100,
    position: "absolute",
    top: 40,
  },
});

export default SignUpScreen;
