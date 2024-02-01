import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
// import Ionicon from 'react-native-vector-icons/Ionicons';
import IconEntypo  from 'react-native-vector-icons/Entypo';
import IconFontisto  from 'react-native-vector-icons/Fontisto';
const Section = ({ bg, icon, icon2, title, des, color1, color2 }) => {
    const renderIcon = (iconName, size, color) => {
        try {
          return <IconFontisto name={iconName} size={size} color={color} />;
        } catch (error) {
          console.log(`El ícono ${iconName} no está disponible en Fontisto.`);
        }
    
        try {
          return <IconEntypo name={iconName} size={size} color={color} />;
        } catch (error) {
          console.log(`El ícono ${iconName} no está disponible en Entypo.`);
        }
        return null;
      };
      const renderIcon2 = (iconName, size, color) => {
        try {
          return <IconFontisto name={iconName} size={size} color={color} />;
        } catch (error) {
          console.log(`El ícono ${iconName} no está disponible en Fontisto.`);
        }
    
        try {
          return <IconEntypo name={iconName} size={size} color={color} />;
        } catch (error) {
          console.log(`El ícono ${iconName} no está disponible en Entypo.`);
        }
        return null;
      };
    return (
        <View className="px-5 flex flex-row gap-x-4 items-center my-2">
            <ImageBackground
                source={bg}
                style={styles.fondo}
                className="flex justify-center items-center"
            >
                {renderIcon(icon, 28, color1)}
                {/* <Icon name={icon} size={30} color={color1} /> */}
            </ImageBackground>

            <View>
                <Text className="text-white text-[16px]">{title}</Text>
                <View className="flex flex-row items-center gap-x-3 mt-2">
                    {/* <Icon name={icon2} size={24} color={color2} /> */}
                    {renderIcon2(icon2, 18,color2)}
                    <Text className="text-zinc-500">{des}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#151515",
      paddingTop: 10,
    },
    fondo: {
      resizeMode: 'cover',
      width:65,
      height:65,
      marginLeft:20
    },
  
  });

export default Section