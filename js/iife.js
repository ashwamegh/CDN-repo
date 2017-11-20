(function(){
  console.log("I am loaded again");
    const fileref = document.createElement('script');
  
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', "http://localhost:3000/api/v1/widgetgenerator");
    
    if (typeof fileref !== 'undefined') {
      document.getElementsByTagName('head')[0].appendChild(fileref);
    }

})();