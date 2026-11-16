import { ScrollView, StyleSheet } from 'react-native';
import Encabezado from '../../components/Encabezado';
import TarjetaExperiencia from '../../components/TarjetaExperiencia';
import { colores } from '../../constants/tema';

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Encabezado subtitulo="Experiencia laboral" nombreIcono="briefcase" />

      <TarjetaExperiencia
        cargo="Aprendiz Analisis y Desarollo de Software"
        empresa="SENA - Etapa lectiva"
        periodo="2026 - Actualidad"
        descripcion="Desarrollo de aplicaciones web con APIs , JS , Migracion de DB ."
      />
      <TarjetaExperiencia
        cargo="Soporte técnico"
        empresa="Tecnoservicios S.A.S."
        periodo="2023 - 2024"
        descripcion="Mantenimiento de equipos, instalación de software y atención a usuarios."
      />
      <TarjetaExperiencia
        cargo="Auxiliar de sistemas"
        empresa="Papelería Central"
        periodo="2021 - 2022"
        descripcion="Control de inventario en hojas de cálculo y apoyo en el punto de venta."
      />
    </ScrollView>
  );
};

export default Experiencia;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: colores.fondo },
  contenido: { paddingHorizontal: 16, paddingBottom: 32 },
});


