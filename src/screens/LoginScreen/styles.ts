import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSize['3xl'],
    fontWeight: '600',
    color: theme.colors.primary[900],
  },
  subtitle: {
    color: theme.colors.primary[900],
  },
  textInputSetContainer: {
    gap: theme.spacing.lg,
    marginTop: theme.spacing['3xl'],
    marginBottom: theme.spacing['2xl'],
  },
});
