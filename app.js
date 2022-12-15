var uiController = (function () {

  // дэлгэцийн төрлийн өгөгдлийг хадгалах 
  var DomString  =  {
    inputType  :   '.add__type' , 
    inputDescription  : '.add__description' , 
    inputValue:   '.add__value' ,
    addBtn  : '.add__btn'
    
  }


  return {

    getIput: function () {
      return {
        type: document.querySelector(DomString.inputType).value,
        description: document.querySelector(DomString.inputDescription).value,
        value: document.querySelector(DomString.inputValue).value,
      };
    },
    getDomStrings : function() { 
      return DomString; 
    }
  };
})();

// Санхүүтэй ажиллах контроллэр
var financeController = (function () {})();


// програм холбогч контроллэр
var appController = (function (uiController, financeController) {

  var DOM = uiController.getDomStrings  ();
  var cntrlAddItem = function () {
  console.log("дэлгцээс өгөгдөл авах хэсэг ");
  console.log(uiController.getIput());
  // 1.  оруулах өгөлөлийг дэлгэцээс авах

  // 2 . олж авсан өгөгдөлөө  контроллэроор дамжуулж тэнд хадлгана

  // 3. олж авсан өгөгдөлүүдээ вэб дээр тохирох хэсэгт гаргана

  // 4.төсөв тооцно

  // 5.эцсийн байдлаар гарганаs
};




  document.querySelector(DOM.addBtn).addEventListener("click", function () {
    cntrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event === 13 || event.which === 13) {
      cntrlAddItem();
    }
  });
})(uiController, financeController);
