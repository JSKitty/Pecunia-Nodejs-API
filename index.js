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
