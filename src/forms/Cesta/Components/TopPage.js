import { StyleSheet, Image, Dimensions } from "react-native";

import SText from "../../../Components/SText";

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function TopPage({ titleTop }){
    return <>
        <Image source={topo} style={componetStyle.top}/>
        <SText style={componetStyle.title}>{ titleTop }</SText>
    </>
}

const componetStyle = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,        
    },

    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26, 
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
});