import React from 'react'
import "./Content.css"
import Items from "./Items.json"
import { useState } from 'react'
import Catalog from './Catalog'

export const Content = () => {

    const [useInput, setuseInput] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setuseInput(lowerCase);
    };
      const filteredData = Items.filter((el) => {
      //if no input the return the original
      if (useInput === '') {
        return el;
       }
      //return the item which contains the user input
      else {
        return el.name.toLowerCase().includes(useInput)
      }
  })
    return (
    <div class="centerdiv">
        <h1>
            Shoe Company Name
        </h1>
        <div class="subdiv">
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation u
            </h3>
            <form class="searchbar">
              <input id="searchph" type="text" onChange={inputHandler} placeholder="Search.." name="Search" />
              <button  type='submit' name='Submitbtn'>Submit</button>
            </form>
            <div className="album py-5 bg-light" id="albumm">
                <div className="container">
                    <div className="row second">
                    <div className="col-8"><h2 id="totalproduct">{filteredData.length} Products</h2></div>
                    <div className="container">
                        <div className="row list" id="repeat">
                        {filteredData.map((ele) => (
                            <Catalog
                            id={ele.id}
                            name={ele.name}
                            price={ele.price}
                            star={ele.star}
                            delivery={ele.delivery}
                            image={ele.image}
                            rating={ele.rating}
                            />
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content
