import {View, Text} from 'react-native';
import {ActivityIndicator} from '../ActivityIndicator';
import {styles} from './styles';

type EmptyListProps = {
  loading: boolean;
  error: unknown;
  listTopic: string;
};

export function EmptyList({loading, error, listTopic}: EmptyListProps) {
  let component = <Text>There are no {listTopic}</Text>;

  if (loading) {
    component = <ActivityIndicator size="large" />;
  } else if (error) {
    component = <Text>Could not load {listTopic}</Text>;
  }

  return <View style={styles.container}>{component}</View>;
}
