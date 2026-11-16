import { Alert, ScrollView, StyleSheet } from 'react-native';
import Encabezado from '../../components/Encabezado';
import TarjetaHobby from '../../components/TarjetaHobby';
import { colores } from '../../constants/tema';

const hobbies = [
  {
    id: '1',
    nombre: 'Videojuegos',
    descripcion: 'Estrategia y aventura',
    nombreIcono: 'game-controller-outline' as const,
    detalle: 'Juego desde hace 8 años. Me gustan los juegos como Zelda , Sonic y Darksolus Entre muchos mas',
  },
  {
    id: '2',
    nombre: 'Música',
    descripcion: 'Rock Indie y Electronica',
    nombreIcono: 'musical-notes-outline' as const,
    detalle: 'Toco guitarra los fines de semana y estoy aprendiendo a producir música digital.',
  },
  {
    id: '3',
    nombre: 'Ciclismo',
    descripcion: 'Rutas de montaña',
    nombreIcono: 'bicycle-outline' as const,
    detalle: 'Recorro rutas de montaña cada domingo con un grupo de amigos.',
  },
  {
    id: '4',
    nombre: 'Lectura',
    descripcion: 'Tecnología y ciencia ficción',
    nombreIcono: 'book-outline' as const,
    detalle: 'Leo sobre tecnología, programación y novelas de ciencia ficción.',
  },
];

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Intereses" nombreIcono="heart" />

      {hobbies.map((h) => (
        <TarjetaHobby
          key={h.id}
          nombre={h.nombre}
          descripcion={h.descripcion}
          nombreIcono={h.nombreIcono}
          onPress={() => Alert.alert(h.nombre, h.detalle)}
        />
      ))}
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  contenido: { paddingHorizontal: 16, paddingBottom: 32 },
});
