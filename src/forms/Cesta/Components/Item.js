import { StyleSheet, Image, View, FlatList } from 'react-native';

import SText from '../../../Components/SText';

export default function Item({ item: { nameItem, imageItem } }) {

    return <View style={componetStyle.item}>
            <Image source={imageItem} style={componetStyle.image}></Image>
            <SText style={componetStyle.nameItem}>{nameItem}</SText>
        </View>   
}

const componetStyle = StyleSheet.create({    
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",        
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",        
    },
    image: {
        width: 46,
        height: 46,
    },
    nameItem: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 14,
        color: "#464646",
    }
});