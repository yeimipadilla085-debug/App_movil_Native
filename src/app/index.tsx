import { Alert, Linking, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Encabezado from '../../components/Encabezado';
import MiBoton from '../../components/MiBoton';
import { colores, radio } from '../../constants/tema';

// Muestra los datos en una alerta. Si se pasa una url, ofrece abrirla.
const mostrarDatos = (titulo: string, mensaje: string, url?: string) => {
  if (Platform.OS === 'web') {
    if (url) {
      if (window.confirm(`${titulo}\n\n${mensaje}\n\n¿Abrir el enlace?`)) {
        Linking.openURL(url);
      }
    } else {
      window.alert(`${titulo}\n\n${mensaje}`);
    }
    return;
  }

  if (url) {
    Alert.alert(titulo, mensaje, [
      { text: 'Cerrar', style: 'cancel' },
      { text: 'Abrir', onPress: () => Linking.openURL(url) },
    ]);
  } else {
    Alert.alert(titulo, mensaje);
  }
};

const Inicio = () => {
  const router = useRouter();

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Tecnólogo en ADSO" />

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles y web. Con
          habilidades en JavaScript, HTML5, Python y gestión de bases de datos relacionales y no
          relacionales.
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar correo"
          nombreIcono="mail"
          colorBoton="#F5C451"
          onPress={() => mostrarDatos('Correo', 'santiagobui789@gmail.com')}
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#6EA8FE"
          onPress={() => mostrarDatos('Teléfono', '3001436277')}
        />
        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#5B8DEF"
          onPress={() =>
            mostrarDatos('Facebook', 'facebook.com/tu-usuario', 'https://www.facebook.com/tu-usuario')
          }
        />
        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#F06A9B"
          onPress={() =>
            mostrarDatos('Instagram', '@sanprox_art', 'https://www.instagram.com/sanprox_art/')
          }
        />
        <MiBoton
          textoBoton="TikTok"
          nombreIcono="logo-tiktok"
          colorBoton="#C9D3E0"
          onPress={() => mostrarDatos('TikTok', '@sanproxart', 'https://www.tiktok.com/@sanproxart')}
        />
        <MiBoton
          textoBoton="Repositorios en GitHub"
          nombreIcono="logo-github"
          colorBoton="#A78BFA"
          onPress={() =>
            mostrarDatos(
              'GitHub',
              'github.com/sanlith340-droid',
              'https://github.com/sanlith340-droid'
            )
          }
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