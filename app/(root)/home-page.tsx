import { View, Text, Platform } from "react-native";
import {
  SafeAreaFrameContext,
  SafeAreaView
} from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-2xl text-black ">Home</Text>
    </SafeAreaView>
  );
}
