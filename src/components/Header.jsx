import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export class Header extends Component {
    render() {
        return (
            <View className="flex flex-row justify-between mt-10 px-5" style={styles.container}>
                <View className="flex flex-row justify-center gap-3">
                    <View className="bg-orange-400 w-10 h-10 rounded-full
         flex justify-center content-center"
                    >
                        <Text className="text-center text-black font-bold text-xl">R</Text>
                    </View>

                    <View>
                        <Text className="text-white text-2xl font-bold">Your Library</Text>
                    </View>
                </View>

                <View className="flex flex-row ml-16 gap-4">
                    <Ionicons
                        name="search-outline"
                        size={28}
                        color="white"
                        className="font-bold"
                    />
                    <AntDesign
                        name="plus"
                        size={28}
                        color="white"
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});


export default Header