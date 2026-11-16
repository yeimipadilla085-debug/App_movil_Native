import { ScrollView, StyleSheet } from 'react-native';
import Encabezado from '../../components/Encabezado';
import TarjetaHobby from '../../components/TarjetaHobby';
import { colores } from '../../constants/tema';
import { mostrarAlerta } from '../../constants/alerta';

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
    nombre: 'Arte',
    descripcion: 'Obras de arte y dibujo',
    nombreIcono: 'brush-outline' as const,
    detalle: 'Me gusta dibujar y crear historias con mis dibujos. ',
  },
  {
    id: '3',
    nombre: 'Ciclismo',
    descripcion: 'Ciclo rutas',
    nombreIcono: 'bicycle-outline' as const,
    detalle: 'Recorro rutas de ciudad cada domingo con mi padre.',
  },
  {
    id: '4',
    nombre: 'Lectura',
    descripcion: 'Fantasía y ciencia ficción',
    nombreIcono: 'book-outline' as const,
    detalle: 'Leo sobre fantasía y novelas de ciencia ficción. Como Rezero y Alien',
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
          onPress={() => mostrarAlerta(h.nombre, h.detalle)}
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
