import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const Home = () => {
	const { data } = useQuery(["cat"], () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => {
			res.data;
		});
	});
	const { username } = useContext(AppContext);
	return (
		<div>
			<h1>Hello, This is {username}</h1>
			<p>{data?.fact}</p>
		</div>
	);
};
