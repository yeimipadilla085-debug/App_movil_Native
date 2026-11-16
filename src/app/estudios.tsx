import { ScrollView, StyleSheet } from 'react-native';
import Encabezado from '../../components/Encabezado';
import TarjetaEstudio from '../../components/TarjetaEstudio';
import { colores } from '../../constants/tema';

const Estudios = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Estudios" nombreIcono="school" />

      <TarjetaEstudio
        titulo="Bachiller"
        institucion="Colegio Rodrigo Lara Bonilla"
        anio={2026}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Técnico en software"
        institucion="Colegio Rodrigo Lara Bonilla "
        anio={2026}
        enCurso={false}
      />
      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA"
        anio={2027}
        enCurso={true}
      />
    </ScrollView>
  );
};

export default Estudios;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  contenido: { paddingHorizontal: 16, paddingBottom: 32 },
});