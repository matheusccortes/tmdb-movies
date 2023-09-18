import {MovieImage} from '../domain/movie/types';

export type APIPaginatedResponse<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
};

export type APIMovieImagesResponse = {
  backdrops: MovieImage[];
  logos?: MovieImage[];
  posters?: MovieImage[];
  id: number;
};
