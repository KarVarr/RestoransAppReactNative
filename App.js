import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreens';
import ResraurantScreen from './src/screens/RestaurantScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: ResraurantScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Restaurans App',
    },
  }
);
export default createAppContainer(navigator);

// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import Categories from './src/components/Categories';
// import Restaurants from './src/components/Restaurants';
// import Header from './src/components/Header';
// import Search from './src/components/Search';

// export default function App() {
//   const [term, setTerm] = useState('Burger');

//   const commonCatefories = [
//     {
//       name: 'Burder',
//       imageUrl: require('./src/assets/burger.png'),
//       id: 0,
//     },
//     {
//       name: 'Cake',
//       imageUrl: require('./src/assets/cake.png'),
//       id: 1,
//     },
//     {
//       name: 'Pasta',
//       imageUrl: require('./src/assets/pasta.png'),
//       id: 2,
//     },
//     {
//       name: 'Pizza',
//       imageUrl: require('./src/assets/pizza.png'),
//       id: 3,
//     },
//     {
//       name: 'Drinks',
//       imageUrl: require('./src/assets/smoothies.png'),
//       id: 4,
//     },
//     {
//       name: 'Steak',
//       imageUrl: require('./src/assets/steak.png'),
//       id: 5,
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <Header />
//       <Search setTerm={setTerm} />
//       <Categories categories={commonCatefories} setTerm={setTerm} term={term} />
//       <Restaurants term={term}/>
//       {/* {commonCatefories.map((items) => {<CategoryItems key={items.id} name={items.name} imageUrl={items.imagaUrl}/>})}
//        */}
//       <StatusBar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#f3f3f3',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
