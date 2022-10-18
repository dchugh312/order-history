import { Button, StyleSheet, View, Text } from 'react-native';
import React from 'react';

const TextComponent = () =>{

    return(
        <Text style={styles.appContainer}>History</Text>

    )

}

const styles =  StyleSheet.create({

    appContainer:{

        color:'black',
  fontSize:25,
  fontWeight:'bold',
  padding:20
      },
      


});

export default TextComponent;