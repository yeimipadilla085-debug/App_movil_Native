import { StyleSheet, Text, View } from 'react-native';
import { colores, radio } from '../constants/tema';

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

const TarjetaEstudio = ({ titulo, institucion, anio, enCurso }: Props) => {
  return (
    // Estilo condicional: cambia el color si el estudio está en curso
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <Text style={estilos.titulo}>{titulo}</Text>

      {/* Insignia: cápsula morada con texto blanco */}
      {enCurso && (
        <View style={estilos.insignia}>
          <Text style={estilos.insigniaTexto}>En Curso</Text>
        </View>
      )}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
};

export default TarjetaEstudio;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: radio.tarjeta,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: { backgroundColor: colores.tarjeta, borderColor: colores.borde },
  enCurso: { backgroundColor: colores.enCursoFondo, borderColor: colores.enCurso },
  titulo: { fontSize: 17, fontWeight: '700', color: colores.texto },
  insignia: {
    alignSelf: 'flex-start',
    backgroundColor: colores.enCurso,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginTop: 6,
  },
  insigniaTexto: { color: '#FFFFFF', fontWeight: '700', fontSize: 12 },
  subtitulo: { fontSize: 14, color: colores.texto, marginTop: 8 },
  anio: { fontSize: 12, color: colores.textoSuave, marginTop: 2 },
});
