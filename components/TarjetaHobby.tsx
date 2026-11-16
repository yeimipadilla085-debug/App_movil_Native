import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colores, radio } from '../constants/tema';

type Props = {
  nombre: string;
  descripcion: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, descripcion, nombreIcono, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.tarjeta, pressed && estilos.presionada]}
    >
      <View style={estilos.icono}>
        <Ionicons name={nombreIcono} size={24} color={colores.acento} />
      </View>
      <View style={estilos.contenido}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
      <Ionicons name="information-circle-outline" size={20} color={colores.textoSuave} />
    </Pressable>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.tarjeta,
    borderRadius: radio.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 16,
    marginVertical: 8,
  },
  presionada: { opacity: 0.7 },
  icono: {
    width: 48,
    height: 48,
    borderRadius: radio.boton,
    backgroundColor: 'rgba(94, 234, 212, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  contenido: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: '700', color: colores.texto },
  descripcion: { fontSize: 13, color: colores.textoSuave, marginTop: 2 },
});