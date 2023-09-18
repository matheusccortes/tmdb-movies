import {Text} from 'react-native';
import {AppScreen} from '../../components/AppScreen';
import {RootStackScreenProps} from '../../routes/types';

export function MovieImageList({
  route: {
    params: {movieId},
  },
}: RootStackScreenProps<'MovieImageList'>) {
  return (
    <AppScreen>
      <Text>{movieId}</Text>
    </AppScreen>
  );
}
