import { ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Restaurants from '../components/Restaurants';
import Search from '../components/Search';
import { FlatList } from 'react-native-web';

export default function HomeScreen() {
  const [term, setTerm] = useState('Burger');

  const commonCatefories = [
    {
      name: 'Burder',
      imageUrl: require('../assets/burger.png'),
      id: 0,
    },
    {
      name: 'Cake',
      imageUrl: require('../assets/cake.png'),
      id: 1,
    },
    {
      name: 'Pasta',
      imageUrl: require('../assets/pasta.png'),
      id: 2,
    },
    {
      name: 'Pizza',
      imageUrl: require('../assets/pizza.png'),
      id: 3,
    },
    {
      name: 'Drinks',
      imageUrl: require('../assets/smoothies.png'),
      id: 4,
    },
    {
      name: 'Steak',
      imageUrl: require('../assets/steak.png'),
      id: 5,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCatefories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />

      <StatusBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    flex: 1,
  },
});
