import MovieCard from "@/components/MovieCard";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/api/tmdb";

export default function MoviesScreen() {
  const [popular, setPopular] = useState<any[]>([]);
  const [trending, setTrending] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [nowPlaying, setNowPlaying] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    setLoading(true);

    const [p, t, r, n] = await Promise.all([
      getPopularMovies(),
      getTrendingMovies(),
      getTopRatedMovies(),
      getNowPlayingMovies(),
    ]);

    setPopular(p);
    setTrending(t);
    setTopRated(r);
    setNowPlaying(n);

    setLoading(false);
  }

  if (loading) {
    return (
      <LinearGradient colors={["#0B1F3A", "#1B406D"]} style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#01AAE5" />
          <Text style={{ color: "#BFD4E6", marginTop: 10 }}>
            Carregando filmes...
          </Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={["#0B1F3A", "#1B406D"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "bold", color: "#fff" }}>
            <Text style={{ color: "#01AAE5" }}>O</Text>POVO
          </Text>

          <TouchableOpacity onPress={() => router.replace("/login")}>
            <Text style={{ color: "#01AAE5", fontWeight: "bold" }}>Sair</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Section title="🔥 Em alta" data={trending} />
          <Section title="🎬 Populares" data={popular} />
          <Section title="⭐ Mais votados" data={topRated} />
          <Section title="🆕 Em cartaz" data={nowPlaying} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

function Section({ title, data }: any) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 12,
          marginBottom: 10,
        }}
      >
        {title}
      </Text>

      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() =>
              router.push({
                pathname: "/movie/[id]",
                params: { id: item.id.toString() },
              })
            }
          />
        )}
      />
    </View>
  );
}
