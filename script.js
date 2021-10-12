var subjectObject = {
    "Fakultas Ekonomi & Bisnis": {
        "Manajemen":[],
        "Akuntasi":[],
    },
    "Fakultas Filsafat": {
        "Filsafat Agama Kristen":[],
    },
    "Fakultas Pendidikan": {
        "Pendidikan Agama":[],
        "Pendidikan Bahasa Ingris":[],
        "Ekonomi Koperasi":[],
        "Pendidikan Guru Luar Sekolah":[],
    },
    "Fakultas Pertanian":{
        "Agronomi":[],
    },
    "Fakultas Ilmu Komputer":{
        "Sistem Informasi":[],
        "Teknik Informatika":[],
    },
    "Fakultas Keperawatan":{
        "Profesi Ners":[],
    },

}
window.onload = function(){
  var selectedFakultas = document.getElementById("prodiFakultas");
  var selectedProdi = document.getElementById("addProdi");
  for (var x in subjectObject){

    selectedFakultas.options[selectedFakultas.options.length] = new Option(x);

  }
  selectedFakultas.onchange = function(){
    selectedProdi.length = 1;
    for (var y in subjectObject[this.value]){
      selectedProdi.options[selectedProdi.options.length] = new Option(y);
    }
  }
}

const addStudent = document.querySelector('#buttonAdd');
const newStudent = document.querySelector('#newStudent');
const listStudent = document.querySelector('#listStudent');
const searchStudent = document.querySelector('#searchName');
const facultySearch = document.querySelector('#searchStudent');
const searchProdi  = document.querySelector('#searchProdi');



addStudent.addEventListener('click',addStudentFunction);
newStudent.addEventListener('submit',newStudentFunction);
listStudent.addEventListener('click',removeStudentFunction);
searchStudent.addEventListener('keyup',searchNameFunction);
facultySearch.addEventListener('keyup',searchStudentFunction);
searchProdi.addEventListener('keyup',searchProdiFunction);

//hide and show student
function addStudentFunction(){
    var x = document.querySelector("#addStudent");

    if(x.style.display === "none") {
        x.style.display = "block";
    } else{
        x.style.display = "none";
    }
}

//add new student 
function newStudentFunction(event){
    event.preventDefault();

    const addStudent = document.querySelector('#addStudent');
    const studentName = document.querySelector('#studentName');
    const studentGender = document.querySelector('input[name="studentGender"]:checked').value;
    const prodiFakultas = document.querySelector('#prodiFakultas');
    const addProdi = document.querySelectorAll('#addProdi');
  
    const li = document.createElement('li');
    li.className = 'studentData';
    li.appendChild(document.createTextNode(`${addStudent.value}   ${studentName.value}  ${studentGender}  ${prodiFakultas.value} ${addProdi.value} `));

    const a = document.createElement('a');
    a.className = 'delete';
    a.setAttribute('href','#/');

    a.appendChild(document.createTextNode('Delete'));

    li.appendChild(a);

    const ul = document.querySelector('#listStudent');
    ul.appendChild(li);

    addStudent.value = '';
    studentName.value = '';
    prodiFakultas.value = '';
    addProdi.value ='';
}
//Remove Student (Function)
function removeStudentFunction(event){
    if(event.target.classList.contains("delete")){
      const li = event.target.parentElement;
      listStudent.removeChild(li);
    }
  }
//Search by Name (Function)
function searchNameFunction(event){
    const searchText = event.target.value.toLowerCase();
  
    const allStudent = [...document.querySelectorAll('li')];
  
    allStudent.forEach(addStudent => {
      let studentName = addStudent.firstChild.textContent;
  
      if(studentName.toLowerCase().indexOf(searchText) != -1){
        addStudent.style.display = 'block';
      } else{
        addStudent.style.display = 'none';
      }
    })
  }
//Search by Faculty (Function)
function searchStudentFunction(event){
    const searchText = event.target.value.toLowerCase();
  
    const allStudent = [...document.querySelectorAll('li')];
  
    allStudent.forEach(addStudent => {
      let studentName = addStudent.firstChild.textContent;
  
      if(studentName.toLowerCase().indexOf(searchText) != -1){
        addStudent.style.display = 'block';
      } else{
        addStudent.style.display = 'none';
      }
    })
  }
//Search by Prodi (Function)
function searchProdiFunction(event){
    const searchText = event.target.value.toLowerCase();
  
    const allStudent = [...document.querySelectorAll('li')];
  
    allStudent.forEach(addStudent => {
      let studentName = addStudent.firstChild.textContent;
  
      if(studentName.toLowerCase().indexOf(searchText) != -1){
        addStudent.style.display = 'block';
      } else{
        addStudent.style.display = 'none';
      }
    })
  }






















