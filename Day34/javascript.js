const table1 = document.querySelector('table > tbody');
const table2 = document.querySelector('table > tbody');
var add = document.querySelector('#addButton');
var save = document.querySelector('#saveButton');
var number = 3;
console.log(table1)

var newtable = add.addEventListener('click', function (e) {
    number++
    console.log("e:", e);
    table1.innerHTML += `
        <tr>
          <td>${number}</td>
          <td><input type="text" id="nama" name="nama" value="Nama"/></td>
          <td><input type="text" id="alamat" name="alamat" value="Alamat"/></td>
        </tr>
    `
    return table1
})

save.addEventListener('click', function (e) {
    console.log(table2);
    var nama = document.querySelector('#nama').value;
    var alamat = document.querySelector('#alamat').value;
    console.log(nama);
    console.log(alamat);
    console.log(table1);
    table1.innerHTML = table2.innerHTML + ` 
    <tr>
        <td>${number}</td>
        <td>${nama}</td>
        <td>${alamat}</td>
    </tr>
    `
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}