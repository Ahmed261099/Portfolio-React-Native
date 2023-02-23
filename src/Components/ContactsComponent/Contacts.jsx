import React from "react";
import { Text, View } from "react-native";
import Styles from './contactStyle';
// import * as React from "react";
// import { Icon } from "@rneui/base";
// import { Icon } from '@rneui/themed';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from "react-native";


function Contacts(){
return(
    <View style={Styles.contactView}>
      <Icon
      brand
      color="#fff"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="facebook"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => Linking.openURL('https://www.facebook.com/ahmedroski261099?mibextid=ZbWKwL')}
      reverse
      size={20}
      type="material"
      style={Styles.ContactIcons}
    />
      <Icon
      brand
      color="#fff"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="twitter"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => Linking.openURL('https://twitter.com/A_Sami261099')}
      reverse
      size={20}
      type="material"
      style={Styles.ContactIcons}

    />
      <Icon
      brand
      color="#fff"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="instagram"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => Linking.openURL('https://www.instagram.com/ahmed_roski/')}
      reverse
      size={20}
      type="material"
      style={Styles.ContactIcons}

    />
      <Icon
      brand
      color="#fff"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="linkedin"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => Linking.openURL('https://www.linkedin.com/in/ahmed-sami-a-bast-601416173/')}
      reverse
      size={20}
      type="material"
      style={Styles.ContactIcons}

    />
      <Icon
      brand
      color="#fff"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="whatsapp"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => Linking.openURL('https://web.whatsapp.com/')}
      reverse
      size={20}
      type="material"
      style={Styles.ContactIcons}
    />
  
    </View> 
)
}

export default Contacts;




  
