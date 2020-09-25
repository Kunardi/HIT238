/*menu bar*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*list all entries*/
function ToDoListslog(evt) {
  for(var i = localStorage.length; i >= 1; i--){

    /*Checks files*/
    var file = JSON.parse(localStorage.getItem(i));
    if(file != null && "caption" in file){
      var date = document.createElement('td');
      var caption = document.createElement('td');
      var note = document.createElement('td');
      var time = document.createElement('td');

      /*Writes the task*/
      var dates = new Date(file["date"])
      date.innerHTML = `${dates.getDate()}/${dates.getMonth()+1}/${dates.getFullYear()}`;
      caption.innerHTML = file["caption"];
      note.innerHTML = file["note"];
      time.innerHTML = file["time"];

      /*remove button*/
      var removeRow = document.createElement('td');
      var removeButton = document.createElement('button');
      removeButton.setAttribute('class', 'delbtn');
      removeButton.innerHTML = 'Remove';
      removeButton.dataset.key = i;
      removeButton.addEventListener('click', removetab, false);
      removeRow.appendChild(removeButton);

      /*create element*/
      var rowone = document.createElement('tr');
      var rowtwo = document.createElement('tr');
      var rowthree = document.createElement('tr');
      var rowfourth = document.createElement('tr');
      var rowfive = document.createElement('tr');

      /*create task in order*/
      var line = document.createElement('hr');

      /*categories*/
      var datetext = document.createElement('td');
      datetext.innerHTML = "Date:"
      var timetext = document.createElement('td');
      timetext.innerHTML = "Time:"
      var captiontext = document.createElement('td');
      captiontext.innerHTML = "Caption:"
      var notetext = document.createElement('td');
      notetext.innerHTML = "Note:"

      /*First row - caption*/
      rowone.appendChild(captiontext);
      rowone.appendChild(caption);

      /*Fourth row - Note*/
      rowfourth.appendChild(notetext);
      rowfourth.appendChild(note);
      rowfourth.appendChild(removeRow);

      /*Second row - Date*/
      rowtwo.appendChild(datetext);
      rowtwo.appendChild(date);

      /*Third row - Time*/
      rowthree.appendChild(timetext);
      rowthree.appendChild(time);

      /*insertion*/
      document
        .querySelector('.logtable')
        .appendChild(rowone);

      document
        .querySelector('.logtable')
        .appendChild(rowtwo);

      document
        .querySelector('.logtable')
        .appendChild(rowthree);

      document
        .querySelector('.logtable')
        .appendChild(rowfourth);

      document
        .querySelector('.logtable')
        .appendChild(rowfive);

      document
        .querySelector('.logtable')
        .appendChild(line);
    };
  };
};

/*add to the local storage*/
ToDoListslog();


/*remove function*/
function removetab(evt) {

  var key = parseInt(evt.target.dataset.key);
  var count = key;
/*alert*/
  if (confirm('Are you sure you want to remove this file from the database?')) {
/*remove*/
  for(var i=key; i < localStorage.length; i++) {
    if(localStorage.getItem(i+1) != null){
      var file = localStorage.getItem(i+1);
      localStorage.setItem(i,file);
    };
    count+=1;
  };
  localStorage.removeItem(count);
} else {
/* keep*/
}

  /*direct to*/
  window.location.href = "index.html";
  };


  //complete and incomplete function
  var complete = function(){
      this.innerHTML = 'Incomplete';
      this.removeEventListener('click',complete);
      this.addEventListener('click',incomplete);
  }

  var incomplete = function(){
      this.innerHTML = 'Complete';
      this.removeEventListener('click',incomplete);
      this.addEventListener('click',complete);
  }

  //function to chage the dom of the list of todo list
  var createItemDom = function(status){
      var listItem = document.createElement('td');
      var completeButton = document.createElement('button');
      var inCompleteButton = document.createElement('button');
  //block
      listItem.className = (status == 'incomplete');
  //appearing buttons
      completeButton.className = ('class', 'delbtn');
  //appearing the buttons label
      completeButton.innerHTML = (status == 'incomplete')?'Complete':'Incomplete';
  //condition
      if('incomplete'){
          completeButton.addEventListener('click',complete);
      }else{
          completeButton.addEventListener('click',incomplete);
      }

      listItem.appendChild(completeButton);

      return listItem;
  }



  window.onload = function(evt){

          for(var i=0; i<localStorage.length;i++){
              var file = localStorage[i].content;

              var count = createItemDom(file,localStorage[i].status);
              todoList.appendChild(count);

        }

  };
