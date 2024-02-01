import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Categories from './src/components/Categories';
import Recents from './src/components/Recents';
import Section from './src/components/Section';
import NavBar from './src/components/NavBar';
import Player from './src/components/Player';

export default function App() {
  const [values, setValues] = useState([{
    bg: require("./assets/liked.png"),
    icon: "heart",
    color: "white",
    titulo: "Liked Songs",
    icono2: "pinboard",
    color2: "green",
    des: "Playlist  • 25 songs"
  },
  {
    bg: require("./assets/episodes.png"),
    icon: "favorite",
    color: "green",
    titulo: "Your Episodes",
    icono2: "pinboard",
    color2: "green",
    des: "Saved & downloaded episodes"
  },
  {
    bg: require("./assets/playlist.jpg"),
    color: "green",
    titulo: "MUSIC",
    icono2: "arrow-down",
    color2: "green",
    des: "Playlist • rb7885074"
  },{
    bg: require("./assets/descarga.jpg"),
    color: "green",
    titulo: "The Diary Of a CEO with Steve Bartlett",
    icono2: "",
    color2: "green",
    des: "Podcast • Steve Bartlett"
  },{
    bg: require("./assets/rush.jpg"),
    color: "green",
    titulo: "RUSH!(ARE U COMING?)",
    icono2: "arrow-down",
    color2: "green",
    des: "Album • Måneskin"
  },
  {
    bg: require("./assets/newEpisodes.png"),
    icon: "bell-alt",
    color: "green",
    titulo: "New Episodes",
    icono2: "",
    color2: "green",
    des: "Updated yesterday"
  },
  {
    bg: require("./assets/huberman.jpg"),
    icon: "",
    color: "green",
    titulo: "Huberman Lab",
    icono2: "",
    color2: "white",
    des: "Podcast • Scicomm Media"
  },
  {
    bg: require("./assets/onpurpose.png"),
    icon: "",
    color: "green",
    titulo: "On Purpose with Jay Shetty",
    icono2: "",
    color2: "white",
    des: "Podcast • iHeartPodcasts"
  }
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Header />
      <Categories />
      <Recents />
      <ScrollView className="">
        {values.map(i => (

          <Section
            key={i.titulo}
            bg={i.bg}
            icon={i.icon}
            color1={i.color}
            title={i.titulo}
            icon2={i.icono2}
            des={i.des}
            color2={i.color2} />
        ))}
        <Player/>
        <NavBar/>

      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    paddingTop: 10,
    justifyContent: "center",
  },


});
