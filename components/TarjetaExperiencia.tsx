import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colores, radio } from '../constants/tema';

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({ cargo, empresa, periodo, descripcion }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <View style={estilos.icono}>
        <Ionicons name="briefcase" size={20} color={colores.acento} />
      </View>
      <View style={estilos.contenido}>
        <Text style={estilos.cargo}>{cargo}</Text>
        <Text style={estilos.empresa}>{empresa}</Text>
        <Text style={estilos.periodo}>{periodo}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    backgroundColor: colores.tarjeta,
    borderRadius: radio.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: 16,
    marginVertical: 8,
  },
  icono: {
    width: 40,
    height: 40,
    borderRadius: radio.chip,
    backgroundColor: 'rgba(94, 234, 212, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contenido: { flex: 1 },
  cargo: { fontSize: 16, fontWeight: '700', color: colores.texto },
  empresa: { fontSize: 14, color: colores.acento, marginTop: 2, fontWeight: '600' },
  periodo: { fontSize: 12, color: colores.textoSuave, marginTop: 2 },
  descripcion: { fontSize: 14, lineHeight: 20, color: colores.textoSuave, marginTop: 8 },
});
