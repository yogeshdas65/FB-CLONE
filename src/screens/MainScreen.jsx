import { View, Text } from "react-native";
import React from "react";
import TopTabber from "../navigation/TopTabbar";
import Header from "../components/Header";

const MainScreen = () => {
  return (
    <>
      <Header />
      <TopTabber />
    </>
  );
};

export default MainScreen;
