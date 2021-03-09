import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.navigateTohome=this.navigateTohome.bind(this);
  }
  static navigationOptions = ({ navigation }) => ({
    header: null //ทำให้ header หาย
  });

  navigateTohome() {
    this.props.navigation.navigate("homee");
  }

  componentWillMount(){
    setTimeout(()=> {
        this.navigateTohome()
    },4000)
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:"#267377",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <Image
       style={{width:325,height:325}}
       resizeMode="stretch"
       source={require("./img/logo.png")}
       />
       <Image
       style={{width:255,height:50,marginTop:10}}
       resizeMode="stretch"
       source={require("./img/notizymerr.png")}
       />
      </View>
    );
  }
}

export default main;
