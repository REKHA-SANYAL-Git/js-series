const Name = "Rekha";

let Surname = "Sanyal";

var Address = "Sodepur";

OfficeAddress = "Barrackpore"; // It's possible but not a good practice

let Email;

var Age;

// Name = "Sanyal"; //Not allowed

console.table([Name, Surname, Address, OfficeAddress, Email]);
console.table([Name, Surname, Address, OfficeAddress, Age]);
/*
 Prefer Not to Use Var because of issue in block scope and functional scope
 */

Father_Name = "KS";

Mother_Name = "SS";

console.log(Father_Name);
console.log(Mother_Name);

// let Father_Name; // we cannot declare let after define

var Mother_Name;

let m = 1;
var n = 1;

console.table([x, y]);

function varscope() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

function letscope() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

varscope();
letscope();
