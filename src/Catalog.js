import React from 'react'
import "./Catalog.css"
import {Link} from "react-router-dom"
function Catalog(props) {
  return (
      <div class="shoe col-4 ">
          <Link to={{pathname: `/CatalogMain/${props.id}/${props.name}`}} >
            <div class="box">
                <div class="image">
                    <img src={props.image}  alt =""/>
                </div>
                    <div class="p_info">
                        <div class="brand_star">
                            <div class="b_name">
                                <h3 class="brand">{props.name}</h3>
                            </div>
                        <div class="rating">
                            <div><img src={props.star} alt="star" /></div>
                            <div class="random_rating">{props.rating}</div>
                        </div>
                    </div>
                    <h2 class="price">₹<div class="price_tag">{props.price}</div></h2>
                    <small>Delivery by: <div class="delivery">{props.delivery}</div></small>
                 </div>
             </div>
            </Link>
        </div>
  )
}

export default Catalog