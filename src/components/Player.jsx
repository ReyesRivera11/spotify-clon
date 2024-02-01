import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Feather"
import IconEarphones from "react-native-vector-icons/SimpleLineIcons"
import IconCheck from "react-native-vector-icons/AntDesign"
import IconPause from "react-native-vector-icons/Entypo"
const Player = () => {
    return (
        <View className="absolute w-[389px] bottom-[80px]
         bg-orange-950  rounded-sm p-2 flex flex-row items-center border-b-2 "
        >
            <View>
                <Image
                    className="w-10 h-10"
                    source={require("../../assets/iwannabe.jpeg")}
                />
            </View>
            <View className="mx-2">
                <Text className="text-white">
                    I WANNA BE YOUR SLAVE • M
                </Text>
                <View className="flex flex-row items-center ml-[15px]">
                    <Icon name='bluetooth' size={10} color={"green"} />
                    <Text className="text-green-600 ml-2">
                        WH-CH510
                    </Text>
                </View>
            </View>
            <View className="flex flex-row gap-x-6">
                <IconEarphones name='earphones' size={25} color={"green"}/>
                <IconCheck name='checkcircle' size={25} color={"green"}/>
                <IconPause name='controller-paus' size={25} color={"white"}/>
            </View>
            <View className="absolute bottom-0 left-0 w-1/3 h-1 bg-white">

            </View>
        </View>
    )
}

export default Player