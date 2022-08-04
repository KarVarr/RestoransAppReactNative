import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { elevation } from '../styles';

export default function CategoryItems({
  name,
  imageUrl,
  index,
  length,
  handlePress,
  active,
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          index === length ? { marginRight: 25 } : null,
          active && { backgroundColor: 'rgb(241,186,87)' },
        ]}
      >
        <View style={styles.imgContainer}>
          <Image source={imageUrl} style={styles.img} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  elevation,
  img: {
    width: 35,
    height: 35,
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
});
