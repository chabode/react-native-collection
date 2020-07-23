import React, { useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Explore (props) {

    return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1}}>
            <View style={styles.searchBorder}>
                <View style={styles.searchBox}>
                    <Icon name="magnify" size={20} style={{marginRight: 8}} />
                    <TextInput 
                        placeholder="Search bar"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent" 
                        style={styles.textinput} />
                </View>
            </View>
            <Text>Content Explore</Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBorder: {
        height: Platform.OS === 'android' ? StatusBar.currentHeight + 80 : 80,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd"
    },
    searchBox: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        elevation: 1,
        marginTop: Platform.OS === 'android' ? 30: null,
    },
    textinput: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white'
    }
});