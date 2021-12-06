import React from 'react';
import style from './index.module.css';

import triangleLogo from './img/triangleLogo.png';
import etoile from './img/iconmonstr-star-3-240.png';
import json from './img/stays.json';


class App extends React.Component {

 

  componentDidMount() {

    var data = json;

  for (var i = 0; i < data.length; i++) {

    var location = document.getElementById('container');

    var mydiv = document.createElement('div');

    var mydiv2 = document.createElement('div');
    var myimg = document.createElement('img');

   var mydiv31 = document.createElement('div');
    var mydiv3 = document.createElement('div');
    var myh3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var mydiv32 = document.createElement('div');
    var myPara2 = document.createElement('h4');
    var myimg2 = document.createElement('img');
    var myh2 = document.createElement('h2');


    mydiv.setAttribute("class", style.mydiv);

    mydiv2.setAttribute("class", style.mydiv2);
    myimg.setAttribute("class", style.myimg);
    myimg2.setAttribute("class", style.myimg2);

    

    mydiv3.setAttribute("class", style.mydiv3);
    myh3.setAttribute("class", style.myh3);
    mydiv31.setAttribute("class", style.mydiv31);
    myPara1.setAttribute("class", style.myPara1);
    mydiv32.setAttribute("class", style.mydiv32);
    myPara2.setAttribute("class", style.myPara2);
    myh2.setAttribute("class", style.myh2);

    myimg.setAttribute('src', data[i].photo)

    


      if (data[i].superHost !== false) {
      
        if (data[i].beds == null) {
          myPara1.textContent = "[ Super Host ] " ;
          myh3.textContent = " " + data[i].type;
          
        }
  
        else {
          myPara1.textContent = "[ Super Host ] " ;
          myh3.textContent = "  " + data[i].type + " " + data[i].beds + " beds";

        }
        
      }
      
      else {

      if (data[i].beds == null) {
        myh3.textContent = " " + data[i].type;

      }

      else {
        myh3.textContent = " " + data[i].type + " " + data[i].beds + " beds";
      }
    }

    myimg2.setAttribute('src', etoile);
    myPara2.textContent = data[i].rating;
    myh2.textContent = data[i].title;


    mydiv2.appendChild(myimg);

    mydiv31.appendChild(myPara1);
    mydiv31.appendChild(myh3);
    mydiv3.appendChild(mydiv31);
    mydiv32.appendChild(myPara2);
    mydiv32.appendChild(myimg2);
    mydiv3.appendChild(mydiv32);

   
    
    mydiv.appendChild(mydiv2);
    mydiv.appendChild(mydiv3);
    mydiv.appendChild(myh2);

    location.appendChild(mydiv);

  }

  
  }

  
    
  

  render() {

   
  return (
    <div className="App">
      
        <div className={style.hdiv}>
          <img src={triangleLogo} className={style.himg} />
          <p className={style.hp}>Windbnb</p> 
        </div>
      
        
        
        <h1 className={style.bh1}>Stays in Finland</h1>


    <div id="container" className={style.container}>
          

    </div>
          

    </div>
  );
}}

export default App;
