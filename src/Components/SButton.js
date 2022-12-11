import { TouchableOpacity, StyleSheet } from "react-native";

import SText from "./SText";

export default function SButton({ children, style }) {
    
    let backgroundButton = "#2A9F85";

    if (style?.backgroundColor != null && !style?.backgroundColor == "white")
        backgroundButton = style.backgroundColor;

    backgroundButton = {
        backgroundColor: backgroundButton
    };

    return <>
        <TouchableOpacity style={[componetStyle.button, backgroundButton]}>
            <SText style={componetStyle.textButton}>{children}</SText>
        </TouchableOpacity>
    </>
}

let componetStyle = StyleSheet.create({
    button: {
        marginTop: 16,        
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
});