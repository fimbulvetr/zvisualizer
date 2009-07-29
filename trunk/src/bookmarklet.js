function _zvizBookmarklet() {  
  var host = "169.254.233.41"; //"localhost";
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.id = "zvizScript";
  script.type="text/javascript";
  script.src="http://" + host + "/zViz/dist/zviz.dist.js?t=" + (new Date()).getTime() ;
  var done = false;
  script.onload = script.onreadystatechange = function(){
    if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
      script.onload = script.onreadystatechange = null;
    }
  };
  script.onerror = function() {
    alert("problem loading!");
  };
  head.appendChild(script);
}

function _toBookmarklet(fn) {
    return "javascript:(" + fn.toString().replace(/\n/g, "").replace(/^(function)([^\(]*)\(/, "$1(") + ")()";
}

function generate() {
	var s = _toBookmarklet(_zvizBookmarklet);
	document.getElementById("bookmarklet").href=s;
}
