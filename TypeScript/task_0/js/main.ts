interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ayse",
  lastName: "Aliyeva",
  age: 17,
  location: "Ganja"
};

const student2: Student = {
  firstName: "Leyla",
  lastName: "Huseynova",
  age: 18,
  location: "Baku"
};

const studentsList: Student[] = [student1, student2];

// Table yarat
const table = document.createElement("table");

// Header yarat
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// Student məlumatlarını əlavə et
studentsList.forEach(student => {
  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = student.firstName;
  const td2 = document.createElement("td");
  td2.textContent = student.location;

  row.appendChild(td1);
  row.appendChild(td2);
  table.appendChild(row);
});

// Table-i body-ə əlavə et
document.body.appendChild(table);
