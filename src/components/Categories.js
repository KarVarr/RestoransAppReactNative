import { FlatList, View } from 'react-native';
import CategoryItems from './CategoryItems';

export default function Categories({ categories, setTerm, term }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItems
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              length={categories.length - 1}
              handlePress={() => setTerm(item.name)}
              active={item.name === term}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={category => category.id}
      />
    </View>
  );
}
