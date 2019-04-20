const pecunia = require('pecunia-api')

// Pecunia Credentials Object, enter your Api_Key in the "key" pair
const creds = {
  key: "xxxxx"
}

// Credentials object first, hosting platform second, nodeId third for the specific node you want to view
pecunia.node(creds, "99HOST", "39ceda96-ed1d-4291-9fdf-879937616454").then(node => {
  if (!node || node === undefined) return console.error("No node found on Pecunia")
  console.log("ID: " + node.id + "\nBlockchain: " + node.nodeId + "\nHosting Type: " + node.platform)
})
