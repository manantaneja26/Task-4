import React from 'react';
import "./Header.css";

function header() {
  return (
    <nav id="main_nav">
    <div class="container">
        <img src="./images/amazon.png"  />
    </div>
    <div class="container">
        <ul class="nav_menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#products">Products</a></li>
        </ul>
    </div>

    {/* Hamburger  */}
    <div class="ham">
        <div>
            <a href="#" onclick="pop()">
                <svg width="50" height="35">
                    <path d="M0,5 50,5" stroke="white" stroke-width="5" />
                    <path d="M0,18 50,18" stroke="white" stroke-width="5" />
                    <path d="M0,32 50,32" stroke="white" stroke-width="5" />
                </svg>
            </a>
        </div>
    </div>

    <div id="ham_nav" class="ham_item">
        <button type="button" id="btn" onclick="close_nav()">&times</button>
        <ul class="side_nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#products">Products</a></li>
        </ul>
    </div>

</nav>
  )
}

export default header