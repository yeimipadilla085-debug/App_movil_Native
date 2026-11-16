# App_movil_Native_San

# Santiago Buitrago Goyeneche

## Verificamso el pack json  que tenga las dependencias:

npm init -y - saca los pack.json 

npm install expo

npx expo install

npx expo-router

npx create-expo-app@latest MiHojaDeVida --template tabs

npm install react-dom@19.1.0

npx expo install react-native-web @expo/metro-runtime

npx expo install --check

npx expo start --web

Si ya instalamos las dependencias asegurarse que el packjson tenga todas las dependendencias

{
  "name": "mi-hoja-de-vida",
  "version": "1.0.0",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo/metro-runtime": "~58.0.17",
    "@expo/vector-icons": "^15.0.0",
    "expo": "^58.0.25",
    "expo-constants": "~58.0.16",
    "expo-linking": "~58.0.17",
    "expo-router": "~58.0.31",
    "expo-status-bar": "~58.0.5",
    "react": "19.3.0",
    "react-dom": "19.3.0",
    "react-native": "0.88.1",
    "react-native-safe-area-context": "~5.11.1",
    "react-native-screens": "~4.30.1",
    "react-native-web": "^0.21.4"
  },
  "devDependencies": {
    "typescript": "~6.0.3"
  }
}

