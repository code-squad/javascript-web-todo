import React from "react";
import Welcome from "../components/Welcome";
import Information from "../components/Information";
import { useTodoContext } from "../components/TodoContextProvider";

const Home = () => {
  const { loading, warningVisible } = useTodoContext();
  return <>{loading || warningVisible ? <Information /> : <Welcome />}</>;
};

export default Home;
