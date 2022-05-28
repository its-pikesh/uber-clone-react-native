import React from "react";
import RootNavigation from "./navigation";
import "react-native-gesture-handler";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
export default function App() {
  return <RootNavigation />;
}
