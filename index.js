const tableBody = document.querySelector(".tableBody");

const data = fetch(
  "https://crypto-price-tracker-worker.calebjoshuapaul.workers.dev/"
)
  .then((res) => res.json)
  .then((data) => data);

for (let i = 0; i < data.length; i++) {
  tableBody.innerHTML = `
    <tr>
        <td>${data[i].symbol} - ${data[i].name}</td>
        <td>${data[i].price.toFixed(2)}</td>
    </tr>
    `;
}
