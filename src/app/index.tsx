import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import Encabezado from '../../components/Encabezado';
import MiBoton from '../../components/MiBoton';
import { colores, radio } from '../../constants/tema';

const Inicio = () => {
  const router = useRouter();

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
          onPress={() => Alert.alert('Contacto', 'Correo: pepito.perez@misena.edu.co')}
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#6EA8FE"
          onPress={() => Alert.alert('Contacto', 'Teléfono: +57 300 123 4567')}
        />
        <MiBoton
          textoBoton="Ver perfil de LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#3B9AE1"
          onPress={() => Alert.alert('LinkedIn', 'linkedin.com/in/pepito-perez')}
        />
        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#5B8DEF"
          onPress={() => Alert.alert('Facebook', 'facebook.com/pepito.perez')}
        />
        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#F06A9B"
          onPress={() => Alert.alert('Instagram', '@pepito.perez')}
        />
        <MiBoton
          textoBoton="TikTok"
          nombreIcono="logo-tiktok"
          colorBoton="#C9D3E0"
          onPress={() => Alert.alert('TikTok', '@pepito.perez')}
        />
        <MiBoton
          textoBoton="Repositorios en GitHub"
          nombreIcono="logo-github"
          colorBoton="#A78BFA"
          onPress={() => Alert.alert('GitHub', 'github.com/pepito-perez/hoja-de-vida')}
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
