angular
        .module('getfoods')
        .service('aboutApp', aboutApp);

   
    function aboutApp(string) {
        var getData = function(q) {
        return $http.jsonp("https://api.yummly.com/v1/api/recipes?callback=JSON_CALLBACK" , {
          params: {
            "_app_id": '27e2db15',
            "_app_key": '784ff087b8430b6ce6e5ad2688c695d0',
            "q": q,
            "maxResult": 6,
            //"allowedAllergy[]": ["Seafood-Free"],
            //"requirePictures": true
          }
        });      
        };        

        return {
            getData: getData,
            
        };
    }