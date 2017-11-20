(function () {
  alert("I am loaded again");
  if (document.querySelector('script[src="http://localhost:3000/api/v1/widgetgenerator"]')) {
    alert("The script was already loaded");
  }
  else {
    const fileref = document.createElement('script');

    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', "http://localhost:3000/api/v1/widgetgenerator");

    if (typeof fileref !== 'undefined') {
      document.getElementsByTagName('head')[0].appendChild(fileref);
    }
  }
})();