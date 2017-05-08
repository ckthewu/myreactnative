/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Animated,
  NavigatorIOS,
  Button
} from 'react-native';

class MySuccess extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    登陆成功
                </Text>
            </View>
        )
    }
}
class MyButton extends Component{
    render(){
        return(
            <TouchableHighlight onPress={this.props.onMyButtonPress} activeOpacity={0.7} style={{width: "100%"}} underlayColor="#fc541e">
                <View style={styles.buttonBox}>
                    <Text style={styles.buttonText}>
                        确定
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}
class MyHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            phoneNumber: "",
            passCode: ""
        }
    }
    handlePhoneNumberChange(text){
        this.setState({phoneNumber: text});
    }
    handlePassCodeChange(text){
        this.setState({passCode: text});
    }
    login(e){
        if (this.state.phoneNumber === "12345" && this.state.passCode ==="1234" ) {
            this.props.navigator.push(this.props.success);
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput value={this.state.phoneNumber} style={styles.inputText} onChangeText={(text)=>this.handlePhoneNumberChange(text)} placeholder="请输入手机号码"/>
                <TextInput value={this.state.passCode} style={styles.inputText} onChangeText={(text)=>this.handlePassCodeChange(text)} secureTextEntry={true} placeholder="请输入验证码"/>
                <MyButton onMyButtonPress={(e)=>this.login(e)}></MyButton>
            </View>
        )
    }
}

export default class myreactnative extends Component {

  constructor(props, context){
    super(props, context);
  }
  render() {
      let successPage = {
          component: MySuccess,
          title: '成功页'
      }
      let homePage = {
          component: MyHome,
          title: '登陆页',
          passProps:{
              success: successPage
          }
      }
    return (
        <NavigatorIOS
            initialRoute={homePage}
            style={{flex: 1}}
        />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginLeft: '10%'
  },
  inputText : {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderLeftColor: 'red',
  },
  buttonBox: {
      marginTop: 10,
      width: '100%',
      height: 32,
      backgroundColor: '#fc541e'
  },
  buttonText: {
      lineHeight: 32,
      textAlign: 'center',
      color: '#FFF',
  }
});

AppRegistry.registerComponent('myreactnative', () => myreactnative);
