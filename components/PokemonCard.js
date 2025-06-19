import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function PokemonCard({ name, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
