import movies from './resources/movies.json';

export const search = (keyword) => {
    // if (keyword === 'Random')
    return movies.results;
};

export const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';