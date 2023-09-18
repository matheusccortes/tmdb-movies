import {Pressable, Image, View, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StarIcon} from '../../../../assets/icons/StarIcon';
import {RootStackParamList} from '../../../../routes/types';
import {ListMovie} from '../../../../domain/movie/types';
import {styles} from './styles';

type MovieCardProps = {
  item: ListMovie;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function MovieCard({
  item: {id, poster_path, title, vote_average},
  navigation,
}: MovieCardProps) {
  const goToMovieDetailsScreen = () => {
    navigation.navigate('MovieDetails', {movieId: id, movieTitle: title});
  };

  return (
    <Pressable style={styles.container} onPress={goToMovieDetailsScreen}>
      <Image
        style={styles.image}
        source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.averageScoreContainer}>
          <StarIcon />
          <Text style={styles.averageScore}>{vote_average}</Text>
        </View>
      </View>
    </Pressable>
  );
}
