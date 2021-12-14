const tableBody = document.querySelector(".tableBody");

(async function () {
  const data = await fetch(
    "https://crypto-price-tracker-worker.calebjoshuapaul.workers.dev/"
  )
    .then((response) => response.json())
    .then((data) => data);

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${data[i].symbol} - ${data[i].name}</td>
        <td>₹${data[i].price.toFixed(2)}</td>
        `;
    tableBody.append(tr);
  }
})();
