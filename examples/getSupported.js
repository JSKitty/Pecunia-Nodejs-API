const pecunia = require('pecunia-api')

// Pecunia Credentials Object, enter your Api_Key in the "key" pair
const creds = {
  key: "xxxxx"
}

// Credentials object is the only required arguement
pecunia.supported(creds).then(coins => {
  if (!coins || coins === undefined || !coins.data[0]) return console.error("No coins found on Pecunia") // This would be a strange error 🤨
  console.log("Supported coins: " + coins.total) // coins.data[0... 1... 2... ect] would access data for each coin individually
})
