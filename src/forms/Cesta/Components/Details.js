import { StyleSheet, Image, View } from "react-native";

import SText from "../../../Components/SText";
import SButton from "../../../Components/SButton";

export default function Details({ titleDetail, logoFarm, nameFarm, descriptionFarm, price, buttonBuy }) {
    return <>
        <SText style={componetStyle.name}>{titleDetail}</SText>

        <View style={componetStyle.farm}>
            <Image source={logoFarm} style={componetStyle.imageFarm}></Image>
            <SText style={componetStyle.nameFarm}>{nameFarm}</SText>
        </View>

        <SText style={componetStyle.description}>{descriptionFarm}</SText>
        <SText style={componetStyle.price}>{price}</SText>

        <SButton onPress={() => { }}>{buttonBuy}</SButton>

    </>
}

const componetStyle = StyleSheet.create({
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    imageFarm: {
        width: 32,
        height: 32
    },

    nameFarm: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },

    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    buttonBuy: {
        backgroundColor: "white",
    }        
});