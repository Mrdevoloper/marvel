var elForm = document.querySelector("#form")
var elNumber = document.querySelector("#formGroupExampleInput2")
var aLlResult = document.querySelector("#resultall")
var ElcategorySelect = document.querySelector("#category_select")
// console.log(Elcategory_select);




var change = movies.slice(0, 100)
var elList = document.querySelector("#wrapper-item1");


var resultt = change.sort((a, b) => String(a.Title).toLowerCase() > String(b.Title).toLowerCase() ? 1 : -1)

var slicedMovies = change.map(function (moviesItem) {

  return {
    title: moviesItem.Title.toString(),
    year: moviesItem.movie_year, 
    catagories: moviesItem.Categories,
    rating: moviesItem.imdb_rating,
    imgLink: `https://i.ytimg.com/vi/${moviesItem.ytid}/hqdefault.jpg`,
    youtubeLink: `https://www.youtube.com/watch?v=${moviesItem.ytid}`

  }
})

var rendreCatagories = function (movieList, renderSelect) {

  var resultCategoryList = []

  movieList.forEach((item) => {
    var splittedCategory = item.catagories.split("|");

    splittedCategory.forEach(CategoryItem => {

      // console.log( resultCategoryList.includes(CategoryItem));

      var isCategoryIncludes = resultCategoryList.includes(CategoryItem);
      // console.log(isCategoryIncludes);

      if (!isCategoryIncludes) {
        console.log(isCategoryIncludes);
        resultCategoryList.push(CategoryItem)
      }

    })
  })

  
  console.log(resultCategoryList.sort());



  var elOptionFragment = document.createDocumentFragment();
  resultCategoryList.forEach(function(Category){
    var elCategoryOption = document.createElement("option")
    elCategoryOption.setAttribute("class", " ");
    elCategoryOption.textContent = Category;
    elCategoryOption.value = Category;
    elOptionFragment.appendChild(elCategoryOption);
    
  });

  ElcategorySelect.appendChild(elOptionFragment)

  console.log(elOptionFragment);




}


rendreCatagories(slicedMovies, ElcategorySelect)



function renderMovies(movieArray, elList) {

  movieArray.forEach(movie => {


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
    newh3.setAttribute("class", "fs-5 text-left p-3")
    newlink1.setAttribute("class", "btn btn-outline-primary me-2 ")
    newlink1.setAttribute("href", movie.youtubeLink);
    newlink2.setAttribute("class", "btn btn-outline-info  me-2 ")
    newlink3.setAttribute("class", "btn btn-outline-success  me-2 ")







    newlink1.textContent = "Watch tralier"
    newlink2.textContent = "More info"
    newlink3.textContent = "Bookmarks"



    newLi.appendChild(newImg);
    newImg.setAttribute("src", movie.imgLink);
    newH5.textContent = "  " + movie.title;
    newLi.appendChild(newH5);
    newsH3.textContent = " Year |  " + movie.year;
    newLi.appendChild(newsH3);
    newh3.textContent = " Rate | " + movie.rating;
    newLi.appendChild(newh3);
    newBody.appendChild(newBodywrapper)
    newLi.appendChild(newCard)
    newCard.appendChild(newlink1)
    newCard.appendChild(newlink2)
    newCard.appendChild(newlink3)
    elList.appendChild(newLi);
  });;

  aLlResult.textContent = `Search ressult: ${movieArray.length}`

}

renderMovies(slicedMovies, elList);


var FindMovies = function (title, minrating, genre){
  return slicedMovies.filter((movie) => {
      var doesMatchCategory = genre === "all" || movie.catagories.includes(genre);

      return movie.title.match(title) &&  movie.rating >= minrating && doesMatchCategory;      
      
  });
}


//search=========================

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  var elSearch = document.querySelector("#search").value.trim()



  var searchmovies = []

  var searchKey = new RegExp(elSearch, "gi")

  var elRatingInput = elNumber.value.trim()

  var CategorySelect =  ElcategorySelect.value

  var resultList =  FindMovies( searchKey, elRatingInput,  CategorySelect )


  if (resultList.length > 0) {
    elList.innerHTML = null
    renderMovies(resultList, elList);
  }else{
    elList.innerHTML = "Not Found"
    aLlResult.textContent = `Search ressult:0`
  }

  searchmovies.push(resultList)

  





})