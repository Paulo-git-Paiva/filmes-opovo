import { AuthContext } from "@/contexts/AuthContext";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      await register(email, password);
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.replace("/movies");
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  }

  return (
    <ImageBackground
      source={require("../../src/assets/images/fundo.jpeg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["transparent", "rgba(11,31,58,0.8)"]}
        style={{ flex: 1, justifyContent: "center", padding: 24 }}
      >
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          <Text style={{ color: "#01AAE5" }}>O</Text>POVO
        </Text>

        <Text
          style={{
            color: "#BFD4E6",
            marginTop: 6,
            marginBottom: 40,
          }}
        >
          Crie sua conta para continuar
        </Text>

        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Text style={{ color: "#AFC6DB", marginBottom: 6 }}>E-mail</Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor="#6F8CA6"
            style={{
              backgroundColor: "#0F2D4A",
              borderRadius: 10,
              padding: 14,
              color: "#fff",
              marginBottom: 16,
              borderWidth: 1,
              borderColor: "#1E5A8A",
            }}
          />

          <Text style={{ color: "#AFC6DB", marginBottom: 6 }}>Senha</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="••••••••"
            placeholderTextColor="#6F8CA6"
            style={{
              backgroundColor: "#0F2D4A",
              borderRadius: 10,
              padding: 14,
              color: "#fff",
              marginBottom: 24,
              borderWidth: 1,
              borderColor: "#1E5A8A",
            }}
          />

          <TouchableOpacity onPress={handleRegister}>
            <LinearGradient
              colors={["#01AAE5", "#0077B6"]}
              style={{
                padding: 16,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Criar conta
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/login")}
            style={{ marginTop: 16, alignItems: "center" }}
          >
            <Text style={{ color: "#8FBBDC" }}>
              Já tem conta? <Text style={{ color: "#01AAE5" }}>Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
