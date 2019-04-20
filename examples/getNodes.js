const pecunia = require('pecunia-api')

// Pecunia Credentials Object, enter your Api_Key in the "key" pair
const creds = {
  key: "xxxxx"
}

// Credentials object first, hosting platform second
pecunia.nodes(creds, "99HOST").then(nodes => {
  if (!nodes || nodes === undefined || !nodes[0]) return console.error("No nodes found on Pecunia")
  console.log("Nodes found: \n\n" + nodes.length + "\n\nNode 1: \nID: " + nodes[0].id + "\nBlockchain: " + nodes[0].nodeId + "\nHosting Type: " + nodes[0].platform)
})
