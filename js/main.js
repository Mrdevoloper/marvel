
 var change = movies.slice(0,40)

 var elList = document.querySelector("#wrapper-item1");
 
 
 
 for (let i = 0; i < change.length; i++) {
 
 
 
   var newLi = document.createElement("div");
   var newCard = document.createElement("div")
   var newBodywrapper = document.createElement("div")
   var newBody = document.createElement("div")
   var newH5 = document.createElement("h4");
   var newImg = document.createElement("img");
   var newsH3 = document.createElement("p")
   var newh3 = document.createElement("p")
   var newBody = document.createElement("div")
   var newlink1 = document.createElement("a")
   var newlink2 = document.createElement("button")
   var newlink3 = document.createElement("button")
 

   newBodywrapper.setAttribute("class", "")
   newBody.setAttribute("class", "card-body d-flex")
   newLi.setAttribute("class", "card   m-3  ")
   newLi.setAttribute("style", "width: 380px ")
   newCard.setAttribute("class", "card-body")
   newH5.setAttribute("class", "text-left text-danger   p-3  ")
   newImg.setAttribute("style", "height: 220px;, width: 130px;");
   newsH3.setAttribute("class", "fs-5 text-left  p-3")
   newh3.setAttribute("class", "fs-5 text-left p-3" )
   newlink1.setAttribute("class", "btn btn-outline-primary me-2 ")
   newlink1.setAttribute("href" , `https://www.youtube.com/watch?v=${movies[i].ytid}`);
   newlink2.setAttribute("class", "btn btn-outline-info  me-2 ")
   newlink3.setAttribute("class", "btn btn-outline-success  me-2 ")



 
 
 
 
   newlink1.textContent="Watch tralier"
   newlink2.textContent="More info"
   newlink3.textContent="Bookmarks"
 
 
 
   newLi.appendChild(newImg);
   newImg.setAttribute("src" , `http://i3.ytimg.com/vi/${movies[i].ytid}/maxresdefault.jpg`);
   newH5.textContent = "  " + movies[i].Title;
   newLi.appendChild(newH5);
   newsH3.textContent = " Year |  " + movies[i].movie_year;
   newLi.appendChild(newsH3);
   newh3.textContent = " Rate | " + movies[i].imdb_rating;
   newLi.appendChild(newh3);
   newBody.appendChild(newBodywrapper)
   newLi.appendChild( newCard)
   newCard.appendChild(newlink1)
   newCard.appendChild(newlink2)
   newCard.appendChild(newlink3)
 

   

   elList.appendChild(newLi);
 
 }


