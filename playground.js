var contentful = require('contentful-management')
var client = contentful.createClient({
  accessToken: 'CFPAT-5wizWyIDAuLPIbTEJzSuDY1F6e4vBxSI_3XiFcusKy8' 
})
// This API call will request a space with the specified ID
client.getSpace('deblftxe5zjg')
  .then((space) => {
    console.log(space);
    space.getEnvironment('trug-apparels')
    .then(environment => {
      console.log(environment);
      environment.getEntry('75u4MfvxEki8a0UhnITLOv')
      .then(entry => {
        console.log(entry)
      })
    })
})
.catch(console.error)

// let's get a content type
/*space.getContentType('Product')
.then((contentType) => {
  // and now let's update its name
  console.log(contentType)
})*/


// remember you need md5 
// and also forge library
.  forge 		= require('node-forge');
const md5 			= require('md5');


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






	const data 		= req.body;
	const body = {
        cardno: data.cardno,
        cvv: data.cvv,
        expirymonth: data.expirymonth,
        expiryyear: data.expiryyear,
        currency: "NGN",
        pin: data.pin,
        country: "NG",
        amount: data.amount,
        email: data.email,
        phonenumber: data.phonenumber,
        suggested_auth: "PIN",
        firstname: data.firstname,
        lastname: data.lastname,
        txRef: `${Math.floor(Math.random() * 90000) + 10000}-${Math.random().toString(36).substring(7)}`
	};

	// salt key
  	const key = getKey(process.env.FLUTT_SECKEY);
  	const mainData = JSON.stringify(body);
  	const encryptData = encrypt(key, mainData);

  	// charge option
  	const options = {
	    method: 'POST',
	    url: 'https://api.ravepay.co/flwv3-pug/getpaidx/api/charge',
	    form: {
	      	PBFPubKey: process.env.FLUTT_PUBKEY,
	      	client: encryptData,
	      	alg: '3DES-24',
	      	headers: {
	        	'content-type': 'application/json'
	      	}
	    },
	    json: true,
	    resolveWithFullResponse: true
	};

// init the charge pass the option params
request(options).then(val => {
  console.log(val)
}).catch(err => {
  console.log(err)
});


