"use strict";


let students = [];
let studentArray = [];

let inputsList = document.getElementsByClassName("form-control");
let inputScore = document.getElementsByClassName("form-score");

let scoreList = document.querySelector("#scores");
let inputsEmail = document.querySelector("#student-email");
let inputsScore = document.querySelector("#student-score");
let studentList = document.getElementById("students");


/* Constructor objects */

function Student(name, surname, email, birthday) {
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
    this.Birthday = birthday;
    this.Score = [];
    this.AddScore = function(score) {
        this.Score.push(score);
    };

    this.GetAverageScore = function() {
        let average = 0;

        if(this.Score.length > 0) {
            for(let i = 0; i < this.Score.length; i++) {
                average += this.Score[i];
            }
            average = average / this.Score.length;
        }
        return average;
    };
    this.info = function() {
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Birthday + " " + this.Score;
    }
}

/* Add students' list */

function addStudent() {
    

    if(inputsList[0].value != "" && inputsList[1].value != "" && inputsList[2].value != "" && inputsList[3].value != "") {
        inputsValidation();
        reset();
        // averageScore()
    } else {
        alert("you cannot leave the inputs empty");
    }
}

/* Email and Birthday validation */

function inputsValidation() {
    let IsEmailValid = inputsList[2].value;
    let reEmail = /\S+@\S+\.\S+/g;

    let IsBirthdayValid = inputsList[3].value;
    let reBirthday = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if(reEmail.test(IsEmailValid) && reBirthday.test(IsBirthdayValid)){
        let s = new Student(inputsList[0].value, inputsList[1].value, inputsList[2].value, inputsList[3].value);
        students.push(s);
        showStudents()
        return  console.log(true);
      }
      else {
          return alert("add the following symbols to the email (/\S+@\S+\.\S+/) && add the following symbols to the birthday (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)");
      }
}

/* Students' show list at the table */

function showStudents() {
    let rows = "";

    for(let i = 0; i < students.length; i++) {
        rows += `<tr>
            <th scope = "row">${i+1}</th>
            <td id="${i+1}">${students[i].Name}</td>
            <td>${students[i].Surname}</td>
            <td>${students[i].Email}</td>
            <td>${students[i].Birthday}</td>
        </tr>`
    }
    
    document.getElementById("students").innerHTML = rows;
}

/* Reset function */

function reset() {
    for(let i = 0; i < inputsList.length; i++) {
        inputsList[i].value = "";
    }
}

/* Add students' score list */

function addScore() {
    let val = document.getElementById('student-email').value;
    let index = 0;
    for(let i = 0; i < students.length; i++){
        if(students[i].Email.toLowerCase() == val.toLowerCase()){
            students[i].AddScore(Number(inputsScore.value));
            index = i;

            let tr = document.createElement('tr');
            let th = document.createElement('th');
            
            th.setAttribute('scope','col');
            let th2 = document.createElement('th');
            th2.setAttribute('scope','col');
            
            let th3 = document.createElement('th');
            th3.setAttribute('scope','col');
        
            th2.innerHTML = students[i].Email;
            th3.innerHTML = students[i].Score;
            th.innerHTML = ++i;
            tr.appendChild(th);
            tr.appendChild(th2);
            tr.appendChild(th3);
            scoreList.appendChild(tr);
        }
    }
}
