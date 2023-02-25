const myBalance = document.querySelector(".balance-number")
const gastosSemanais = document.querySelectorAll(".bar")
console.log(gastosSemanais)
myBalance.innerHTML = "$1000.00"
fetch("./data.json").then((response) => {
    response.json().then((data) => {
        spendingAMounts = data;
        spendingAMounts.map((day) => {
            console.log(day.amount)
        })
    });
});