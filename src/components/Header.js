import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const Header = (props) => (

	<View style={style.container}>

		<Text style={style.title}>{ props.title}</Text>

	</View>
	);


const style = StyleSheet.create({
	container: {
		marginTop: 40,
	backgroundColor: '#ccc000',
	alignItems: 'center',
	justifyContent: 'center',
},
	title: {
		fontSize: 60,
color: '#fff',
	}
});

export default Header;