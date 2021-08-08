import * as React from "react";
import { Image, FlatList } from "react-native";

import { Text } from "../../components/Themed";

import styles from "./styles";

interface IMovie {
  id: string;
  poster: string;
}

interface IProps {
  category: {
    id: string;
    title: string;
    movies: IMovie[];
  };
}

const HomeCategory = (props: IProps): JSX.Element => {
  const { category } = props;

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
