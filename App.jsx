import React from 'react';
import { ScrollView, Linking } from 'react-native';
import Header from './src/Components/HeaderComponent/Header';
import Styles from './AppStyle'
import Contacts from './src/Components/ContactsComponent/Contacts';
import HLine from './src/Components/HLineComponent/HLine';
import About from './src/Components/AboutComponent/About';
import Languages from './src/Components/LanguagesComponent/Languages';
import Skills from './src/Components/SkillsComponent/Skills';
import { Button } from 'react-native-elements';


function App() {

  return( 
    <ScrollView style={Styles.body}>
      <Header />
      <Contacts />
      <HLine/>
      <About/>
      <HLine/>
      <Languages/>
      <HLine/>
      <Skills/>
      <HLine/>
      <Button
        title="Download CV"
        type='solid'
        onPress={()=> {Linking.openURL('https://github.com/Ahmed261099')}}
        buttonStyle={Styles.cvBtn}
        titleStyle={Styles.titleBtn}
      />
    </ScrollView>
     
  );


}

export default App;
