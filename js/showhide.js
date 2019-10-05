function checkforblank() {

  if (document.getElementById('email').value =="") {
    document.getElementById('namediv').style.display="block";
    document.getElementById('msgdiv').style.display="block";
  }

  else {
    document.getElementById('namediv').style.display="none";
    document.getElementById('msgdiv').style.display="none";
  }

}
