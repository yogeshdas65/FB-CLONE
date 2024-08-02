import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/color";
import CreateStories from "./CreateStories";
import FriendStories from "./FriendStories";

const Stories = () => {
  return (
    <ScrollView
      horizontal
      style={styles.storiesContainer}
      showsHorizontalScrollIndicator={false}
    // contentContainerStyle={styles.contentContainerStyle}
    >
      <CreateStories />
      <FriendStories />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    backgroundColor: Colors.white,
    marginTop: 8,
    padding: 15,
  },
  contentContainerStyle: {
    paddingRight: 30,
  },
});

export default Stories;
