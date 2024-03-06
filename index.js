let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expensesBody = document.getElementById("expenses-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === "") {
    alert("Please select a category");
    return;
  }
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid number");
    return;
  }
  if (date === "") {
    alert("Please enter a date");
    return;
  }

  const expense = { category, amount, date };
  expenses.push(expense);
  totalAmount += amount;

  totalAmountCell.textContent = totalAmount;

  const newRow = expensesBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';

  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;
    expensesBody.removeChild(newRow);
  });

  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
});

// Loop through the initial expenses to populate the table
for (const expense of expenses) {
  totalAmount += expense.amount;
  totalAmountCell.textContent = totalAmount;

  const newRow = expensesBody.insertRow();
  const categoryCell = newRow.insertCell();
  const amountCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();

  const deleteBtn = document.createElement("button");

  deleteBtn.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);
    totalAmount -= expense.amount;
    totalAmountCell.textContent = totalAmount;
    expensesBody.removeChild(newRow);
  });

  categoryCell.textContent = expense.category;
  amountCell.textContent = expense.amount;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}

const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  darkModeBtn.innerHTML = isDarkMode
    ? `<span class="material-symbols-outlined">
        light_mode
    </span>`
    : `<span class="material-symbols-outlined">
        dark_mode
    </span>`;
});
