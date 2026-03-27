const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(
 "#multiplication-operation"  
);

const createTable = (number, multiplicatorNumber) => {
   multiplicationTable.innerHTML = "";
   for (let i = 1; i <= multiplicatorNumber; i++) {
       const result = number * i;
       const p = document.createElement("p");
       p.textContent = `${number} x ${i} = ${result}`;
       multiplicationTable.appendChild(p);
   }
};

multiplicationForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const multiplicationNumber = +numberInput.value;
   const multiplicatorNumber = +multiplicationInput.value;
   if (!multiplicationNumber || !multiplicatorNumber) return;
   document.querySelector("#multiplication-title span").textContent = multiplicationNumber;
   createTable(multiplicationNumber, multiplicatorNumber);
});