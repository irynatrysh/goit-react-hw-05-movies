import axios from 'axios';

const apiKey = '12c32cf6e2f1b9ee11784c9e34961f238';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/all/day?api_key=${apiKey}`);
    return data;
  } catch (error) {
    console.error('Error fetching trending movies', error);
    throw error;
  }
};

export const searchFilm = async query => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
    );
    return data;
  } catch (error) {
    console.error('Error fetching searchFilm', error);
    throw error;
  }
};

export const getFilm = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}?api_key=${apiKey}&language=en-US`
    );
    return data;
  } catch (error) {
    console.error('Error fetching movie details', error);
    throw error;
  }
};

export const getCasts = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    console.log('Casts data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching casts', error);
    throw error;
  }
};

export const getReviews = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/reviews?api_key=${apiKey}&language=en-US`
    );
    console.log('Reviews data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching reviews', error);
    throw error;
  }
};
