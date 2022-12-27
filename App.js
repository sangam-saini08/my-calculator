import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Title from "./components/Title";
import LoadingScreen from "./screens/LoadingScreen";
import MainScreen from "./screens/MainScreen";

const App = () => {
	const [isLoaded, setIsLoaded] = useState(true);

	setTimeout(() => {
		setIsLoaded(false);
	}, 2000);
	return (
		<View style={styles.container}>
			<Title />
			{isLoaded ? <LoadingScreen /> : <MainScreen />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		height: "100%",
		width: "100%",
		// backgroundColor: "#dec985",
	},
});

export default App;
