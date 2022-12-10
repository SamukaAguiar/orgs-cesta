import { StyleSheet, Image, View } from "react-native";

import SText from "../../../Components/SText";

import logo from '../../../../assets/logo.png';

export default function Details() {
    return <>
        <SText style={componetStyle.name}>Cesta de verduras</SText>

        <View style={componetStyle.farm}>
            <Image source={logo} style={componetStyle.imageFarm}></Image>
            <SText style={componetStyle.nameFarm}>Jenny Jack Farm</SText>
        </View>

        <SText style={componetStyle.description}>
            Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para sua cozinha
        </SText>
        <SText style={componetStyle.price}>R$ 40,00</SText>
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

    imageFarm:{
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
    }
});