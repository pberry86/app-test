angular.module('app.services', [])

.factory('SessionService', function(){
    
    var user = {};
    var paymentInfo = {};
    var barrierName;

    return {
      getUser: function(){
        return user;
      },
      setUser: function(data){
        user = data;
      },
      getBarrier: function(){
        console.log(barrierName);
        for (var i=0; i<paymentInfo.length; i++) {
          if (paymentInfo[i].payBarrier==barrierName) {
            return paymentInfo[i];
          }
        }
      },
      setBarrier: function(data){
        barrierName = data;
      },
      getPaymentInfo: function(){
        return paymentInfo;
      },
      setPaymentInfo: function(data){
        paymentInfo = data;
      },
      getPaymentStatusFor: function(data){
        for (var i=0; i<paymentInfo.length; i++) {
          if (paymentInfo[i].payBarrier==data) {
            return paymentInfo[i].status;
          }
        }
      }
  };
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
