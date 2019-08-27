import React from "react";
import Welcome from "../components/Welcome";
import Information from "../components/Information";
import { useTodoContext } from "../components/TodoContextProvider";

const Home = () => {
  const { loading } = useTodoContext();
  return <>{loading ? <Information /> : <Welcome />}</>;
};

export default Home;
