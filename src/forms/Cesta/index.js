import { StyleSheet, Image, View } from "react-native";

import SText from '../../Components/SText';

import TopPage from "./Components/TopPage";
import Details from "./Components/Details";

export default function Cesta() {
    return <>
        <TopPage/>

        <View style={componetStyle.basket}>
            <Details/>
        </View>
    </>

}

const componetStyle = StyleSheet.create({
    
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    } 

});