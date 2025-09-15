//Task 1
let orders = [
  { customer: "Ali", items: ["Coffee", "Cake"], total: 100 },
  { customer: "Abdullah", items: ["Tea"], total: 35 },
  { customer: "Omar", items: ["Coffee", "Sandwich"], total: 150 },
  { customer: "Ahmed", items: ["Juice", "Cake"], total: 80 },
];

let customersUpper = orders.map(order => order.customer.toUpperCase());
console.log(customersUpper);


let above50 = orders.filter(order => order.total > 50);
console.log(above50);

let totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
console.log(totalRevenue); 


function getOrdersByCustomer(name) {
  let order = orders.find(order => order.customer === name);
  return order ? order.items : "not found";
}
console.log(getOrdersByCustomer("Ali")); 

/////////////////////////////    Task 2    //////////////////////////////
const students = [
  { name: "Ali", grades: [80, 90, 70] },
  { name: "Mona", grades: [100, 95, 90] },
  { name: "Kareem", grades: [60, 75, 65] },
  { name: "Nour", grades: [85, 80, 88] },
];

let namesLower = students.map(students => students.name.toLowerCase());
console.log(namesLower);

let above80 = students.filter(students => {
  let avg = students.grades.reduce((sum, grade) => sum + grade, 0) / students.grades.length;
  return avg > 80;
});
console.log(above80);

let highestGrades = students.map(students => ({
  name: students.name,
  highestGrade: Math.max(...students.grades)
}));
console.log(highestGrades);

function getTotalGrades(name) {
  let student = students.find(students => students.name === name);
  return student ? student.grades.reduce((total, grade) => total + grde, 0) : 0;
}
console.log(getTotalGrades("Mona")); 

let totalAllGrades = students.reduce((sum, students) => {
  return sum + students.grades.reduce((totalAll, grade) => totalAll + grade, 0);
}, 0);
console.log(totalAllGrades);


