// creating container
var container = document.createElement("div");
container.setAttribute("class","container");
for(let i = 0; i < 5; i++){
  var row = document.createElement("div");
  row.setAttribute("class","row");
  var col1 = document.createElement("div");
  col1.setAttribute("class","col-sm-4 col-md-4 col-lg-4 col-xl-4");
  var img1 = document.createElement("img");
  //col1.append(img1);
  var col2 = document.createElement("div");
  col2.setAttribute("class","col-sm-4 col-md-4 col-lg-4 col-xl-4");
  var img2= document.createElement("img");
  //col2.append(img2);
  var col3 = document.createElement("div");
  col3.setAttribute("class","col-sm-4 col-md-4 col-lg-4 col-xl-4");
  var img3 = document.createElement("img");
  //col3.append(img3);
  row.append(col1,col2,col3);
  container.append(row);
}
document.body.append(container);
//adding name and images in html
function addContent(){
    var col = document.querySelectorAll(".row > div");
    var img = document.querySelectorAll("img");
    fetch('https://609e2a6533eed80017957e03.mockapi.io/user',{method:'GET'})
    .then(data=>data.json())
    .then(data=>{
      var names = data.map(x=>x.name);
      var images = data.map(x=>x.avatar);
      for(let i in col){
          var img = document.createElement("img");
          img.src = images[i];
          var h4 = document.createElement("h4");
          var p = document.createElement("p");
          p.innerText = `"Lorem ipsum dolor sit amet."`;
          h4.innerHTML = `${names[i]}`;
          col[i].append(img,h4,p);
      }
    })
    .catch(e=>console.log(e))

}
addContent();