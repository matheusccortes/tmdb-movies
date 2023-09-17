import {View} from 'react-native';
import {theme} from '../../theme';

type ListItemSeparatorProps = {
  height?: number;
  backgroundColor?: string;
};

export function ListItemSeparator({
  height = theme.spacing.lg,
  backgroundColor,
}: ListItemSeparatorProps) {
  return <View style={{height, backgroundColor}} />;
}
