import { StyleSheet, View, FlatList } from "react-native";

import SText from '../../Components/SText';

import TopPage from "./Components/TopPage";
import Details from "./Components/Details";
import Item from "./Components/Item";

export default function Cesta({ topPage, details, itens }) {
    return <>

        <FlatList
            data={itens.listItens}
            renderItem={Item}
            keyExtractor={({ nameItem }) => nameItem}
            ListHeaderComponent={
                () => {
                    return <>
                        <TopPage {...topPage} />

                        <View style={componetStyle.basket}>
                            <Details {...details} />                            
                            <SText style={componetStyle.titleItem}>{itens.titleItem}</SText>
                        </View>                        
                    </>
                }
            }
        >
        </FlatList>
    </>
}

const componetStyle = StyleSheet.create({
    titleItem: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

});