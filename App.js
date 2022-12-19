import "react-native-gesture-handler";
import React, { useEffect, useCallback } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import AuthenticationProvider from "./src/services/authentication/authentication.context";
import {
  useFonts as usePoppins,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useOleoScriptSwashCaps,
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold,
} from "@expo-google-fonts/oleo-script-swash-caps";

import { Navigation } from "./src/infrastructure/navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [PoppinsLoaded] = usePoppins({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  let [OleoScriptSwashCapsLoaded] = useOleoScriptSwashCaps({
    OleoScriptSwashCaps_400Regular,
    OleoScriptSwashCaps_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (PoppinsLoaded && OleoScriptSwashCapsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [PoppinsLoaded, OleoScriptSwashCapsLoaded]);

  if (!PoppinsLoaded || !OleoScriptSwashCapsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation onReady={onLayoutRootView} />
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
