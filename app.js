var uiController = (function () {})();

// Санхүүтэй ажиллах контроллэр
var financeController = (function () {})();

var cntrlAddItem = function() {
  console.log('дэлгцээс өгөгдөл авах хэсэг ');
   // 1.  оруулах өгөлөлийг дэлгэцээс авах
    
    // 2 . олж авсан өгөгдөлөө  контроллэроор дамжуулж тэнд хадлгана

    // 3. олж авсан өгөгдөлүүдээ вэб дээр тохирох хэсэгт гаргана

    // 4.төсөв тооцно

    // 5.эцсийн байдлаар гарганаs
};

// програм холбогч контроллэр
var appController = (function (uiController, financeController) {
  document.querySelector(".add__btn").addEventListener("click", function () {
     cntrlAddItem();
   
  });
document.addEventListener("keypress",function(event){
  if(event ===13  || event.which === 13 ) { 
    cntrlAddItem();  
  }
})


})(uiController, financeController);
