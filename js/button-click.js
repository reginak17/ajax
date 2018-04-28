'use strict';

function ajax(method, url) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url);
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }

    httpReq.onsuccess = function (response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
        let par1 = document.createElement('p');
        let par2 = document.createElement('p');
        let par3 = document.createElement('p');
        
        par1.innerHTML = jsonObj.userId;
        par2.innerHTML = jsonObj.userName;
        par3.innerHTML = jsonObj.userURL;
        
        document.body.appendChild(par1);
        document.body.appendChild(par2);
        document.body.appendChild(par3);
    }

    httpReq.send();
}

function pobierzDane() {
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
}

document.getElementById('btn').addEventListener('click', pobierzDane);