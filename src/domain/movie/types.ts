export type ListMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

type Genre = {
  id: number;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type Movie = Omit<ListMovie, 'genre_ids'> & {
  budget: number;
  genres: Genre[];
  revenue: number;
  spoken_languages: SpokenLanguage[];
  production_countries: ProductionCountry[];
};

export type MovieImage = {
  aspect_ratio: number;
  height: number;
  width: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
};
