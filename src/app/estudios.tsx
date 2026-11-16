import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Encabezado from '../../components/Encabezado';
import TarjetaEstudio from '../../components/TarjetaEstudio';
import { colores, radio } from '../../constants/tema';

const estudios = [
  {
    id: '1',
    titulo: 'Bachiller',
    institucion: 'Colegio Rodrigo Lara Bonilla',
    anio: 2026,
    enCurso: false,
  },
  {
    id: '2',
    titulo: 'Técnico en software',
    institucion: 'Colegio Rodrigo Lara Bonilla',
    anio: 2026,
    enCurso: false,
  },
  {
    id: '3',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    institucion: 'SENA',
    anio: 2027,
    enCurso: true,
  },
];

const Estudios = () => {
  const completados = estudios.filter((e) => !e.enCurso).length;
  const enCurso = estudios.filter((e) => e.enCurso).length;

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Formación académica" nombreIcono="school" />

      <View style={estilos.resumen}>
        <View style={estilos.dato}>
          <Text style={estilos.numero}>{completados}</Text>
          <Text style={estilos.etiqueta}>Completados</Text>
        </View>
        <View style={estilos.separador} />
        <View style={estilos.dato}>
          <Text style={[estilos.numero, { color: colores.enCurso }]}>{enCurso}</Text>
          <Text style={estilos.etiqueta}>En curso</Text>
        </View>
      </View>

      {estudios.map((e) => (
        <TarjetaEstudio
          key={e.id}
          titulo={e.titulo}
          institucion={e.institucion}
          anio={e.anio}
          enCurso={e.enCurso}
        />
      ))}
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  contenido: { paddingHorizontal: 16, paddingBottom: 32 },
  resumen: {
    flexDirection: 'row',
    backgroundColor: colores.tarjeta,
    borderRadius: radio.tarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
    paddingVertical: 14,
    marginBottom: 12,
  },
  dato: { flex: 1, alignItems: 'center' },
  separador: { width: 1, backgroundColor: colores.borde },
  numero: { fontSize: 24, fontWeight: '800', color: colores.acento },
  etiqueta: { fontSize: 12, color: colores.textoSuave, marginTop: 2 },
});