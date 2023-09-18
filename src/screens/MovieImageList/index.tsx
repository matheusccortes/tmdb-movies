import {useState, useEffect, useCallback} from 'react';
import {FlatList, ListRenderItemInfo, Image} from 'react-native';
import {API_IMAGE_BASE_URL} from '@env';
import {AppScreen} from '../../components/AppScreen';
import {EmptyList} from '../../components/EmptyList';
import {ListItemSeparator} from '../../components/ListItemSeparator';
import {RootStackScreenProps} from '../../routes/types';
import {MovieImage} from '../../domain/movie/types';
import {APIMovieImagesResponse} from '../../api/types';
import {axiosInstance} from '../../api/axiosInstance';

export function MovieImageList({
  route: {
    params: {movieId},
  },
}: RootStackScreenProps<'MovieImageList'>) {
  const [images, setImages] = useState<MovieImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const contentContainerFlex = images.length === 0 ? 1 : 0;

  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const {
        data: {backdrops, posters},
      } = await axiosInstance.get<APIMovieImagesResponse>(
        `/movie/${movieId}/images`,
      );
      if (posters) {
        setImages([...backdrops, ...posters]);
      } else {
        setImages(backdrops);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const renderItem = useCallback(
    ({item: {file_path}}: ListRenderItemInfo<MovieImage>) => (
      <Image source={{uri: `${API_IMAGE_BASE_URL}/w500/${file_path}`}} />
    ),
    [],
  );

  return (
    <AppScreen>
      <FlatList
        data={images}
        renderItem={renderItem}
        contentContainerStyle={{flex: contentContainerFlex}}
        showsVerticalScrollIndicator={false}
        keyExtractor={image => image.file_path}
        ItemSeparatorComponent={ListItemSeparator}
        ListEmptyComponent={
          <EmptyList
            listTopic="movie images"
            loading={isLoading}
            error={error}
          />
        }
      />
    </AppScreen>
  );
}
