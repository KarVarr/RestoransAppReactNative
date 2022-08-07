import { TextInput, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../styles';
import { useState } from 'react';

export default function Search({setTerm}) {
  const [input, setInput] = useState('');
  const handleEndEditing = () => {
    if(!input) {
      return
    } else {
      setTerm(input)
      setInput('')
    }
  }
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name='search' size={25} />
      <TextInput
        onChangeText={text => {
          setInput(text);
        }}
        onEndEditing={handleEndEditing}
        value={input}
        style={styles.input}
        placeholder='Restaurants, food...'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
  },
  elevation,
  input: {
    width: '100%',
    fontSize: 20,
    marginLeft: 10,
    outlineStyle: 'none',
  },
});
