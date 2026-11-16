import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colores, radio } from '../constants/tema';

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [estilos.boton, pressed && estilos.presionado]}
    >
      <View style={[estilos.chip, { backgroundColor: colorBoton + '26' }]}>
        <Ionicons name={nombreIcono} size={20} color={colorBoton} />
      </View>
      <Text style={estilos.texto}>{textoBoton}</Text>
      <Ionicons name="chevron-forward" size={18} color={colores.textoSuave} />
    </Pressable>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colores.fondo,
    borderWidth: 1,
    borderColor: colores.borde,
    borderRadius: radio.boton,
    padding: 10,
    marginBottom: 10,
  },
  presionado: { opacity: 0.7 },
  chip: {
    width: 38,
    height: 38,
    borderRadius: radio.chip,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  texto: { flex: 1, color: colores.texto, fontSize: 15, fontWeight: '600' },
});
