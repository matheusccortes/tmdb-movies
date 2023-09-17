import {useState, useEffect, useCallback} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {AppScreen} from '../../components/AppScreen';
import {EmptyList} from '../../components/EmptyList';
import {ListItemSeparator} from '../../components/ListItemSeparator';
import {ActivityIndicator} from '../../components/ActivityIndicator';
import {MovieCard} from './components/MovieCard';
import {RootStackScreenProps} from '../../routes/types';
import {ListMovie} from '../../domain/movie/types';
import {APIPaginatedResponse} from '../../api/types';
import {axiosInstance} from '../../api/axiosInstance';
import {styles} from './styles';

type ListFooterProps = {
  loading: boolean;
  isListEmpty: boolean;
};

function ListFooter({loading, isListEmpty}: ListFooterProps) {
  if (loading && !isListEmpty) {
    return (
      <View style={styles.footer}>
        <ActivityIndicator />
      </View>
    );
  }
}

export function HomeScreen({navigation}: RootStackScreenProps<'Home'>) {
  const [movies, setMovies] = useState<ListMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [page, setPage] = useState(1);

  const contentContainerFlex = movies.length === 0 ? 1 : undefined;

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const {
        data: {results: additionalMovies},
      } = await axiosInstance.get<APIPaginatedResponse<ListMovie>>(
        `/movie/popular?language=en-US&page=${page}`,
      );
      setMovies(previousMovies => [...previousMovies, ...additionalMovies]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<ListMovie>) => (
      <MovieCard item={item} navigation={navigation} />
    ),
    [navigation],
  );

  return (
    <AppScreen headerTitle="Popular Movies">
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={movie => String(movie.id)}
        onEndReached={() => setPage(previousPage => previousPage + 1)}
        columnWrapperStyle={styles.columnContainer}
        contentContainerStyle={{flex: contentContainerFlex}}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={
          <EmptyList listTopic="movies" loading={isLoading} error={error} />
        }
        ListFooterComponent={
          <ListFooter isListEmpty={movies.length === 0} loading={isLoading} />
        }
      />
    </AppScreen>
  );
}
