(function () {
  scripts  =["https://checkout.razorpay.com/v1/checkout.js", "http://localhost:3000/api/v1/widgetgenerator"];

  scripts.forEach((scriptSrc) =>{
    if (document.querySelector('script[src='+scriptSrc+']')) {
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
  
})();