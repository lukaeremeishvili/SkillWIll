import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import {
  CameraView,
  useCameraPermissions,
  CameraCapturedPicture,
} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const [savedPhoto, setSavedPhoto] = useState<string | null>(null);
  const [cameraType, setCameraType] = useState<"front" | "back">("back");
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    const loadSavedPhoto = async () => {
      const savedUri = await AsyncStorage.getItem("savedPhotoUri");
      if (savedUri) setSavedPhoto(savedUri);
    };

    if (!permission) {
      requestPermission();
    }

    loadSavedPhoto();
  }, [permission, requestPermission]);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const data: CameraCapturedPicture =
        await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
    }
  };

  const uploadPhoto = async () => {
    if (photo) {
      await MediaLibrary.saveToLibraryAsync(photo);
      await AsyncStorage.setItem("savedPhotoUri", photo);
      setSavedPhoto(photo);
      setPhoto(null);
    }
  };

  const switchCamera = () => {
    setCameraType((prev) => (prev === "back" ? "front" : "back"));
  };

  const clearPhoto = async () => {
    setPhoto(null);
    setSavedPhoto(null);
    await AsyncStorage.removeItem("savedPhotoUri");
  };

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text>No access to camera. Grant permission in settings.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photo && savedPhoto ? (
        <View style={styles.preview}>
          <Image source={{ uri: savedPhoto }} style={styles.image} />
          <TouchableOpacity onPress={clearPhoto} style={styles.button}>
            <Text style={styles.text}>Delete Photo</Text>
          </TouchableOpacity>
        </View>
      ) : !photo ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={cameraType}>
          <View style={styles.controls}>
            <TouchableOpacity onPress={switchCamera} style={styles.button}>
              <Text style={styles.text}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={takePhoto} style={styles.button}>
              <Text style={styles.text}>Snap</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.preview}>
          <Image source={{ uri: photo }} style={styles.image} />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              onPress={uploadPhoto}
              style={[styles.button, { marginRight: 10 }]}
            >
              <Text style={styles.text}>Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPhoto(null)}
              style={styles.button}
            >
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1, justifyContent: "flex-end" },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 30,
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  preview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "80%" },
});
