import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import ButtonComponent from './screens/buttons';
import TextComponent from './screens/texthistory';
import FlatlistComponent from './screens/FlatlistComponent';

const App=()=>{

return(

	<View style={styles.container}>
		<TextComponent/>
		<ButtonComponent/>
		<FlatlistComponent/>

	</View>
)


}

const styles = StyleSheet.create({

	container: {
		marginTop:30,
		
	  flex: 1,
	  flexDirection:'column',
	  padding:15,
	},
	
	
	});
	

export default App;