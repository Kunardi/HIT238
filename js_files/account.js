/*menu bar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*name*/
const outName = document.getElementById("name");
outName.innerHTML= localStorage.getItem("Name");

const inpName = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const key= "Name";

document.getElementById("saveBtn").addEventListener("click", submit);

function submit(){
const value = inpName.value;

if (key && value){
  localStorage.setItem(key, value);
  location.reload();
}

};
