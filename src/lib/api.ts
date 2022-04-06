import Axios from "axios";

export const fetchPokemonNames = async (query?: string) => {
  console.log(query);
  let url = "";
  if (!query) {
    url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
  } else {
    url = query;
  }
  const res = await Axios.get(url);

  console.log(res);
  console.log(url);
  return res.data;
};

export const fetchPokemonDetails = async (id: string) => {
  const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  console.log(res);
  return res.data;
};
