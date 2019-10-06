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

// Submit Button Animation

function subcheck() {


    // document.getElementById('contact').style.display="none";
    // document.getElementById('thank').style.display="block";

    // window.location.href = "#thank";
    // swal("Thank You!","For Submitting" "success");
    Swal.fire(
  'Thank You!',
  'Submitted successfully!',
  'success'
)

}
