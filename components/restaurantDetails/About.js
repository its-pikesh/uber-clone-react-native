import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60";
const title = "Farmhouse kitchen thai cousine";
const description = "thai • Comfert Food • $$ • 🎫 • 4⭐(236+) ";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription desc={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15,
      fontWeight: "400",
    }}
  >
    {props.desc}
  </Text>
);
