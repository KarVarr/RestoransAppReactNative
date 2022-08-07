import { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import UseRestaurant from '../hooks/UseRestaurant';

export default function ResraurantScreen({ navigation }) {
  const [{ data, loading, error }, searchRestaurant] = UseRestaurant([]);
  const id = navigation.getParam('id');

  const dimensions = Dimensions.get('window');
  const imageWidth = dimensions.width;
  const imageHeigth = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) return <ActivityIndicator size='large' marginVertical={30} />;

  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: imageHeigth, width: imageWidth }}
            />
          )}
        />
      )}
    </View>
  );
}
