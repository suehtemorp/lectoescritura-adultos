import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Image } from 'expo-image';
import HomeLogo from "@/assets/images/home_icon.png"
import PlayLogo from "@/assets/images/play_icon.png"
import LearnLogo from "@/assets/images/learn_icon.png"

export default function Layout() {
  // Puntaje en la app
  const score = 0;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions = {{
          drawerStyle: {width: 200},
        }}
        drawerContent = {
          (props : any) => <IconsDrawerContent {...props} />
        }
      >
        {/* Menu principal */}
        <Drawer.Screen
          name="Home"
          options={{
            headerTitle: () => ScoreHeader(score, "#cdeda3"),
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#FEF7FF",
            }
          }}
        />

        {/* Página de ejercicios */}
        <Drawer.Screen
          name="SelectExcercise"
          options={{
            headerTitle: () => ScoreHeader(score, "#e6e0e9"),
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#7bd79a",
            }
          }}
        />

        {/* Sub-página de ejercicios */}
        <Drawer.Screen
          name="SelectLevel/[type]"
          options={{
            headerTitle: () => ScoreHeader(score, "#e6e0e9"),
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "#7bd79a",
            }
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

// Encabezado con el puntaje
const ScoreHeader = (score : number, color : string) => {
  return (
    <View style={[styles.scoreContainer, {backgroundColor: color}]}> 
      <Text style={styles.scoreText}>
        {
          score.toLocaleString(
            'en-US', {
            minimumIntegerDigits: 3,
            useGrouping: false
          })
        }
      </Text>
    </View>
  ); 
}

// Tablón con íconos de páginas
const IconsDrawerContent = (props : any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      {/* Icono de hogar */}
      <TouchableOpacity style={styles.drawerButton}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
      >
        <Image
          source={HomeLogo}
          contentFit="contain"
          style={styles.drawerImage}
        />
      </TouchableOpacity>

      {/* Icono de ejercicios */}
      <TouchableOpacity style={styles.drawerButton}
          onPress={() => {
            props.navigation.navigate("SelectExcercise");
          }}
      >
        <Image
          source={PlayLogo}
          contentFit="contain"
          style={styles.drawerImage}
        />
      </TouchableOpacity>

      {/* Icono de diccionario */}
      <TouchableOpacity style={styles.drawerButton}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
      >
        <Image
          source={LearnLogo}
          contentFit="contain"
          style={styles.drawerImage}
        />
      </TouchableOpacity>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scoreContainer : {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#cdeda3',
    borderColor: '#DADEE8',
    borderRadius: 5,
    borderWidth: .5,
    width: 100,
    height: 25,
  },
  scoreText : {
    fontSize: 15,
    fontWeight: "bold",
  },
  drawerContainer: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#FEF7FF',
    paddingVertical: 30,
    rowGap: 30,
    flex: 1,
  },
  drawerButton: {
    alignItems: "center",
  },
  drawerImage: {
    width: 100,
    height: 100,
  },
  drawerIconContainer: {
    backgroundColor: "red",
    height: 100
  }
});