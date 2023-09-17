import {Text} from 'react-native';
import {AppScreen} from '../../components/AppScreen';
import {RootStackScreenProps} from '../../routes/types';

export function MovieDetailsScreen({
  route,
}: RootStackScreenProps<'MovieDetails'>) {
  return (
    <AppScreen>
      <Text>{route.params.movieId}</Text>
    </AppScreen>
  );
}
