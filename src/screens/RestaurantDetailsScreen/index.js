import { View, Text, Image, Flatlist, StyleSheet } from "react-native";

import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetailsPage;
