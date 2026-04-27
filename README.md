# 🎬 Filmes O POVO - App Mobile

O app permite autenticação de usuários, listagem de filmes populares via TMDB, visualização de detalhes e gerenciamento de favoritos com persistência.

---

## 🚀 Funcionalidades

- Login e cadastro com Firebase Auth
- Listagem de filmes (TMDB API)
- Tela de detalhes do filme
- Favoritar / remover favoritos
- Persistência de favoritos (mesmo após logout/login)
- Separação por categorias (Populares, Em alta, etc.)
- Navegação com Expo Router

---

## 📱 Tecnologias utilizadas

- React Native (Expo)
- Expo Router
- Firebase Authentication
- AsyncStorage
- TMDB API
- React Context API

---

## 🔐 Autenticação

O login é feito via Firebase. O estado do usuário é persistido automaticamente.

---

## 🎥 API de Filmes

Utiliza a API do The Movie Database (TMDB):

https://www.themoviedb.org/documentation/api

---

## 📲 Build de preview (Android)

O aplicativo pode ser baixado e testado diretamente em dispositivos Android através do build gerado com Expo EAS:

https://expo.dev/accounts/paulo.paiva/projects/filmes-povo/builds/f2161b25-e55c-45c6-b589-a2aa4cca82a3

---

## 📦 Instalação do projeto (desenvolvimento)

```bash
npm install
npx expo start
