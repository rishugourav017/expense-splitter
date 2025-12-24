let total = 0;
let count = 0;

function addExpense() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);

  if (name === "" || amount === 0) {
    alert("Name aur amount likho");
    return;
  }

  let li = document.createElement("li");
  li.innerText = name + " : ₹" + amount;
  document.getElementById("list").appendChild(li);

  total += amount;
  count++;

  document.getElementById("total").innerText = total;
  document.getElementById("perPerson").innerText = (total / count).toFixed(2);

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}
