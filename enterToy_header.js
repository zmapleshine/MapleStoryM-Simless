const version = "v1.0"
console.log("Script Version:",version)
const respHeader = $response.headers
console.log("Response Header:",respHeader)
respHeader["errorCode"] = "0"
console.log("Fake Header:",respHeader)
$done({ respHeader })
