import { View, Text } from 'react-native'
import React from 'react'

const Categories = () => {
    return (
        <View className="mt-5 px-3 flex flex-row gap-x-3 border-b-2 pb-2">
            <Text className="bg-zinc-800 text-white p-3 rounded-3xl">
                Playlists
            </Text>
            <Text className="bg-zinc-800 text-white p-3 rounded-3xl">
                Podcasts
            </Text>
            <Text className="bg-zinc-800 text-white p-3 rounded-3xl">
                Albums
            </Text>
            <Text className="bg-zinc-800 text-white p-3 rounded-3xl">
                Artists
            </Text>
            <Text className="bg-zinc-800 text-white p-3 rounded-3xl">
                Downloaded
            </Text>
        </View>
    )
}

export default Categories