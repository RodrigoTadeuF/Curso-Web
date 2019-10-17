import React from 'react'
import ReactDOM from 'react-dom'

// componente personalizado PRECISA ter a primeira letra maiúscula, do contrário, 
// não será renderizado

// import Multi, { BoaNoite } from './componentes/Multiplos'

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>
// , document.getElementById('root'))

// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="Rodrigo" />
//     </div>
// , document.getElementById('root'))

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))