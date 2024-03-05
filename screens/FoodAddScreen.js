import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Category from '../models/category';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FoodAddScreen({ navigation }) {
  const [newFoodTitle, setNewFoodTitle] = useState('');
  const [newFoodComplexity, setNewFoodComplexity] = useState('');
  const [newFoodAffordability, setNewFoodAffordability] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  const handleAddFood = async () => {
    if (!newFoodTitle || !newFoodComplexity || !newFoodAffordability || !selectedCategory) {
      return;
    }

    const newFood = {
      title: newFoodTitle,
      complexity: newFoodComplexity,
      affordability: newFoodAffordability,
      category: selectedCategory,
    };

    try {
      // Retrieve existing foods from AsyncStorage
      const existingFoods = await AsyncStorage.getItem('foods');
      const parsedExistingFoods = existingFoods ? JSON.parse(existingFoods) : [];

      // Add the new food to the existing foods
      const updatedFoods = [...parsedExistingFoods, newFood];

      // Save the updated foods back to AsyncStorage
      await AsyncStorage.setItem('foods', JSON.stringify(updatedFoods));

      // After adding, navigate back to the previous screen:
      navigation.goBack();
    } catch (error) {
      console.error('Error saving new food:', error);
    }
  };

  const fetchCategories = async () => {
    // Example categories data
    return [
      new Category('c1', 'İtalyan', 'pink'),
      new Category('c2', 'Aperatif', 'darkpink'),
      new Category('c3', 'Hamburger', 'brown'),
      new Category('c4', 'Alman', 'yellow'),
      new Category('c5', 'Diyet', 'blue'),
      new Category('c6', 'Egzotik', 'green'),
      new Category('c7', 'Kahvaltı', 'lightblue'),
      new Category('c8', 'Hint', 'lightgreen'),
    ];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Yemek Ekle</Text>
      <TextInput
        placeholder="Yemek Adı"
        value={newFoodTitle}
        onChangeText={setNewFoodTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Karmaşıklık"
        value={newFoodComplexity}
        onChangeText={setNewFoodComplexity}
        style={styles.input}
      />
      <TextInput
        placeholder="Bütçe Dostu"
        value={newFoodAffordability}
        onChangeText={setNewFoodAffordability}
        style={styles.input}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Kategori Seç:</Text>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          {categories.map(category => (
            <Picker.Item key={category.id} label={category.title} value={category.id} />
          ))}
        </Picker>
      </View>
      <Button title="Ekle" onPress={handleAddFood} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  picker: {
    flex: 1,
    height: 40,
  },
});
