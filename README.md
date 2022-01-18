# crypto-price-tracker
 The site is published at https://calebjoshuapaul.github.io/crypto-price-tracker/
 
 This app uses cloudflare worker [crypto-price-tracker-worker](https://github.com/calebjoshuapaul/crypto-price-tracker-worker/) to get latest crypto prices and list them.

- The code starts by creating a table body element.
- It then creates an empty tr element and appends it to the table body.
- The code then iterates through each of the data objects in the response from fetch() .
- For each iteration, it creates a new tr object and sets its innerHTML property with some text that includes the symbol, name, price, and currency symbol for that particular cryptocurrency.

- The last line appends all of these tr elements to the table body.
–
- The code will create a table with the following properties:

- - The first row will have the symbol of the crypto in it.

- - The second row will have the name of the crypto in it.

- - The third row will have the price of that particular cryptocurrency in Indian Rupees (₹).
