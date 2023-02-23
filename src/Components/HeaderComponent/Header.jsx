import React from 'react';
import {Image, Text, View} from 'react-native';
import Styles from './HeaderStyle';


function Header(){

  return( 
    <View style={Styles.headerView}>
      <Image style={Styles.myImage} source={require('../../assets/Images/client-1.png')} />
      <Text style={Styles.myName}>Ahmed Samy</Text>
      <Text style={Styles.myPosition}>Front End Developer</Text>
    </View>
  );
  
}

export default Header;