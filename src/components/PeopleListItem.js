import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import {capitalizeFirstLetter } from '../util/capitalizeFirstLetter';

const PeopleListItem = props => {
	const {people} = props;
	const {title, first, last} = people.name;
	return(
			<View style={styles.line}>
				<Text style={styles.lineText}>
				{ `${
					capFirst(title)
				} ${
					capFirst(first)
				} ${
					capFirst(last)
				}`}
				</Text>
			</View>
		);
}


const styles = StyleSheet.create( {
		line:{
		height: 60,
		borderBottomWidth: 2,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,

	}

});
export default PeopleListItem;