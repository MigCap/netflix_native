import * as React from "react";
import { FlatList } from "react-native";

import { View } from "../../components/Themed";

import HomeCategory from "../../components/HomeCategory/index";

import styles from "./styles";

import categories from "../../assets/data/categories";

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* List of Categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
