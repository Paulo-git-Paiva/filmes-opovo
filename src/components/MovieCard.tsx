import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({ movie, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 120,
        marginRight: 10,
      }}
    >
      <View
        style={{
          borderRadius: 12,
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={{
            width: "100%",
            height: 180,
          }}
          resizeMode="cover"
        />
      </View>

      <Text
        numberOfLines={1}
        style={{
          color: "#fff",
          fontSize: 12,
          marginTop: 6,
          fontWeight: "600",
        }}
      >
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}
