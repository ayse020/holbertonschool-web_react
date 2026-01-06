// js/main.ts

interface Teacher {
  readonly firstName: string; // yalnız inicializasiya zamanı təyin olunur
  readonly lastName: string;  // yalnız inicializasiya zamanı təyin olunur
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // əlavə hər hansı property əlavə etməyə imkan verir
}

// Teacher obyektinin yaradılması
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // əlavə property
};

console.log(teacher3);
