import {View, Text} from 'react-native';
import {styles} from './styles';

type MovieDetailProps = {
  label: string;
  value: string | number;
};

export function MovieDetail({label, value}: MovieDetailProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
