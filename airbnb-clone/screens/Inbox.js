import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Inbox = (props) => (
    <View style={styles.container}>
        <Text>Inbox</Text>
    </View>
    )
export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});