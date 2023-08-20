
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "programacion",
      foto: "https://github.com/falexander94.png",
      nombre: "Fredy Cuastumal",
      puesto: "Estudiante",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/falexander94.png",
      nombre: "Fredy Cuastumal",
      puesto: "Estudiante",
      fav: true
    },
  {   

    id: uuid(),
    equipo:"Data Science",
    foto:"https://github.com/harlandlohora.png",
    nombre:"harlandlohora",
    puesto:"Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo:"programacion",
    foto:"https://github.com/JeanmarieAluraLatam.png",
    nombre:"Jeanmarie",
    puesto:"Instructora" ,
    fav: true
  },
  {
    id: uuid(),
    equipo:"Front End",
    foto:"https://github.com/JoseDarioGonzalezCha.png",
    nombre:"Dario Gonzalez",
    puesto:"Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Innovacion y Gestion",
    foto:"https://github.com/genesysaluralatam.png",
    nombre:"Genesys Rondon",
    puesto:"Instructora" ,
    fav: false
  },
  {
    id: uuid(),
    equipo:"Innovacion y Gestion",
    foto:"https://github.com/christianpva.png ",
    nombre:"Christian Velasco",
    puesto:"Dev FullStack" ,
    fav: false
  },
])

const [equipos, actualizarEquipos] = useState (  [
  {
    id: uuid(),
    titulo:"programacion",
    colorPrimario: "#57c278",
    colorSecundario: "#D9F7E9",
  },
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#FDE7E2",
  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    id: uuid(),
    titulo:"Movil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    id: uuid(),
    titulo:"Innovacion y Gestion",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  },
    
  
])
  //Ternario --> condicion ? seMuestra : noseMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador=(id) => {

    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) =>{
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
    })

    actualizarEquipos(equiposActualizados)
  } 

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo,id: uuid()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
     if(colaborador.id === id) {
      colaborador.fav = !colaborador.fav
     }
     return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)

  }


  return (
    
    <div >
      <Header/>
      {/*mostrarFormulario === true ?  <Formulario /> : <div></div>*/ }
      {mostrarFormulario && <Formulario
       equipos={equipos.map((equipo) => equipo.titulo)}
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}
       />
       
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=> colaborador.equipo ===equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        )
      }

      <Footer/>
     
    </div>
  );
}

export default App;
