import { Alert, Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Encabezado from '../../components/Encabezado';
import MiBoton from '../../components/MiBoton';
import { colores, radio } from '../../constants/tema';

const Inicio = () => {
  const router = useRouter();

  const mostrarAlerta = (titulo: string, mensaje: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${titulo}\n\n${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Tecnólogo en ADSO" />

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles y web. Con
          habilidades en  JavaScript, HTML5, Python y gestión de bases de datos
          relacionales y no relacionales.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>
        <MiBoton
          textoBoton="Enviar correo"
          nombreIcono="mail"
          colorBoton="#F5C451"
          onPress={() => mostrarAlerta('Contacto', 'Correo: pepito.perez@misena.edu.co')}
        />
        <MiBoton
        textoBoton="Llamar"
        nombreIcono="call"
        colorBoton="#6EA8FE"
        onPress={() => mostrarAlerta('Contacto', 'Teléfono: 3001436277')}
        />
    
        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#F06A9B"
          onPress={() => Linking.openURL('https://www.instagram.com/sanprox_art/')}
        />
        <MiBoton
          textoBoton="TikTok"
          nombreIcono="logo-tiktok"
          colorBoton="#C9D3E0"
          onPress={() => Linking.openURL('https://www.tiktok.com/@sanproxart')}
        />
        <MiBoton
        textoBoton="Repositorios en GitHub"
        nombreIcono="logo-github"
        colorBoton="#A78BFA"
        onPress={() => Linking.openURL('https://github.com/sanlith340-droid')}
        />
        <MiBoton
          textoBoton="Estudios"
          nombreIcono="school"
          colorBoton={colores.acento}
          onPress={() => router.push('/estudios')}
        />
      </View>
    </ScrollView>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  contenido: { padding: 16, paddingBottom: 32 },
  seccion: {
    backgroundColor: colores.tarjeta,
    padding: 16,
    borderRadius: radio.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    marginBottom: 16,
  },
  subtitulo: { fontSize: 16, fontWeight: 'bold', color: colores.texto, marginBottom: 12 },
  parrafo: { fontSize: 14, color: colores.textoSuave, lineHeight: 21 },
});
