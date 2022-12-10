import { StyleSheet, Text } from "react-native";

export default function SText( { children, style } ) {

    let styleDefault = componetStyle.textRegular;

    if (style?.fontWeight == 'bold')
        styleDefault = componetStyle.textBold;

    return <Text style={[style, styleDefault]} >{ children }</Text>
}

const componetStyle = StyleSheet.create({
    textRegular: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    }, 
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
});