import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchPokemonNames } from "../../lib/api";
import { selectPage } from "../../store";
import { pageActions } from "../../store/page-slice";

const Home: React.FC = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [paginate, setPaginate] = useState("");
  const { nextPage, prevPage } = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      let result;
      result = await fetchPokemonNames(paginate);
      setPokemonList(result.results);
      dispatch(
        pageActions.storePageApiUrl({
          prev: result.previous,
          next: result.next,
        })
      );
    };
    fetchData();
  }, [paginate]);

  const nextPageHandler = () => {
    setPaginate(nextPage);
  };
  const prevPageHandler = () => {
    setPaginate(prevPage);
  };

  return (
    <PokemonListWrapper>
      <PokemonsWrapper>
        {pokemonList!.map((item: { name: string;}, idx) => (
          <Link to={`/pokemon/${item.name}`} key={idx}>
            <PokemonItem>{item.name.toLocaleUpperCase()}</PokemonItem>
          </Link>
        ))}
      </PokemonsWrapper>
      <div>
        {!!prevPage && (
          <PaginationButton onClick={prevPageHandler}>BACK</PaginationButton>
        )}
        <PaginationButton onClick={nextPageHandler}>NEXT</PaginationButton>
      </div>
    </PokemonListWrapper>
  );
};

const PokemonListWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  border: 2px solid #f03131;
  text-decoration: none;
  color: #fff;
  border-radius: 5px;
  background-color: #f03131;
  margin: 1rem;
  padding: 1.5rem 2rem;
  &:hover {
    border: 2px solid #f03131;
    color: #f03131;
    background-color: transparent;
  }
`;

const PokemonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1rem;
  max-width: 80vw;
  & a {
    text-decoration: none;
  }
`;

const PokemonItem = styled(Paper)`
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 20px black;
    background-color: rgba(242, 242, 242, 0.8) !important;
    transition: all 0.4s ease-in-out;
  }
`;

export default Home;
