export * from './model';
export * from './schema';


// class Validator {

//   validate (instance, schema) {

//   }

// }

// // VRNE TIP FIELDA
// function getType (val) {
//   // null
//   // boolean
//   // object
//   // array
//   // number
//   // string
// }

// // PREVERI ALI STA 2 FIELDA ENAKA
// function fieldEquals (val1, val2) {
//   // both are null; or
//   // both are true; or
//   // both are false; or
//   // both are strings, and are the same codepoint-for-codepoint; or
//   // both are numbers, and have the same mathematical value; or
//   // both are arrays, and have an equal value item-for-item; or
//   // both are objects, and each property in one has exactly one property with a key equal to the other's, and that other property has an equal value.
// }

// // UREDI JSON KEYS PO ABECEDI
// function orderKeys () {

// }



// EXAMPLE
// {
//   "definitions": {},
//   "$schema": "http://json-schema.org/draft-06/schema#",
//   "$id": "http://example.com/example.json",
//   "$comment": "admin comment", // this should be ignored
//   "type": "object",
//   "properties": {
//     "checked": {
//       "$id": "/properties/checked",
//       "type": "boolean",
//       "title": "The Checked Schema",
//       "description": "An explanation about the purpose of this instance.",
//       "default": false,
//       "examples": [
//         false
//       ]
//     },
//   }




// REFERENCING SCHEMAS (9.2)
// {
//   "$id": "http://example.com/root.json",
//   "definitions": {
//       "A": { "$id": "#foo" },
//       "B": {
//           "$id": "other.json",
//           "definitions": {
//               "X": { "$id": "#bar" },
//               "Y": { "$id": "t/inner.json" }
//           }
//       },
//       "C": {
//           "$id": "urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f"
//       }
//   }
// }
//
// # (document root)
// http://example.com/root.json#
// #/definitions/A
// http://example.com/root.json#foo
// #/definitions/B
// http://example.com/other.json
// #/definitions/B/definitions/X
// http://example.com/other.json#bar
// #/definitions/B/definitions/Y
// http://example.com/t/inner.json
// #/definitions/C
// urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f



// HTTP RESPONSE LINKS
// Link: <http://example.com/my-hyper-schema#>; rel="describedby"
//
// HTTP SERVER BI MORAL VRNITI CACHE HEADER
// User-Agent: product-name/5.4.1 so-cool-json-schema/1.0.2 curl/7.43.0
//
// HTTP SERVER RESPONSE TYPE
// application/schema+json


