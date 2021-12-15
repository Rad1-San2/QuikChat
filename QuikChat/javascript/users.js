const searchBar = document.querySelector(".search input"),
searchIcon = document.querySelector(".search button");

searchIcon.onclick = ()=>{
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchIcon.classList.toggle("active");

}
