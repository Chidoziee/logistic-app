import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { AppRegistry, View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { ApolloProvider } from "@apollo/client";
import { name as appName } from "./app.json";

import { Navigation } from "./src/infrastructure/navigation/index";
import { theme } from "./src/infrastructure/theme";
import { client } from "./src/services/data/apollo.config";
import PaymentSuccess from "./src/features/PaymentSuccess/paymentSuccess.screen";

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_300Light_Italic,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold,
    OpenSans_800ExtraBold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
