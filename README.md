# Pecunia Node.js API

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

**Notice:** This module and API is in early development and may change in the future.

[Pecunia Official Website](https://pecuniaplatform.io/)

# Getting Started

Install the Pecunia NPM Package with:
```
npm i pecunia-api
```
Also, require the module in your Node.js application with:
```js
const pecunia = require("pecunia-api")
```

# Using the API

## Authentication

To authenticate with Pecunia, visit the [Pecunia API Page](https://pecuniaplatform.io/api-access) and generate an API key. The key will be sent via email, once you've obtained it, throw it into a credentials object like the following:

```js
// Pecunia Credentials Object, enter your Api_Key in the "key" pair
const creds = {
  key: "xxxxx"
}
```

## Supported Coins

An endpoint that gets an object containing the total Pecunia Listed coins, and an array of them.

```js
pecunia.supported(creds).then(coins => {
  if (!coins || coins === undefined || !coins.data[0]) return console.error("No coins found on Pecunia") // This would be a strange error 🤨
  console.log("Supported coins: " + coins.total) // coins.data[0... 1... 2... ect] would access data for each coin individually
})
```

## All Nodes

An endpoint that gets an array containing all nodes ran under the API key's account.

```js
// Credentials object first, hosting platform second
pecunia.nodes(creds, "99HOST").then(nodes => {
  if (!nodes || nodes === undefined || !nodes[0]) return console.error("No nodes found on Pecunia")
  console.log("Nodes found: " + nodes.length + "\n\nNode 1: \nID: " + nodes[0].id + "\nBlockchain: " + nodes[0].nodeId + "\nHosting Type: " + nodes[0].platform)
})
```

## Single Node

An endpoint that gets a node specified by it's "nodeId".

```js
// Credentials object first, hosting platform second, nodeId third for the specific node you want to view
pecunia.node(creds, "99HOST", "39ceda96-ed1d-4291-9fdf-879937616454").then(node => {
  if (!node || node === undefined) return console.error("No node found on Pecunia")
  console.log("ID: " + node.id + "\nBlockchain: " + node.nodeId + "\nHosting Type: " + node.platform)
})
```

Example Node.js files can be found in the `/examples` directory within the repository.
