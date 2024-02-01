import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IconOcticons from 'react-native-vector-icons/Octicons';
import Icon from "react-native-vector-icons/AntDesign"
import IconLib from "react-native-vector-icons/Ionicons"
const NavBar = () => {
    return (
        <View className="absolute  flex flex-row items-center
         bottom-[10px] bg-zinc-950/80 h-16 justify-evenly w-full"
         >
            <TouchableOpacity className="flex justify-center items-center">
                <IconOcticons name="home" size={30} color="#fff" />
                <Text className="text-white">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex justify-center items-center">
                <Icon name="search1" size={30} color="#fff" />
                <Text className="text-white">Search</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex justify-center items-center">
                <IconLib name="library" size={30} color="#fff" />
                <Text className="text-white">Your Library</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavBar