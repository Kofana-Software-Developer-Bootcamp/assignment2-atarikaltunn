function onSubmit() {
    let operation = "";
    switch(document.getElementById("operation").value) {
        case "Add":
            operation = "Add";
            break;
        case "Substract":
            operation = "Substract";
            break;
        case "Multiply":
            operation = "Multiply";
            break;
        case "Divide":
            operation = "Divide";
            break;
    }

    // console.log(`bıdıbıdı + ${operation}`);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/xml; charset=utf-8");
    myHeaders.append("SOAPAction", `http://tempuri.org/${operation}`);

    var raw = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <soap:Body>\n    <Add xmlns=\"http://tempuri.org/\">\n      <intA>100</intA>\n      <intB>100</intB>\n    </Add>\n  </soap:Body>\n</soap:Envelope>\n";

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://www.dneonline.com/calculator.asmx", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


        
    operation = "";
}
