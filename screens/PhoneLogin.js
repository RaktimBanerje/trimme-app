import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import SafeAreaView from 'react-native-safe-area-view'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-input'
import ModalPicker from '../components/ModalPickerImage';

const PhoneLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
          <Text h3 h3Style={styles.loginText}>Log In</Text>
            {/* <TouchableOpacity style={{height: 40, borderWidth: 0.5, borderColor: "grey", borderRadius: 8, marginVertical: 10}}> */}
                <PhoneInput 
                    autoFormat={true}
                    initialCountry={'us'}
                    style={{height: 40, borderWidth: 0.5, borderColor: "grey", borderRadius: 8, marginVertical: 10}}
                    offset={10}
                    flagStyle={{height: 25, width: 45, margin: 10}}
                    textStyle={{fontSize: 20}}
                />
            {/* </TouchableOpacity> */}

          {/* <Input 
              placeholder='Email Address'
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={<Feather name="phone" size={24} color="black" />}
              leftIconContainerStyle={styles.leftIconContainerStyle}
          /> */}
          <Button buttonStyle={styles.primaryButtonStyle}>Log In</Button>
          <View style={styles.dividerText}>
            <Text style={styles.dividerTextStyle}>Or</Text>
          </View>
          <TouchableOpacity 
            style={styles.secondaryButtonStyle} 
            titleStyle={styles.secondaryButtonTitleStyle}
            activeOpacity={0.5}
          >
            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
            <Text>Login with Email</Text>
            <AntDesign name="right" size={24} color="black" onPress={() => navigation.goBack()}/>
          </TouchableOpacity>
          <View style={styles.signupFrame}>
              <Text style={styles.noAccountText}>Don't have an account? </Text>
              <Text style={styles.signupText}>Sign Up</Text>
          </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 14
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  loginText: {
    color: "grey",
    marginBottom: 20,
  },
  inputContainerStyle: {
    borderRadius: 8,
    borderColor: "grey",
    borderBottomWidth: 0.5,
    borderWidth: 0.5,
  },
  inputStyle: {
    paddingLeft: 10
  },
  leftIconContainerStyle: {
    marginLeft: 10
  },
  primaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    backgroundColor: "#0088E0"
  },
  secondaryButtonStyle: {
    height: 55,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#EFEFEF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  secondaryButtonTitleStyle: {
    color: "grey",
  },
  dividerText: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  dividerTextStyle: {
    fontSize: 20
  },
  signupFrame: {
    flexDirection: "row", 
    justifyContent: "center", 
    paddingTop: 24
  },
  noAccountText: {
    fontSize: 16, 
    color: "#6C6C6C"
  },
  signupText: {
    fontSize: 16, 
    fontWeight: "bold",  
    color: "#6C6C6C"
  },
})

export default PhoneLogin