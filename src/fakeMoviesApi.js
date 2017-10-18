import movies from './resources/movies.json';

export const search = (keyword) => {
    if (keyword === 'Random')
        return movies.results;
};