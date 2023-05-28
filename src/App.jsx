import { useState } from "react";

function App() {
  const [nombre,set_nombre]=useState("");

  const show_table=()=>{
    if(nombre==""){
      alert("Vous devez saisir un nombre");
      return;
    }

    let nombre_entier=parseInt(nombre);
    if(isNaN(nombre_entier)){
      alert("Vous devez saisir un nombre entier");
      return;
    }

    const output=document.querySelector("#output");

    let content="";
    for(let i=0;  i<=11; i++){
      content+=`${nombre_entier} x ${i} = ${nombre_entier*i}<br />`;
    }
    output.innerHTML=content;

  }
  return (
   <div style={{margin:"1rem"}}>
    <h2>Construction d'une table de multiplication</h2>
    <div>
      <input type="text"
      value={nombre}
      onChange={e=>set_nombre(e.target.value)}
      /><br /><br />
      <button onClick={show_table}>Afficher</button>
    </div>

    <div id="output"></div>
   </div>
  )
}

export default App
