

let scriptVer="v1.8"
console.log("Script Version:",scriptVer)
let obj = "eyJlcnJvckNvZGUiOjAsInJlc3VsdCI6eyJzZXJ2aWNlIjp7InRpdGxlIjoiTWFwbGVTdG9yeSBNIEdsb2JhbCIsImJ1aWxkVmVyIjoiMiIsInBvbGljeUFwaVZlciI6MiwidGVybXNBcGlWZXIiOjIsInVzZVRQQSI6MCwidXNlR2JOcHNuIjowLCJ1c2VHYktycGMiOjAsInVzZUdiQXJlbmEiOjAsInVzZVRveUJhbkRpYWxvZyI6MCwiZ3JiUmF0aW5nIjoiIiwibmV0d29ya0NoZWNrU2FtcGxlUmF0ZSI6IjAiLCJua01lbWJlckFjY2Vzc0NvZGUiOiIwIiwidXNlSWRmYUNvbGxlY3Rpb24iOjAsInVzZUlkZmFEaWFsb2ciOjAsInVzZUlkZmFEaWFsb2dOVGVzdCI6MCwibG9naW5VSVR5cGUiOiIxIiwidXNlTnhvIjoiMCIsImNsaWVudElkIjoiTVRZM01EZzNOREF5IiwidXNlTWVtYmVyc2hpcHMiOlsxMDEsMTAzLDEwMiwxMTAsOTk5OV0sInVzZU1lbWJlcnNoaXBzSW5mbyI6eyJuZXhvbk5ldFNlY3JldEtleSI6IiIsIm5leG9uTmV0UHJvZHVjdElkIjoiIiwibmV4b25OZXRSZWRpcmVjdFVyaSI6IiJ9fSwiZW5kQmFubmVyIjp7fSwiYmFzZVBsYXRlIjpbeyJncm91cCI6MCwidGl0bGUiOiIifSx7Imdyb3VwIjoxLCJ0aXRsZSI6Iualk+S5i+iwt00iLCJpdGVtcyI6W3siY29kZSI6Im5vdGljZSIsImluZGV4IjoxMjI2MiwibWV0YSI6e30sInRpdGxlIjoi5YWs5ZGKIn0seyJjb2RlIjoiY2MiLCJpbmRleCI6MTIyNjMsIm1ldGEiOnt9LCJ0aXRsZSI6IuWuouacjeS4reW/gyJ9LHsiY29kZSI6ImZhcSIsImluZGV4IjoxMjI2NCwibWV0YSI6e30sInRpdGxlIjoi5bi46KaL5ZWP562UIn0seyJjb2RlIjoidXJsIiwiaW5kZXgiOjEyMjY1LCJtZXRhIjp7InVybCI6Imh0dHBzOi8vbS5uZXhvbi5jb20vZm9ydW0vYm9hcmQvNzIyLemBiuaIsuaMh+WNlyIsInF1ZXJ5IjoiIn0sInRpdGxlIjoi6YGK5oiy5LuL57S5In0seyJjb2RlIjoidGVybXMiLCJpbmRleCI6MTIyNjYsIm1ldGEiOnt9LCJ0aXRsZSI6IuS9v+eUqOaineasviJ9LHsiY29kZSI6ImFjY291bnQiLCJpbmRleCI6MTIyNjcsIm1ldGEiOnt9LCJ0aXRsZSI6IuaIkeeahOW4s+iZnyJ9LHsiY29kZSI6InB1c2hfc21zIiwiaW5kZXgiOjEyNjUwLCJtZXRhIjp7InB1c2hfbGFiZWwiOiLlhYHoqLHnmbzpgIHmjqjmkq0iLCJwaG9uZV9sYWJlbCI6IuWFgeioseeZvOmAgeaOqOaSrSIsImVtYWlsX2xhYmVsIjoi5YWB6Kix55m86YCB5o6o5pKtIn0sInRpdGxlIjoi5o6o5pKtICYg56S+576k5bmz5Y+wIn1dfSx7Imdyb3VwIjoyLCJ0aXRsZSI6IiJ9LHsiZ3JvdXAiOjMsInRpdGxlIjoiIn0seyJncm91cCI6NCwidGl0bGUiOiIifSx7Imdyb3VwIjo1LCJ0aXRsZSI6IiJ9LHsiZ3JvdXAiOjYsInRpdGxlIjoiIn0seyJncm91cCI6NywidGl0bGUiOiIifSx7Imdyb3VwIjo4LCJ0aXRsZSI6IiJ9LHsiZ3JvdXAiOjksInRpdGxlIjoiIn1dLCJjb3VudHJ5IjoiSEsiLCJpZGZhIjp7ImRpYWxvZyI6W10sImV4dGVybmFsSW1nVXJsIjoiIiwiaW1nVXJsIjoiIiwibGFuZ3VhZ2UiOiIifSwidGVybXNBZ3JlZSI6W3sidGVybUlEIjoyNywidGl0bGUiOiLnlKjmiLbmjojmrIroiIfkvb/nlKjmop3mrL4iLCJ0eXBlIjpbXSwib3B0aW9uYWwiOjAsImlzQWdyZWUiOjEsImlzVXBkYXRlIjowfSx7InRlcm1JRCI6MjksInRpdGxlIjoiTkVYT07pmrHnp4HmrIropo/nr4QiLCJ0eXBlIjpbXSwib3B0aW9uYWwiOjAsImlzQWdyZWUiOjEsImlzVXBkYXRlIjowfV0sImlzUHJpdmFjeUNvbnNpZ25lZCI6LTEsInVzZUxvY2FsUG9saWN5IjpbIjAiLCIwIl0sImVuYWJsZUxvZ2dpbmciOmZhbHNlLCJlbmFibGVQbGV4TG9nZ2luZyI6ZmFsc2UsImVuYWJsZUZvcmNlUGluZ0xvZ2dpbmciOmZhbHNlLCJ1c2VyQXJlbmFSZWdpb24iOi0xLCJvZmZlcndhbGwiOnsiaWQiOjAsInRpdGxlIjoiIn19LCJlcnJvclRleHQiOiLmiJDlip8iLCJlcnJvckRldGFpbCI6IiJ9"
const $base64 = new Base64();
let respBody = $base64.decode(obj)
console.log("Fake Body:",respBody)
console.log("Response body:",$response.body)

let headers = $response.headers
headers["errorCode"]="0"
console.log("Fake Header:",headers)
console.log("Response Header:",$response.headers)
$done({ body:respBody, headers:headers });

function Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }
    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }
    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }
    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
