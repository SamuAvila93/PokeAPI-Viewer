import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { fetchPokemonDetails } from '../controllers/PokemonController';

export default function DetailsScreen({ route }) {
  const [details, setDetails] = useState(null);
  const { url } = route.params;

  useEffect(() => {
    fetchPokemonDetails(url).then(setDetails);
  }, []);

  if (!details) return <ActivityIndicator size="large" />;

  return (
    <View style={{ padding: 16, alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{details.name.toUpperCase()}</Text>
      <Image
        source={{ uri: details.sprites.front_default }}
        style={{ width: 150, height: 150, margin: 20 }}
      />
      <Text>Altura: {details.height}</Text>
      <Text>Peso: {details.weight}</Text>
    </View>
  );
}
