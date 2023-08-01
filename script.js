//your code here
document.addEventListener("DOMContentLoaded", () => {
    updateTotalPrice();

    const groceryTable = document.getElementById("groceryTable");
    const priceCells = groceryTable.querySelectorAll("[data-ns-test='itemPrice']");

    priceCells.forEach((cell) => {
        cell.addEventListener("input", updateTotalPrice);
    });
});

function updateTotalPrice() {
    const groceryTable = document.getElementById("groceryTable");
    const priceCells = groceryTable.querySelectorAll("[data-ns-test='itemPrice']");

    let totalPrice = 0;
    priceCells.forEach((cell) => {
        const price = parseFloat(cell.textContent);
        totalPrice += isNaN(price) ? 0 : price;
    });

    const grandTotalCell = document.querySelector("[data-ns-test='grandTotal']");
    grandTotalCell.textContent = totalPrice;
}
