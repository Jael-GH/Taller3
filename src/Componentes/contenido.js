//import React, {Componentes } from "react";
import image from './avatar.jpg';

export default function Contenido(){

  return(
  <view>
    <img src= {image} ></img>
    <p id="principal">
    Hola, Actualmente estoy cursando mi tercer año en ingenieria en ciencias de la computación.
   </p>

        <h3 id = "titulo">Skill en programacion</h3>
    <table id = "tabla1">
       <tr>
            <td> CSharp </td>
            <td> HTML </td>
            <td> CSS </td>
            <td> JavaScript </td>
         </tr>
         <tr>
            <td> Desarrollo de aplicaciones de escritorio </td>
            <td> Creacion de paginas web </td>
            <td> Generacion de estilos para paginas web </td>
            <td> Desarrollo de funciones basicas </td>
         </tr>
         <tr>
            <td> 50% </td>
            <td> 30% </td>
            <td> 20% </td>
            <td> 10% </td>
         </tr>
       
    </table>
  </view>
   
  );
}
