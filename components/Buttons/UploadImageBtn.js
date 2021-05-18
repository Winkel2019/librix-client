import React, { useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ButtonGradient from '../Gradients/ButtonGradient';
import PrimaryText from '../Texts/PrimaryText';
import { Feather } from '@expo/vector-icons';

const UploadImageBtn = ({ setImage, navigation }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        // console.log(status); // "denied" or "granted"
        if (status !== 'granted') {
          navigation.goBack();
        }
      }
    })();
  }, [navigation]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3], // this option is for Android only. iOS is square by default
      quality: 0.25,
      base64: true,
    });

    // console.log(result); // { base64: string, cancelled: boolean, height: number, width: number type: string, uri: string }

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <ButtonGradient>
        <View style={styles.wrapper}>
          <PrimaryText text="Upload image" customStyles={styles.text} />
          <Feather name="upload" size={24} color="black" />
        </View>
      </ButtonGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 170,
  },
  text: {
    color: '#ffffff',
  },
});

export default UploadImageBtn;
