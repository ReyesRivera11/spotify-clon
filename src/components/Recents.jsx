import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Recents = () => {
    return (
        <View className="flex flex-row justify-between p-5">
            <View className="flex flex-row gap-x-3 " style={styles.container}>
                <Text className="rotate-90 transform scale-y-[-1]">

                <MaterialIcons name="compare-arrows" size={24} color="white" />
                </Text>
                <Text className="text-white">Recents</Text>
            </View>
            <View>
                <MaterialCommunityIcons
                    name="format-list-bulleted-square"
                    size={24} color="white" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
});
export default Recents