var uiController = (function() {
    var DomString =  {
     inputType  :   ".add__type" , 
     inputDescription  :  " .add__description", 
     inputValue  :   ".add__value" ,
     addBtn  : ".add__btn"  
    }
    return { 
        getInput: function() {
            return{ 
                type: document.querySelector(DomString.inputType).value , 
                description: document.querySelector(DomString.inputDescription).value ,
                value : document.querySelector(DomString.inputValue).value 

            }
        } ,
        getDomStrings : function()  {
             return DomString ; 
        } 

    }; 
})();

var financeController = (function() {
    
})();

var appController = (function(uiController, financeController) {
    var DOM  =  uiController.getDomStrings(); 

  var ctrlAddItem = function() {
    // оруулах өгөлөлийг дэлгэцээс авах 
    console.log(uiController.getInput());
    // олж авсан өгөгдөлөө  контроллэроор дамжуулж тэнд хадлгана  

    // олж авсан өгөгдөлүүдээ вэб дээр тохирох хэсэгт гаргана 

    // төсөв тооцно 

    //эцсийн байдлаар гаргана 

  };

  document.querySelector(DOM.addBtn).addEventListener("click", function() {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);