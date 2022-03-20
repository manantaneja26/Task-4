import React from 'react'
import { useParams } from "react-router-dom";
import Items from "./Items.json"
import im1 from "./image1.png"
import im2 from "./image2.png"
import im3 from "./image3.png"
import star from "./Star.png"
export const CatalogMain =() => {
    let { id } = useParams();
  let pic;
  if(id==1||id==4||id==7||id==10||id==13||id==16){
    pic=im1;
  }
  else if(id==2||id==5||id==8||id==11||id==14||id==17){
    pic=im2;
  }
  else if(id==3||id==6||id==9||id==12||id==15||id==18){
    pic=im3;
  }

  return(
    
      <div classNameName="container-fluid">
        <div className="row">
          <div className="col">
            <img class="image" src={pic} alt="" width={500} ></img>
          </div><br></br>
          <div className="col">
            <h2 className="row">{Items[id-1].name}</h2>
            <p className="row">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br></br>
            <h3 className="row">{Items[id-1].price}</h3><br></br>
            <h5 className="row">{Items[id-1].delivery}</h5>
            <h5 className="row"><img class="star" src={star} alt="star" width={20}></img>{Items[id-1].rating}</h5><br></br>
            <h4 className="row">Qty</h4><br></br>
            <div className="row">
              <button className="col" type="button" name="button">-</button>
              <input className="col"type="text" name="add" value=""></input>
              <button className="col" type="button" name="button">+</button>
            </div>
            <button className="row" type="submit" name="button">Add to Cart</button>
          </div>
        </div>
      </div>
  )
  }