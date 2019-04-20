const req = require('requestify')
const basePublicUrl = 'https://pecuniaplatform.io/apiv2/'

exports.supported = async function (creds) {
  if (!creds || !creds.key) throw 'API Authorization key is required for this endpoint'
  try {
    var result = await req.request(basePublicUrl + 'getlist', {
      method: 'GET',
      headers: {
        'Authorization': 'Api-Key ' + creds.key
      }
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.nodes = async function (creds, platform) {
  if (!creds || !creds.key) throw 'API Authorization key is required for this endpoint'
  if (!platform || platform && platform.toLowerCase() !== 'pecunia' && platform && platform.toLowerCase() !== '99host') throw 'Platform string should be specified, "pecunia" or "99HOST"'
  try {
    var result = await req.request(basePublicUrl + 'nodesdata', {
      method: 'POST',
      headers: {
        'Authorization': 'Api-Key ' + creds.key
      },
      body: {
        platform: platform
      },
      dataType: 'json'
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.node = async function (creds, platform, nodeID) {
  if (!creds || !creds.key) throw 'API Authorization key is required for this endpoint'
  if (!nodeID) throw 'A Node ID is required for this endpoint'
  if (!platform || platform && platform.toLowerCase() !== 'pecunia' && platform && platform.toLowerCase() !== '99host') throw 'Platform string should be specified, "pecunia" or "99HOST"'
  try {
    var result = await req.request(basePublicUrl + 'nodes/' + nodeID, {
      method: 'POST',
      headers: {
        'Authorization': 'Api-Key ' + creds.key
      },
      body: {
        platform: platform
      },
      dataType: 'json'
    })
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.blockdrift = async function () {
  try {
    var result = await req.get(basePublicUrl + 'getblockdrift')
    result = JSON.parse(result.body)
    if (!result || result && !result[0]) throw 'API Result doesn\'t seem right, Pecunia may be having problems'
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.getdb = async function () {
  try {
    var result = await req.get(basePublicUrl + 'getdb')
    result = JSON.parse(result.body)
    if (!result || result && !result[0]) throw 'API Result doesn\'t seem right, Pecunia may be having problems'
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}
exports.mnstcount = async function () {
  try {
    var result = await req.get(basePublicUrl + 'mnstcount')
    result = JSON.parse(result.body)
    if (!result || result && !result.results) throw 'API Result doesn\'t seem right, Pecunia may be having problems'
    return result.results
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.getblock = async function (height) {
  if (!height || height && Number(height) < 0 || height === null || height === undefined) throw "PecuniaAPI: Missing or incorrect integer 'height'"
  try {
    var result = await req.get(basePublicUrl + 'getblock?height=' + height)
    if (result.body === null || result.body === "null") throw "PecuniaAPI: Block not found, invalid blockheight?"
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}

exports.address = async function (addr) {
  if (!addr || addr && addr.length < 34 || addr === null || addr === undefined) throw "PecuniaAPI: Missing or incorrect string 'address'"
  try {
    var result = await req.get(basePublicUrl + 'tango?address=' + addr)
    if (result.body === null || result.body === "null") throw "PecuniaAPI: Address not found, invalid address?"
    result = JSON.parse(result.body)
    return result
  } catch (err) {
    if (err.body) {
      console.warn('PecuniaAPI Error caught: (' + err.body + ')')
    } else {
      console.warn('PecuniaAPI Error caught: (' + err + ')')
    }
  }
}
