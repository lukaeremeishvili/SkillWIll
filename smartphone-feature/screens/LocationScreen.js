import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

const LocationScreen = () => {

    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation(location);

        })();
    }, []);

    let text 
    if(errorMsg) {
        text = errorMsg;
    } else if(location) {
        text = JSON.stringify(location);
    }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{text}</Text>
    </View>
  );
};

export default LocationScreen;
