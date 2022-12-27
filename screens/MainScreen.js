import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

const MainScreen = () => {
	const [value, setValue] = useState("0");
	const scrollView = useRef();

	const handlePress = (input) => {
		if (input === "AC") {
			setValue("0");
		} else if (input === "back") {
			setValue(value.slice(0, -1));
		} else if (input === "=") {
			try {
				if (
					value.slice(-1) == "%" ||
					value.slice(-1) == "/" ||
					value.slice(-1) == "*" ||
					value.slice(-1) == "+" ||
					value.slice(-1) == "-" ||
					value.slice(-1) == "."
				) {
				} else {
					setValue(`${eval(value)}`);
				}
			} catch (error) {
				setValue("Formate Error");
			}
		} else {
			if (value === "0") {
				if (isNaN(input)) {
					setValue(value + input);
				} else {
					setValue(input);
				}
			} else if (isNaN(input)) {
				if (
					value.slice(-1) == "%" ||
					value.slice(-1) == "/" ||
					value.slice(-1) == "*" ||
					value.slice(-1) == "+" ||
					value.slice(-1) == "-" ||
					value.slice(-1) == "."
				) {
					setValue(value.slice(0, -1) + input);
				} else {
					setValue(value + input);
				}
			} else {
				setValue(value + input);
			}
		}
		// console.log(isNaN(input));
	};

	return (
		<View style={styles.main_screen}>
			<ScrollView
				style={styles.main_screen_display}
				ref={scrollView}
				onContentSizeChange={() => {
					scrollView.current.scrollToEnd({ animated: true });
				}}
			>
				<Text style={styles.main_screen_display_text}>
					{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</Text>
			</ScrollView>
			<View style={styles.main_screen_keypad}>
				{/* first row  */}

				<View style={styles.main_screen_keypad_row}>
					<Pressable onPress={() => handlePress("AC")}>
						<View style={styles.btn1_outer}>
							<Text style={styles.bg1_button}>AC</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("back")}>
						<View style={styles.btn1_outer}>
							<Text style={styles.bg1_button}>{`<`}</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("%")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>%</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("/")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>/</Text>
						</View>
					</Pressable>
				</View>

				{/* second row */}

				<View style={styles.main_screen_keypad_row}>
					<Pressable onPress={() => handlePress("7")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>7</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("8")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>8</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("9")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>9</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("*")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>*</Text>
						</View>
					</Pressable>
				</View>

				{/* third row  */}

				<View style={styles.main_screen_keypad_row}>
					<Pressable onPress={() => handlePress("4")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>4</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("5")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>5</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("6")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>6</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("+")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>+</Text>
						</View>
					</Pressable>
				</View>

				{/* forth row  */}

				<View style={styles.main_screen_keypad_row}>
					<Pressable onPress={() => handlePress("1")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>1</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("2")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>2</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("3")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>3</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("-")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>-</Text>
						</View>
					</Pressable>
				</View>

				{/* fifth row  */}

				<View style={styles.main_screen_keypad_row}>
					<Pressable onPress={() => handlePress("00")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>00</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("0")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>0</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress(".")}>
						<View style={styles.btn_outer}>
							<Text style={styles.bg_button}>{`.`}</Text>
						</View>
					</Pressable>
					<Pressable onPress={() => handlePress("=")}>
						<View style={styles.btn2_outer}>
							<Text style={styles.bg2_button}>=</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main_screen: {
		marginTop: 10,
		display: "flex",
		flexDirection: "column",
		backgroundColor: "white",
		width: "100%",
		height: "100%",
		alignItems: "center",
	},
	main_screen_display: {
		backgroundColor: "white",
		elevation: 10,
		width: "95%",
		borderRadius: 10,
		display: "flex",
		marginBottom: 10,
		padding: 10,
	},
	main_screen_display_text: {
		fontSize: 50,
		textAlign: "right",
	},
	main_screen_keypad: {
		width: "100%",
		height: "70%",
		display: "flex",
		backgroundColor: "#caf0f8",
	},
	main_screen_keypad_row: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	btn_outer: {
		width: 74,
		height: 74,
		backgroundColor: "white",
		elevation: 10,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	bg_button: {
		color: "black",
		backgroundColor: "white",
		fontSize: 30,
	},
	btn1_outer: {
		width: 74,
		height: 74,
		backgroundColor: "#FF5757",
		elevation: 10,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 90,
	},
	bg1_button: {
		backgroundColor: "#FF5757",
		color: "white",
		fontSize: 25,
		fontWeight: "bold",
	},
	btn2_outer: {
		width: 74,
		height: 74,
		backgroundColor: "#bdb5b5",
		elevation: 10,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 90,
	},
	bg2_button: {
		kgroundColor: "grey",
		color: "white",
		fontSize: 25,
		fontWeight: "bold",
	},
});

export default MainScreen;
