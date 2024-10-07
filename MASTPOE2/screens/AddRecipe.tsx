import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type addRecipeProp = StackNavigationProp<RootStackParamList, 'AddRecipe'>;

export default function AddRecipeScreen() {
    const [NewDish, setNewDish] = useState('');
    const [Rand, setRand] = useState('');
    const [MealDescription, setMealDescription] = useState('');
    const [recipeType, setRecipeType] = useState('starters');

    const navigation = useNavigation<addRecipeProp>();

    const handleAddDish = (currentDishes: { starters: any []; mainDish: any[]; desserts: any[] }) => {
        const newDish = { NewDish, Rand, MealDescription };

        if (recipeType === 'starters'){
            currentDishes.starters.push(newDish);
        }   else if (recipeType === 'mainDish') {
            currentDishes.mainDish.push(newDish);
        }   else if (recipeType === 'desserts') {
            currentDishes.desserts.push(newDish);
        }

        navigation.navigate('Home', { recipes: currentDishes });
    };

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>

            <Picker selectedValue={recipeType} 
            onValueChange={(itemValue) => setRecipeType(itemValue)} style={styles.picker}>
                <Picker.Item label="Starters" value="starters" />
                <Picker.Item label="Main-Dish" value="mainDish" />
                <Picker.Item label="Desserts" value="desserts" />
            </Picker>
        </View>

            <Text style={styles.label}>New Dish</Text>
            <TextInput placeholder='New Dish' 
            onChangeText={newText => setNewDish(newText)} style={styles.input} 
        />
        
            <Text style={styles.label}>Meal Description</Text>
            <TextInput placeholder='Meal Description' 
            onChangeText={newText => setMealDescription(newText)} style={styles.input} 
        />
        
            <Text style={styles.label}>Rand</Text>
            <TextInput placeholder='Rand' 
            onChangeText={newText => setRand(newText)} style={styles.input} 
        />
    
            <Button
                title="Add Dish"
                onPress={() => {
                    const currentRecipes = navigation.getState().routes.find(r => r.name === 'Home')?.params?.recipes ||
                    { starters: [], mainDish: [], desserts: [] }; 
                    handleAddDish(currentRecipes);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    input: { borderWidth: 1, padding: 8, marginBottom: 12 },
    label: { fontSize: 16, marginBottom: 8 },
    picker: { height: 50, width: '100%' },
    dropdownContainer: { borderWidth: 2, borderColor: 'black', borderRadius: 4, overflow: 'hidden', marginBottom: 12,
    }
});


