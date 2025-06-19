import api from '../services/api';

export const fetchPokemons = async () => {
  const response = await api.get('pokemon?limit=20');
  return response.data.results;
};

export const fetchPokemonDetails = async (url) => {
  const response = await api.get(url);
  return response.data;
};
