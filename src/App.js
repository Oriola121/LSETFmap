import React from "react";
import './App.css'
import Oriola from "./image/oriola.jpg"
import Asmau from "./image/asmau.jpg"
import Wura from "./image/wura.jpg"
import Oyinda from "./image/oyinda.jpg"
import Timi from "./image/timi.jpg"
import Titi from "./image/titi.jpg"


function App (){

  const lsetf = [
    
    {
      picture: <img className="lsetf-img" src={Oriola}/>,
      name: "Oriola",
      age: 21,
      sex: "male",
      class: "100L",
      address: "5, Kekere Ekun Street, Orile-Iganmu, Lagos",
    },

    {
      picture: <img className="lsetf-img" src={Asmau}/>,
      name: "Asmau",
      age: 1,
      sex: "Female",
      class: "Creche",
      address: "56, Gaskiya Road, Badia-Ijora, Lagos",
    },

    {
      picture: <img className="lsetf-img" src={Wura}/>,
      name: "Wuraola",
      age: 19,
      sex: "Female",    
      class: "School Leaver",
      address: "Bk3 Fl2, Obalere Estate, Ogba, Lagos",
    },

    {
      picture: <img className="lsetf-img" src={Oyinda}/>,
      name: "Oyindamola",
      age: 20,
      sex: "Female",
      class: "School Leaver",
      address: "7, Gaskiya Road, Badia-Ijora, Lagos",
    },

    {
      picture: <img className="lsetf-img" src={Timi}/>,
      name: "Timininu",
      age: 26,
      sex: "Female",
      class: "300L",
      address: "2, 1st Avenue, G.R.A, Ikeja, Lagos",
    },

    {
      picture: <img className="lsetf-img" src={Titi}/>,
      name: "Titilayo",
      age: 17,
      sex: "Female",
      class: "SS3",
      address: "12, Shekoni Street, Coker, Lagos",
    },
  ]


  return(
    <div className="CardHolder">
      {lsetf.map((props)=>(
        <div className="Card">
          <div>{props.picture}</div>
          <div>Name:{props.name}</div>
          <div>Age:{props.age}</div>
          <div>Sex:{props.sex}</div>
          <div>Class:{props.class}</div>
          <div>Address:{props.address}</div>
        </div>
      ))}
    </div>
  )
}

export default App