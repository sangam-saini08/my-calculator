import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
	return (
		<View style={styles.title_container}>
			<Text style={styles.title}>My Calculator</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title_container: {
		backgroundColor: "#85bdde",
		height: 80,
		width: "100%",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingHorizontal: 20,
		paddingBottom: 10,
		borderRadius: 10,
	},
	title: {
		color: "white",
		textTransform: "capitalize",
		fontWeight: "bold",
		fontSize: 20,
	},
});

export default Title;
