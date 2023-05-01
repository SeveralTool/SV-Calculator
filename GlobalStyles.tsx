import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    // Button
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: "white",
    },
    smallTextDark: {
        fontSize: 32,
        color: "black",
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: "gray",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: "gray",
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})