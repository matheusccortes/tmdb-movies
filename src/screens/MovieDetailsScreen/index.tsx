import {useState, useEffect, useCallback} from 'react';
import {View, Text, Image} from 'react-native';
import {API_IMAGE_BASE_URL} from '@env';
import {AppScreen} from '../../components/AppScreen';
import {ActivityIndicator} from '../../components/ActivityIndicator';
import {Button} from '../../components/Button';
import {MovieDetail} from './MovieDetail';
import {RootStackScreenProps} from '../../routes/types';
import {Movie} from '../../domain/movie/types';
import {axiosInstance} from '../../api/axiosInstance';
import {styles} from './styles';

export function MovieDetailsScreen({
  route: {
    params: {movieId, movieTitle},
  },
  navigation,
}: RootStackScreenProps<'MovieDetails'>) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const fetchMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      const {data: movie} = await axiosInstance.get<Movie>(
        `/movie/${movieId}&language=en-US`,
      );
      setMovie(movie);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  const goToMovieImagesScreen = () => {
    navigation.navigate('MovieImageList', {movieId});
  };

  return (
    <AppScreen scrollable>
      {isLoading && (
        <View style={styles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {movie && (
        <>
          <Image
            style={styles.image}
            source={{
              uri: `${API_IMAGE_BASE_URL}/w500${movie.poster_path}`,
            }}
          />
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.detailsContainer}>
            <MovieDetail label="Overview" value={movie.overview} />
            <MovieDetail label="Popularity" value={movie.popularity} />
            <MovieDetail label="Number of Votes" value={movie.vote_count} />
            <MovieDetail label="Rating" value={movie.vote_average} />
            <MovieDetail label="Release Date" value={movie.release_date} />
          </View>
          <Button title="See More Images" onPress={goToMovieImagesScreen} />
        </>
      )}
      {!!error && (
        <View style={styles.centeredContainer}>
          <Text style={styles.errorMessage}>
            Could not get the details of the movie {movieTitle}
          </Text>
        </View>
      )}
    </AppScreen>
  );
}
