import {StyleSheet} from 'react-native';
import {theme} from '../../../../theme';

const borderRadiusMedium = theme.borderRadius.md;

export const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadiusMedium,
    width: 160,
  },
  image: {
    height: 200,
    borderTopLeftRadius: borderRadiusMedium,
    borderTopRightRadius: borderRadiusMedium,
  },
  body: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.secondary[200],
    borderBottomLeftRadius: borderRadiusMedium,
    borderBottomRightRadius: borderRadiusMedium,
    gap: theme.spacing.sm,
  },
  title: {
    color: theme.colors.primary[900],
    fontSize: theme.fontSize.md,
    fontWeight: 'bold',
  },
  averageScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  averageScore: {
    color: theme.colors.primary[900],
    fontWeight: '600',
  },
});
