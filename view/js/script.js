document.getElementById('submit').addEventListener("click", addContact);
document.getElementById('nameColumn').addEventListener("click", sortNames);
var numRows = 1;

function addContact() {
       var error = 0;

       //Check name validity
       var name = document.getElementById('name').value;
       if(name.length > 20) {
           error = 5;
       }

       if(!name.match(/^[A-Za-z\S]/)) {
           error = 1;
       }

       //Check phone number validity
       var mobile = document.getElementById('mobile').value;

       if(mobile.length != 10) {
           error = 2;
       }

       for(var j = 0; j < mobile.length; j++) {
           if(mobile.charAt(j) < '0' && mobile.charAt(j) > '9') {
               error = 3;
           }
       }   

       //Check email validity
       var email = document.getElementById('email').value;
       if(!document.getElementById('email').value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) || email.length >= 40) {
           error = 4;
       }

       if(error > 0 && document.getElementById('error').classList.contains('dn')) {//If there is an error and error div is hidden, show error div
           document.getElementById('contactsSummary').innerHTML = error;
           document.getElementById('error').classList.remove('dn');
       } else if(error == 0) { //If there is no error and error div is being shown, hide error div
           document.getElementById('error').classList.add('dn');
       }

       if(error == 0) {
           var table = document.getElementById('summaryTable');
           var row = table.insertRow(numRows + 1);
           numRows++;
           var col1 = row.insertCell(0);
           var col2 = row.insertCell(1);
           var col3 = row.insertCell(2);
           col1.innerHTML = name;
           col2.innerHTML = mobile;
           col3.innerHTML = email;
           if(numRows % 2 == 0) {
               row.style.backgroundColor = "#f2f2f2";
           }
       }
}

function sortNames() {
    var swap = true;
    var shouldSwap;
    var rows
          
    while (swap) {
      swap = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwap = false;
          
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
          
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwap = true;
          break;
        }
      }
        
      if (shouldSwap) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        swap = true;
      }
    }
}
