import MovieCard from "@/components/MovieCard";
import { getFavorites } from "@/services/favorites";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const data = await getFavorites();
    setMovies(data);
  }

  return (
    <LinearGradient colors={["#0B1F3A", "#1B406D"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            ⭐ Minha Lista
          </Text>

          <Text
            style={{
              color: "#BFD4E6",
              marginTop: 4,
            }}
          >
            Seus filmes favoritos
          </Text>
        </View>

        {movies.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#BFD4E6",
                fontSize: 16,
              }}
            >
              Sua lista de favoritos está vazia.
            </Text>
          </View>
        ) : (
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={{
              paddingHorizontal: 10,
              paddingBottom: 20,
            }}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 12 }}>
                <MovieCard
                  movie={item}
                  onPress={() =>
                    router.push({
                      pathname: "/movie/[id]",
                      params: { id: item.id.toString() },
                    })
                  }
                />
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
