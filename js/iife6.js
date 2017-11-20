(function (apiKey2) {
  scripts  =["https://checkout.razorpay.com/v1/checkout.js"];
  console.log(apiKey)
  console.log(apiKey2)
  scripts.forEach((scriptSrc) =>{
    if (document.querySelector('script[src=\"'+scriptSrc+'\"]')) {
      alert("The script was already loaded: "+scriptSrc);
    }
    else {
      // noOfCalls = 
      // btnMap = {
      //   0: 'aaaa',
      //   1: 'bbbb'
      // }

      const fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', scriptSrc);
      if (typeof fileref !== 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(fileref);
        alert("The script was added to head: "+scriptSrc);
      }
    }
  });
  
  
})(apiKey);