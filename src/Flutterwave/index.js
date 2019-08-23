//import forge from 'node-forge';
//import request from 'request-promise-native';
//import md5 from 'md5';

const forge    = require('node-forge');
const request = require('request-promise');
const md5 = require('md5');

function getKey (seckey) {
  const keymd5 = md5(seckey)
  const keymd5last12 = keymd5.substr(-12)

  const seckeyadjusted = seckey.replace('FLWSECK-', '')
  const seckeyadjustedfirst12 = seckeyadjusted.substr(0, 12)

  return seckeyadjustedfirst12 + keymd5last12
}

function encrypt (key, text) {
  const cipher = forge.cipher.createCipher('3DES-ECB', forge.util.createBuffer(key))
  cipher.start({ iv: '' })
  cipher.update(forge.util.createBuffer(text, 'utf-8'))
  cipher.finish()
  const encrypted = cipher.output
  return (forge.util.encode64(encrypted.getBytes()))
}

//const data 		= req.body;
const body = {
  cardno: "5438898014560229",
  cvv: "890",
  expirymonth: "09",
  expiryyear: "19",
  currency: "NGN",
  pin: "3310",
  country: "NG",
  amount: "10",
  email: "desola.ade1@gmail.com",
  suggested_auth: "PIN",
  phonenumber: "0902620185",
  firstname: "temi",
  lastname: "desola",
  /*cardno: '5370100320088304',
  cvv: '562',
  expirymonth: '07',
  expiryyear: '21',
  currency: "NGN",
  //pin: data.pin,
  country: "NG",
  amount: '10',
  email: 'nerdyemmanuel@gmail.com',
  //phonenumber: '08033426880',
  //suggested_auth: "PIN",
  firstname: 'Emmanuel',
  lastname: 'Nwogbo',*/
  txRef: `${Math.floor(Math.random() * 90000) + 10000}-${Math.random().toString(36).substring(7)}`
};

const key = getKey('FLWSECK_TEST-6562a97cafdd4de6c2f08cfc88897f8c-X');
const mainData = JSON.stringify(body);
const encryptData = encrypt(key, mainData);

const options = {
  method: 'POST',
  url: 'https://api.ravepay.co/flwv3-pug/getpaidx/api/charge',
  form: {
      PBFPubKey: 'FLWPUBK_TEST-5dd510a9a4374818c7bec122729482fb-X',
      client: encryptData,
      alg: '3DES-24',
      headers: {
        'content-type': 'application/json'
      }
  },
  json: true,
  //resolveWithFullResponse: true
};

request(options).then(val => {
  console.log(val, 'it was an success')
}).catch(err => {
  console.log(err, 'it was a failure')
});
