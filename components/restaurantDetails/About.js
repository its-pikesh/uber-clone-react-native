import { View, Text, Image } from "react-native";
import React from "react";

// ``Demo Data``
// const yelpRestaurantInfo = {
//   name: "FarmHouse Kitchen Thai cousine",
//   image:
//     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thai" }, { title: "comfertFood" }],
// };

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews})  `;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
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
      fontWeight: "bold",
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
