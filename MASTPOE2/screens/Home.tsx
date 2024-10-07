import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import { useRoute } from '@react-navigation/native';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
    const route = useRoute<HomeScreenRouteProp>();

    const recipes = route.params?.recipes || { starters: [], mainDish: [], desserts: [] };

    const navigation = useNavigation<homeScreenProp>();

    const totalDishes = recipes.starters.length + recipes.mainDish.length +recipes.desserts.length;

    return (
        <View style={styles.container}>

            <Text style={styles.counter}> Total Dishes: {totalDishes}</Text>
            <Text style={styles.title}>Starters</Text>
        <FlatList
            data={recipes.starters}
            keyExtractor={(item, index) => item.toString()}
            renderItem={({ item }) => (
            <View style={styles.recipeDetails}>
                <Text>New Dish: {item.NewDish}</Text>
                <Text>Meal Description: {item.MealDescription}</Text>
                <Text>Rand: {item.Rand}</Text>
            </View>
            )}
        />

            <Text style={styles.title}>Main Dish</Text>
        <FlatList
            data={recipes.mainDish}
            keyExtractor={(item, index) => item.toString()}
            renderItem={({ item }) => (
            <View style={styles.recipeDetails}>
                <Text>New Dish: {item.NewDish}</Text>
                <Text>Meal Description: {item.MealDescription}</Text>
                <Text>Rand: {item.Rand}</Text>
            </View>
            )}
        />

            <Text style={styles.title}>Desserts</Text>
        <FlatList
            data={recipes.desserts}
            keyExtractor={(item, index) => item.toString()}
            renderItem={({ item }) => (
            <View style={styles.recipeDetails}>
                <Text>New Dish: {item.NewDish}</Text>
                <Text>Meal Description: {item.MealDescription}</Text>
                <Text>Rand: {item.Rand}</Text>
            </View>
            )}
        />

            <Button
                title="Add New Dishes"
                onPress={() => navigation.navigate('AddRecipe')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 24, marginBottom: 16 },
    recipeDetails: { marginBottom: 24 },
    counter: {fontSize: 20, fontWeight: 'bold', marginBottom: 16},
    
    
    
});


