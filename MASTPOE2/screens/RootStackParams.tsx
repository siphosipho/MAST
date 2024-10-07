export type RootStackParamList = {
    Home: { recipes: { starters: Book[], mainDish: Book[], deserts: Book[] };  };
    AddRecipe: undefined;
   
};

export type Book = {
    NewDish: string;
    Rand: string;
    MealDescription: string;
};