import { Button, StyleSheet, View } from 'react-native';
import React from 'react';

const ButtonComponent = () =>{

    return(

    <View style={styles.buttonContainer}>
      <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           
            title="All"
           color="#FF3D00"
          />
        </View> 
        <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           
            title="Last Week"
           color="#FF3D00"
          />
        </View> 
        <View style={[{ padding:3, width: "30%", margin: 7, backgroundColor: "red" }]}>
          <Button
           
            title="Last Month"
           color="#FF3D00"
          />
        </View> 
      </View>

    )

}

const styles =  StyleSheet.create({

    buttonContainer:{

        flexDirection:'row',
        
        justifyContent:'space-between',
      },
      


});

export default ButtonComponent;