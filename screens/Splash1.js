import { Button, Text } from '@rneui/base'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

const Splash1 = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'alaways'}}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        resizeMode="cover" 
                        source={require("../assets/barbarbro1.png")}
                    />
                    <Text h2 h2Style={{color: "#4a4a4a"}}>Find and book</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text h2 h2Style={{color: "#4a4a4a"}}>your nearest </Text>
                        <Text h2 h2Style={{color: "#0088E0"}}>barbar</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Button 
                        buttonStyle={{width: 100, height: 43, borderRadius: 9, backgroundColor: "whitesmoke"}}
                        titleStyle={{color: "grey"}}
                        title={"Skip"}
                        onPress={() => navigation.navigate("EmailLogin")}
                    />
                    <Button 
                        buttonStyle={{width: 100, height: 43, borderRadius: 9, backgroundColor: "#0088E0"}}
                        title={"Next"}
                        onPress={() => navigation.push("Splash2")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 14
    },
    top: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
    },
    bottom: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default Splash1