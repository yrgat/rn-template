import { Redirect } from "expo-router";
import { View, Text, Platform } from "react-native";

export default function HomeScreen() {
  return <Redirect href="/(root)/home-page" />;
}
