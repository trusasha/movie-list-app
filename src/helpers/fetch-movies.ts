import { IMovie, IMoviesResponse } from '../interfaces';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjQ0NGJlMGUwNDZjYmMwMmM5MWZmMWE3ZTkzNmMwYSIsInN1YiI6IjY1ZDM1NzUwMTI0MjVjMDE3Y2U0ZDg4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W_Ujf3EsCr9FpcFyqw6lkMEXOeb95_yLQn_65lqlkYg';

const API_URL = 'https://api.themoviedb.org/3';

/**
 * Fetch popular or searched movies
 */
const fetchMovies = async ({
  pageParam = 0,
  meta: { search = '' } = {},
}): Promise<{
  data: IMovie[];
  nextPage: number;
}> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const REQUEST_URL = search.length
    ? `${API_URL}/search/movie?query=${encodeURI(search)}&page=${pageParam}`
    : `${API_URL}/movie/popular?page=${pageParam}`;

  const response = await fetch(REQUEST_URL, options);

  if (!response.ok) {
    throw new Error('Oops! Something wrong');
  }

  const data: IMoviesResponse = await response.json();

  return {
    data: data.results,
    nextPage: data.page + 1,
  };
};

export default fetchMovies;
