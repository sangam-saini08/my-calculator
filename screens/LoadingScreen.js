import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LoadingScreen = () => {
	return (
		<View style={styles.loading_container}>
			<Image
				style={styles.loading_img}
				source={require("../assets/images/loadingPng.png")}
			/>
			<Text style={styles.loading_text}>By Sangam Saini</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	loading_container: {
		height: "100%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#d9e5d6",
	},
	loading_img: {
		height: 100,
		width: 100,
		marginTop: -100,
		elevation: 10,
	},
	loading_text: {
		elevation: 20,
		borderWidth: 0,
		borderRadius: 10,
		color: "#33658a",
	},
});

export default LoadingScreen;
