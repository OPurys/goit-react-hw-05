import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODdkYzRiOTdlZjUxNGQ1ZGQ5NTY5Y2I0YmUyNzQ4ZiIsIm5iZiI6MTcyNzYyMzAzMC41MTgxMzgsInN1YiI6IjY2ZjZjN2IwZTBiZjdhYzI4NTk2ODI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYBBR8dQxNq9OsOuG7LFzoBdU0cokpQsnFr-dZkDKSw';

export async function fetchTrendingMovies(timeWindow = 'day') {
  const { data } = await axios.get(`trending/movie/${timeWindow}`, {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  });

  return data.results;
}

export async function fetchMovies(query) {
  const { data } = await axios.get(`search/movie`, {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
    params: {
      query: query,
    },
  });

  return data.results;
}

export async function fetchInfoAboutMovies(movieId) {
  const { data } = await axios.get(`movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  });

  return data;
}

export async function fetchCast({ movieId }) {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  });

  return data.cast;
}

export async function fetchReviews({ movieId }) {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  });

  return data.results;
}
