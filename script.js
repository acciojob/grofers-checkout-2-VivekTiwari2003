function calculateTotal() {
    const groceryList = document.getElementById('groceryList');
    const priceCells = groceryList.querySelectorAll('[data-ns-test="prices"]');
    let total = 0;

    // Calculate the total price by summing up individual prices
    priceCells.forEach(cell => {
      total += parseInt(cell.textContent);
    });

    // Create a new row for the total price
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.setAttribute('colspan', '2');
    newCell.textContent = `Total Price: ${total}`;
    newRow.appendChild(newCell);

    // Add the total row to the table
    groceryList.appendChild(newRow);
  }

  // Call the calculateTotal function to display the total price initially
  calculateTotal()