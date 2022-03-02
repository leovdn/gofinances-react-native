import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

// import { Dashboard } from "./src/screens/Dashboard";
import theme from "./src/global/styles/theme";
import { CategorySelect } from "./src/screens/CategorySelect";
import { Register } from "./src/screens/Register";
import { SignIn } from "./src/screens/SignIn";
import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* <AppRoutes /> */}

        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
