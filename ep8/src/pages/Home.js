import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const Home = () => {
	const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => {
			res.data;
		});
	});
	const { username } = useContext(AppContext);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  if(isError) {
    return <h1>Error has occured</h1>
  }
	return (
		<div>
			<h1>Hello, This is {username}</h1>
			<p>{catData?.fact}</p>
      <button type="button" onClick={refetch}>update</button>
		</div>
	);
};
