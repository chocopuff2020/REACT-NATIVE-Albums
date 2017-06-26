//1) Import a library to help create a Component
//2) Create a component
//3) Render it to the device

import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent("Album", () => App);
