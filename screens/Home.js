import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SafeViewAndroid from "../utilities/SafeAreaAndroid";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

// const yelp_API_Key =
//   "Mi2LZBL0eKFnmCpS-dpxSs7CeHdU1yIeQCUAR5kf9ZFUHnyncdc1u8U-jZSTdURSrPTjy7wPSnQU7l7XmglW7DwlbPqda6Gf4C331Xkdzb1UYQXUCYR0ujieevmEYnYx";

export default function Home() {
  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setcity] = useState("San Francisco");
  const [activeTab, setactiveTab] = useState("Delivery");

  const getRestaurantsfromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    // const localUrl = "http://localhost:3000";
    const apiOptions = {
      headers: {
        Authorization:
          "Bearer Mi2LZBL0eKFnmCpS-dpxSs7CeHdU1yIeQCUAR5kf9ZFUHnyncdc1u8U-jZSTdURSrPTjy7wPSnQU7l7XmglW7DwlbPqda6Gf4C331Xkdzb1UYQXUCYR0ujieevmEYnYx",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return await fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setrestaurantData(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRestaurantsfromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setactiveTab={setactiveTab} />
        <SearchBar cityHandler={setcity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
