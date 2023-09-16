import {View, Text} from 'react-native';
import {styles} from './styles';

type AppScreenHeaderProps = {
  title: string;
};

export function AppScreenHeader({title}: AppScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
