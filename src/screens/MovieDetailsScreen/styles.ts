import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 500,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.lg,
  },
  title: {
    color: theme.colors.primary[900],
    fontSize: theme.fontSize['2xl'],
    fontWeight: 'bold',
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  errorMessage: {
    color: theme.colors.primary[900],
    fontSize: theme.fontSize.md,
  },
  detailsContainer: {
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
  },
});
