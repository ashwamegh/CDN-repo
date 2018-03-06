(function (apiKey) {
  scripts  =["https://checkout.razorpay.com/v1/checkout.js"];
  apiKey = String(apiKey);
  console.log(apiKey)
  scripts.forEach((scriptSrc) =>{
    if (document.querySelector('script[src=\"'+scriptSrc+'\"]')) {
      alert("The script was already loaded: "+scriptSrc);
    }
    else {
      const fileref = document.createElement('script');
      fileref.setAttribute('type', 'text/javascript');
      fileref.setAttribute('src', scriptSrc);
      if (typeof fileref !== 'undefined') {
        document.getElementsByTagName('head')[0].appendChild(fileref);
        alert("The script was added to head: "+scriptSrc);
      }
    }
  });
  const splittedApiKey = apiKey.split('-');
  const supplierid = splittedApiKey[splittedApiKey.length-2];
  const tripid = splittedApiKey[splittedApiKey.length-1];
  
  const buttonPosition = document.querySelector('script[src="http://localhost:3000/api/v1/widgetgenerator/'+apiKey+'"]');
  buttonPosition.outerHTML += '<span class="widget" data-tripid='+tripid+' data-supplierid='+supplierid+' data-apikey='+apiKey+' /><div id="book-button"></div>';
  
})(apiKey);