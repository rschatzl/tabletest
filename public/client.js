
//add form data from table to post req below
function myFunction() {
    
    myFunction1()

    
    //Created an AJAX(XHR) object to use
    const Http = new XMLHttpRequest()
    
    // where the request will post data
    const endpoint = 'http://localhost:3000/save'
    
    //create Javascript datastructure
    let payload = {}
    
    //get clientside user input and store in structure
    // payload.firstname = document.getElementById("fname").value

    let formData = document.getElementById("frm1")
    // for(let i = 0; i < formData.length; i++){
    //     console.log(formData[i].value)
    // }

    payload.fname = formData[0].value
    payload.lname = formData[1].value
    payload.age = formData[2].value


       
    
    //print to browser or client console
    console.log(payload)
    
    //turn javascript object to JSON
    let body = JSON.stringify(payload)

    // Step 1 : in http protocol (open handshake)
    Http.open("POST", endpoint);
    // Step 2 : in http protocol (open handshake)
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(body);

    
    
}







function myFunction1() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        

            text += "<td>" + x.elements[i].value + "</td>";
        
        
    }


    console.log(text)
    document.getElementById("dataDisplay").innerHTML += text;
}



// TODO #1  build a ClientSide XHR Ajax request from 
// my table form  to POST to an endpoint on my "app.js"
// web middleware and print the payload in the server terminal

// *** you want to keep the remaining client side logic ***