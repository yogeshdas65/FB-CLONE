import { View, Text, Image , StyleSheet , ScrollView} from "react-native";
import React from "react";
import Header from "../components/Header";
import TopTabber from "../navigation/TopTabbar";
import SubHeader from "../components/SubHeader";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { Colors } from "../utils/color";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeContainer} >
      <SubHeader />
      <Stories />
      <Post />
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors.background,
  },
});

export default HomeScreen;
