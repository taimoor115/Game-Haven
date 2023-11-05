import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>('/games');

export default useGames;
