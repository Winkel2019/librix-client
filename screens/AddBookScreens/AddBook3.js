import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  //   Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import ScreenGradient from '../../components/Gradients/ScreenGradient';
import ButtonGradient from '../../components/Gradients/ButtonGradient';

// import * as ImagePicker from 'expo-image-picker';

const AddBook3 = ({ navigation }) => {
  const [valueGenre, setValueGenre] = useState(null);
  const [genreOpen, setGenreOpen] = useState(false);
  const [genres, setGenres] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'Drama', value: 'drama' },
    { label: 'Crime', value: 'crime' },
    { label: 'Comic book', value: 'comic book' },
    { label: 'Classic', value: 'classic' },
    { label: 'Poetry', value: 'poetry' },
    { label: 'Self-help', value: 'self-help' },
    { label: 'Children book', value: 'children book' },
  ]);
  const [valueCondition, setValueCondition] = useState(null);
  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditions, setConditions] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'As good as new', value: 'as good as new' },
    { label: 'Average', value: 'average' },
    { label: 'Below average', value: 'below average' },
  ]);

  const [valueLanguage, setValueLanguage] = useState(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [languages, setLanguages] = useState([
    { label: 'Any', value: 'Any' },
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'German', value: 'german' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese', value: 'chinese' },
  ]);

  const [note, setNote] = useState('');
  //   const [image, setImage] = useState(null);

  const onGenreOpen = useCallback(() => {
    setGenreOpen(true);
  }, []);

  const onGenreClose = useCallback(() => {
    setGenreOpen(false);
  }, []);

  const onConditionOpen = useCallback(() => {
    setConditionOpen(true);
  }, []);

  const onConditionClose = useCallback(() => {
    setConditionOpen(false);
  }, []);

  const onLanguageOpen = useCallback(() => {
    setLanguageOpen(true);
  }, []);

  const onLanguageClose = useCallback(() => {
    setLanguageOpen(false);
  }, []);

  // add upload image code
  const uploadImage = () => {};

  // add book info to bookdata
  const handlePublishBook = (valueNote, valueLan, valueGen, valueCon) => {
    navigation.navigate('Books');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenGradient>
        <Text style={styles.text}>And now the rest ...</Text>
        <View style={styles.main}>
          <View style={styles.pickerContainer}>
            <DropDownPicker
              style={styles.picker}
              open={genreOpen}
              value={valueGenre}
              items={genres}
              searchable={false}
              placeholder="Genre"
              onClose={onGenreClose}
              setOpen={onGenreOpen}
              onPress={onGenreOpen}
              setValue={setValueGenre}
              setItems={setGenres}
              onChangeValue={(val) => setValueGenre(val)}
              dropDownContainerStyle={styles.backgroundDrop}
              zIndex={3000}
              zIndexInverse={1000}
              dropDownDirection="TOP"
            />
          </View>
          <View style={styles.pickerContainer}>
            <DropDownPicker
              style={styles.picker}
              open={conditionOpen}
              value={valueCondition}
              items={conditions}
              searchable={false}
              placeholder="Condition"
              onClose={onConditionClose}
              setOpen={onConditionOpen}
              onPress={onConditionOpen}
              setValue={setValueCondition}
              setItems={setConditions}
              onChangeValue={(val) => setValueCondition(val)}
              dropDownContainerStyle={styles.backgroundDrop}
              zIndex={3000}
              zIndexInverse={1000}
              dropDownDirection="TOP"
            />
          </View>
          <View style={styles.pickerContainer}>
            <DropDownPicker
              style={styles.picker}
              open={languageOpen}
              value={valueLanguage}
              items={languages}
              searchable={false}
              placeholder="Language"
              onClose={onLanguageClose}
              setOpen={onLanguageOpen}
              onPress={onLanguageOpen}
              setValue={setValueLanguage}
              setItems={setLanguages}
              onChangeValue={(val) => setValueLanguage(val)}
              dropDownContainerStyle={styles.backgroundDrop}
              zIndex={3000}
              zIndexInverse={1000}
              dropDownDirection="TOP"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputText, styles.noteText]}
              value={note}
              onChangeText={(val) => setNote(val)}
              placeholder="Personal notes (description)"
              multiline={true}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.upload} onPress={uploadImage}>
            <ButtonGradient>
              <View style={styles.uploadButtton}>
                <Text style={styles.uploadText}>Upload image</Text>
                <Ionicons
                  name="ios-cloud-upload-outline"
                  size={20}
                  color="white"
                />
              </View>
            </ButtonGradient>
          </TouchableOpacity>
          {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              handlePublishBook(note, valueLanguage, valueGenre, valueCondition)
            }
          >
            <ButtonGradient>
              <Text style={styles.buttonText}>Publish book</Text>
            </ButtonGradient>
          </TouchableOpacity>
        </View>
      </ScreenGradient>
    </SafeAreaView>
  );
};

export default AddBook3;
