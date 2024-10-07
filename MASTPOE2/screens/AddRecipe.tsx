import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type addRecipeProp = StackNavigationProp<RootStackParamList, 'AddRecipe'>;

export default function AddRecipeScreen() {
    const [NewDish, setNewDish] = useState('');
    const [Chef, setChef] = useState('');
    const [Rand, setRand] = useState('');
    const [MealDescription, setMealDescription] = useState('');
    const [recipeType, setRecipeType] = useState('starters');

    const navigation = useNavigation<addRecipeProp>();

    const handleAddDish = (currentDishes: { starters: any []; mainDish: any[]; deserts: any[] }) => {
        const newDish = { NewDish, Chef, Rand, MealDescription };

        if (recipeType === 'starters'){
            currentDishes.starters.push(newDish);
        }   else if (recipeType === 'mainDish') {
            currentDishes.mainDish.push(newDish);
        }   else if (recipeType === 'desserts') {
            currentDishes.deserts.push(newDish);
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
                <Picker.Item label="Desserts" value="deserts" />
            </Picker>
        </View>

            <Text style={styles.label}>New recipe</Text>
            <TextInput placeholder='New Recipe' 
            onChangeText={newText => setNewDish(newText)} style={styles.input} 
        />
        
            <Text style={styles.label}>Meal Description</Text>
            <TextInput placeholder='setMealDescription' 
            onChangeText={newText => setChef(newText)} style={styles.input} 
        />
        
             <Text style={styles.label}>Rand</Text>
            <TextInput placeholder='Rand' 
            onChangeText={newText => setRand(newText)} style={styles.input} 
        />
    
            <Button
                title="Add Dish"
                onPress={() => {
                    const currentRecipes = navigation.getState().routes.find(r => r.name === 'Home')?.params?.recipes ||
                    { starters: [], mainDish: [], deserts: [] }; 
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


