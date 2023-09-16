import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: theme.fontSize['2xl'],
    fontWeight: '700',
    color: theme.colors.primary[900],
  },
});
