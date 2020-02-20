

import React,{Component}from 'react';
import {View,Text,StyleSheet, Image, ImageBackground} from 'react-native';
import Counter from './app/Hello.js';
//view 代替的是div --容器组件
//Text  --显示文本的组件
// class Hello extends Component{
//   render(){
//     return(
//       <Text>Hello world</Text>
//     )
//   }
// }
export default class App extends Component{
  render(){
    let a={
      width:100,
      height:100, 
      backgroundColor:'red'
    }
    const styles=StyleSheet.create({
      box:{
        width:100,
        height:100, 
        backgroundColor:'red'
      },
      txt:{
        color:'blue',
        fontSize:20
      },
      bigblue:{
        fontSize:20
      }
    })
    return(
      <View>
        {/* <Counter/>
        <View style={styles.box}>
          <Text style={[styles.bigblue,styles.txt]}>
            你好
            <Text>inner01</Text> 
            <Text>inner02</Text> 
            </Text>
            <Text>inner01</Text> 
            <Text>inner02</Text> 
          </View> */}
          {/* <Image source={require('./images/kobe.png')}/> */}
          {/* <Image style={styles.box} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}/> */}
          <ImageBackground style={{width:'100%',height:'100%'}} source={require('./images/kobe.png')}>
            <Text style={{fontSize:50,color:'white'}}>我在里边</Text>
          </ImageBackground>
      </View>
    )
    
  }
}





