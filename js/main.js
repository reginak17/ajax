'use strict'
//definicja funkcji ajax
function ajax(method,url){
    
    
    //zmienna ktora trzyma obiekt
    let httpReq = new XMLHttpRequest();
    
    
    //otwieramy połączenia do serwera
    
    httpReq.open(method, url);
    
    
//   sprawdzam zmiane statusu połczenia (5 sprawdzeń)
    
    httpReq.onreadystatechange = function (){
        
      if(httpReq.readyState  == 4){
          if(httpReq.status == 200){
              
//              tworzenie zmiennej ktora trzyma dane
              
              let returnData = httpReq.responseText;
              
              // metoda ktora bedzie wykonywała sie na zwróconych danych
              
              httpReq.onsuccess(returnData);
              
              //zerujemy polączenie
              
              httpReq = null;
              
          }
      }  
    }
    httpReq.onsuccess = function(response){
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
    }
    httpReq.send();
}
//wywołujemy funkcje

ajax('GET',
   'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl' )