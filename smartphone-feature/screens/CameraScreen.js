import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedPictureUri, setCapturedPictureUri] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPictureUri(photo.uri);
    }
  };

  return (
    <View>
      {hasPermission ? (
        <Camera ref={cameraRef} style={{ width: 400, height: 400 }} />
      ) : (
        <Text>No access to camera</Text>
      )}
      <Button title="Take a picture" onPress={handleCapture} />
      {capturedPictureUri && (
        <Image
          source={{ uri: capturedPictureUri }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}
    </View>
  );
};

export default CameraScreen;
