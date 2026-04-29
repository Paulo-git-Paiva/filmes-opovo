import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = '@favorites';

export async function getFavorites() {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveFavorites(favorites: any[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(favorites));
}

export async function toggleFavorite(movie: any) {
  const favorites = await getFavorites();

  const exists = favorites.find((m: any) => m.id === movie.id);

  let updated;

  if (exists) {
    updated = favorites.filter((m: any) => m.id !== movie.id);
  } else {
    updated = [...favorites, movie];
  }

  await saveFavorites(updated);

  return updated;
}

export async function isFavorite(id: number) {
  const favorites = await getFavorites();
  return favorites.some((m: any) => m.id === id);
}