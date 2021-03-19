import React from 'react';

const Car=({children,couleur,annee})=>{
    const couleurInfo=couleur ? (<p>Couleur:{couleur} </p>) : (<p>Couleur: Néant </p>);
    return(
    <div className="Cars" style={
        {backgroundColor:'pink',width:'400px',padding:'10px',margin:'5px auto'}}>
        <p>Marque:{children} </p>
        <p>Annee:{annee} </p>
        {couleurInfo}
    </div>);

}
export default Car;