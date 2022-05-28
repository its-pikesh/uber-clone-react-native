import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SafeViewAndroid from "../utilities/SafeAreaAndroid";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import "firebase/compat/firestore";
import "firebase/firestore";
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function OrderCompleted() {
  const [lastOrder, setlastOrder] = useState({
    items: [
      {
        title: "Tofu",
        description: "with butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((pre, curr) => pre + curr, 0);
  // '$13.50'
  // '13.50'
  //Number['13.50] = 13.5
  //[13.5, 15.5, 19.5]
  //reduce 13.5+15.5+19.5 = 43.5

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setlastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ margin: 15, height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Your order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <MenuItems foods={lastOrder.items} hideCheckbox={true} />
        <ScrollView>
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
