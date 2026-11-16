import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colores } from '../constants/tema';

type Props = {
  subtitulo: string;
  nombreIcono?: keyof typeof Ionicons.glyphMap;
};

const Encabezado = ({ subtitulo, nombreIcono = 'person' }: Props) => {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.anillo}>
        <View style={estilos.avatar}>
          <Ionicons name={nombreIcono} size={46} color={colores.acento} />
        </View>
      </View>
      <Text style={estilos.nombre}>Santiago Buitrago Goyeneche</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
};

export default Encabezado;

const estilos = StyleSheet.create({
  contenedor: { alignItems: 'center', paddingVertical: 24 },
  anillo: {
    padding: 4,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colores.acento,
    marginBottom: 14,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: colores.tarjeta,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nombre: { fontSize: 24, fontWeight: '700', color: colores.texto },
  subtitulo: { fontSize: 14, color: colores.acento, marginTop: 4, fontWeight: '600' },
});
