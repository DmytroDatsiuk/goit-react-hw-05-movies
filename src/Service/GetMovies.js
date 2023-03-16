import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const GetTrendingMovies = async () => {
  const params = {
    api_key: '3698df5e437f17f7b871cad5fa2ce7cd',
  };

  const response = await axios.get('trending/movie/day', {
    params,
  });

  return response.data.results;
};

export const GetSearchMovies = async (query, page) => {
  const params = {
    api_key: '3698df5e437f17f7b871cad5fa2ce7cd',
    query,
    page,
    include_adult: false,
    language: 'en-US',
  };

  const response = await axios.get('search/movie', {
    params,
  });

  return response.data.results;
};

export const GetDetailsMovie = async id => {
  const params = {
    api_key: '3698df5e437f17f7b871cad5fa2ce7cd',
    language: 'en-US',
  };

  const response = await axios.get(`movie/${id}`, {
    params,
  });

  return response.data;
};

export const GetCastData = async id => {
  const params = {
    api_key: '3698df5e437f17f7b871cad5fa2ce7cd',
    language: 'en-US',
  };

  const response = await axios.get(`movie/${id}/credits`, { params });

  return response.data.cast;
};

export const GetReviewsData = async id => {
  const params = {
    api_key: '3698df5e437f17f7b871cad5fa2ce7cd',
    language: 'en-US',
  };

  const response = await axios.get(`movie/${id}/reviews`, { params });

  return response.data.results;
};
