import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemons } from '../controllers/PokemonController';

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemons()
      .then(setPokemons)
      .catch((error) => {
        console.error('Erro ao buscar pokémons:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {loading ? <ActivityIndicator size="large" /> : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PokemonCard
              name={item.name}
              onPress={() => navigation.navigate('Details', { url: item.url })}
            />
          )}
        />
      )}
    </View>
  );
}
