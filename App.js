/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App = () => {
  //React navigation installed
  // Firebase npm install --save @react-native-firebase/app installed and  added sha key on firebase 
  // added google-json on Android/app 
  /*  i didnt add android gradle
  ----------------
    apply plugin: 'com.android.application'
    apply plugin: 'com.google.gms.google-services' // <- Add this line
-------------------------
    buildscript {
    dependencies {
      // ... other dependencies
      classpath 'com.google.gms:google-services:4.2.0'
      // Add me --- /\
    }
}
  
  last step 
  run gradlew clean 

  */
  return (
      <SafeAreaView>
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
