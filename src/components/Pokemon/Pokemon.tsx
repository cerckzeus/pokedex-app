import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchPokemonDetails } from "../../lib/api";
import { PokemonDetailsResult } from "../../models/PokemonDetailsResult";

const Pokemon: React.FC = () => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetailsResult>();
  const params = useParams<{ pokemonId: string }>();
  const { pokemonId } = params;

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetchPokemonDetails(pokemonId);
      setPokemonDetails(result);
    };
    fetchData();
  }, [pokemonId]);

  console.log(pokemonDetails);
  return (
    <PokemonWrapper>
      <PokemonDetails>
        <div className="row">
          <img alt="" src={pokemonDetails?.sprites.front_default} />
          <div>
            <h1>{pokemonDetails?.name.toLocaleUpperCase()}</h1>
            <div>
              <strong>Types:</strong>
              <div className="details-data">
                {pokemonDetails?.types.map((item, idx, arr) => {
                  if (arr.length - 1 === idx) {
                    return <span key={idx}>{item.type.name}.</span>;
                  } else {
                    return <span key={idx}>{item.type.name}, </span>;
                  }
                })}
              </div>
            </div>
            <div>
              <strong>Abilities:</strong> <br />
              <div className="details-data">
                {pokemonDetails?.abilities.map((item, idx) => {
                  return <div key={idx}>{item.ability.name} </div>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="stats-details">
            <strong>Stats:</strong> <br />
            <div className="details-data">
              {pokemonDetails?.stats.map((item, idx) => {
                return (
                  <div key={idx} className="stat">
                    <span>{item.stat.name}:</span> <span>{item.base_stat}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PokemonDetails>
    </PokemonWrapper>
  );
};

const PokemonWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const PokemonDetails = styled(Paper)`
  margin: 2rem;
  padding: 2rem;
  & img {
    width: 400px;
  }
  & .row {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    & .details-data {
        border-radius: 5px;
      border: 2px solid #000;
      padding: 1rem;
      margin: 2rem;
    }
    & .stats-details {
      width: 100%;
      & .stat {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default Pokemon;
