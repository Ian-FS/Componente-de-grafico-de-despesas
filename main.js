const myBalance = document.querySelector(".balance-number")
const gastosSemanais = document.querySelectorAll(".bar")
const floatValue = document.querySelectorAll(".float-value")
console.log(gastosSemanais)
let total = 0
const totalMonth = document.querySelector(".total-spending")
let balance = 0




fetch("./data.json").then((response) => {
    response.json().then((data) => {
        spendingAMounts = data;
        spendingAMounts.map((spending, index) => {
            gastosSemanais[index].style.height = `${spending.amount}px`
            total += spending.amount
            totalMonth.innerHTML = `$${total.toFixed(2)}`
            balance = 1000 - total;
            myBalance.innerHTML = `$${balance.toFixed(2)}`
            floatValue[index].innerHTML = `$${spending.amount}`
        })
    });
});