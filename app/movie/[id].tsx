import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '@/api/tmdb';
import { toggleFavorite, isFavorite } from '@/services/favorites';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function MovieDetails() {
  const { id } = useLocalSearchParams();
  const [movie, setMovie] = useState<any>(null);
  const [favorite, setFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovie();
  }, []);

  async function loadMovie() {
    try {
      const data = await getMovieDetails(Number(id));
      setMovie(data);

      const fav = await isFavorite(Number(id));
      setFavorite(fav);
    } finally {
      setLoading(false);
    }
  }

  async function handleFavorite() {
    await toggleFavorite(movie);
    setFavorite(!favorite);
  }

  if (loading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B1F3A'
      }}>
        <ActivityIndicator size="large" color="#01AAE5" />
      </View>
    );
  }

  if (!movie) return null;

  return (
    <LinearGradient
      colors={['#0B1F3A', '#1B406D']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView>

          {/* BACK BUTTON */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 10,
              borderRadius: 20
            }}
          >
            <Text style={{ color: '#fff' }}>←</Text>
          </TouchableOpacity>

          {/* POSTER */}
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
            style={{
              width: '100%',
              height: 400
            }}
            resizeMode="cover"
          />

          {/* CONTENT CARD */}
          <View style={{
            padding: 16
          }}>

            {/* TITLE */}
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff'
            }}>
              {movie.title}
            </Text>

            {/* FAVORITE BUTTON */}
            <TouchableOpacity
              onPress={handleFavorite}
              style={{
                marginTop: 15,
                backgroundColor: favorite ? '#E63946' : '#01AAE5',
                padding: 14,
                borderRadius: 10,
                alignItems: 'center'
              }}
            >
              <Text style={{
                color: '#fff',
                fontWeight: 'bold'
              }}>
                {favorite
                  ? '❤️ Remover dos favoritos'
                  : '⭐ Adicionar aos favoritos'}
              </Text>
            </TouchableOpacity>

            {/* OVERVIEW */}
            <Text style={{
              marginTop: 20,
              color: '#BFD4E6',
              lineHeight: 20
            }}>
              {movie.overview}
            </Text>

          </View>

        </ScrollView>

      </SafeAreaView>
    </LinearGradient>
  );
} 