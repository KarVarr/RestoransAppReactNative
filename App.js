import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryItems from './src/components/CategoryItems';
import Header from './src/components/Header';
import Search from './src/components/Search';

export default function App() {
  const [term, setTerm] = useState("Burger")

  const commonCatefories = [
    {
      name: 'Burder',
      imageUrl: require('./src/assets/burger.png'),
      id: 0,
    },
    {
      name: 'Cake',
      imageUrl: require('./src/assets/cake.png'),
      id: 1,
    },
    {
      name: 'Pasta',
      imageUrl: require('./src/assets/pasta.png'),
      id: 2,
    },
    {
      name: 'Pizza',
      imageUrl: require('./src/assets/pizza.png'),
      id: 3,
    },
    {
      name: 'Drinks',
      imageUrl: require('./src/assets/smoothies.png'),
      id: 4,
    },
    {
      name: 'Steak',
      imageUrl: require('./src/assets/steak.png'),
      id: 5,
    },
  ];
  
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      
        <FlatList
          data={commonCatefories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItems
                name={item.name}
                imageUrl={item.imageUrl}
                index={index}
                length={commonCatefories.length - 1}
                handlePress={() => setTerm(item.name)}
                active={item.name === term}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={category => category.id}
        />
      
      {/* {commonCatefories.map((items) => {<CategoryItems key={items.id} name={items.name} imageUrl={items.imagaUrl}/>})}
       */}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f3f3f3',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

});
