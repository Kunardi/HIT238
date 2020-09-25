/*menu bar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*current date*/
document.querySelector("#date").valueAsDate = new Date();

/*modify date*/
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var d = new Date();
var n = d.getMonth();

/*button enquired*/
document.querySelector(".ToDoLists").addEventListener('submit', sendtask);

/*set a note*/
function sendtask(evt) {
  evt.preventDefault();
  var caption = document.getElementById('caption').value;
  var note = document.getElementById('note').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;

  /*checks*/
  var inputtodolist = {};
  var inputs = document.querySelectorAll('.ToDoLists input');
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type !== 'button' && inputs[i].type !=='submit')
      {
        inputtodolist[inputs[i].id] = inputs[i].value;
      };
  };

  /*store*/
  var storetodolist = JSON.stringify(inputtodolist);
  var totalkeys = localStorage.length
  console.log(storetodolist);

  /*checkout*/
  localStorage.setItem(totalkeys + 1, storetodolist);
  window.location.href = "../index.html";
};
