import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
//mykey = AIzaSyCC7MY_dRrV0ZbLjmPMsVS0QxMSY3e3Z9U
export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{
          key: "AIzaSyDCFhvNPRBU9jJr5bwgpAa98LhBdWxV-PI",
          language: "en",
        }}
        onPress={(data, detail = null) => {
          console.log(data.description, detail);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="Search"
        requestUrl={{
          useOnPlatform: "all", // or "all"
          url: "https://maps.googleapis.com/maps/api", // or any proxy server that hits https://maps.googleapis.com/maps/api
          headers: {
            Authorization: `AIzaSyCC7MY_dRrV0ZbLjmPMsVS0QxMSY3e3Z9U`,
            "Access-Control-Allow-Origin": "*", // if required for your proxy
          },
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
