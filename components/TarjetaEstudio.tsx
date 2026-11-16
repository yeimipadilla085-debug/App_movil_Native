import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colores, radio } from '../constants/tema';

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <View style={[estilos.icono, enCurso && estilos.iconoEnCurso]}>
        <Ionicons
          name={enCurso ? 'time-outline' : 'checkmark-circle-outline'}
          size={22}
          color={enCurso ? '#FFFFFF' : colores.acento}
        />
      </View>

      <View style={estilos.contenido}>
        <View style={estilos.fila}>
          <Text style={estilos.titulo}>{titulo}</Text>
          {enCurso && (
            <View style={estilos.insignia}>
              <Text style={estilos.insigniaTexto}>En Curso</Text>
            </View>
          )}
        </View>
        <Text style={estilos.subtitulo}>{institucion}</Text>
        <Text style={estilos.anio}>{anio}</Text>
      </View>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: radio.tarjeta,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: { backgroundColor: colores.tarjeta, borderColor: colores.borde },
  enCurso: {
    backgroundColor: colores.enCursoFondo,
    borderColor: colores.enCurso,
    shadowColor: colores.enCurso,
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  icono: {
    width: 42,
    height: 42,
    borderRadius: radio.chip,
    backgroundColor: 'rgba(94, 234, 212, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconoEnCurso: { backgroundColor: colores.enCurso },
  contenido: { flex: 1 },
  fila: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  titulo: { flex: 1, fontSize: 16, fontWeight: '700', color: colores.texto, marginRight: 8 },
  insignia: {
    backgroundColor: colores.enCurso,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  insigniaTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 11 },
  subtitulo: { fontSize: 14, color: colores.texto, marginTop: 6 },
  anio: { fontSize: 12, color: colores.textoSuave, marginTop: 2 },
});