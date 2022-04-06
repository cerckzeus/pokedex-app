import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/pokemon/:pokemonId">
          <PokemonPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
