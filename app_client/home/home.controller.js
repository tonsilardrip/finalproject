angular
    .module('getfoods')
    .controller('awesomefoods', awesomefoods);
    
    
function awesomefoods (yummlyAPI){
    var vm = this;
    vm.arrayOfFoods = [];
    var yum;
    vm.foodsearch = function(){
        yummlyAPI.getData(vm.userInput).then(function successfull(responce) { 
            yum = responce;
            for (var i = 0; i < yum.data.matches.length; i++) {
                 var ing = '';
                for (var j = 0; j < yum.data.matches[i].ingredients.length; j++) {
                     ing = ing + ', ' + yum.data.matches[i].ingredients[j];
                }
               vm.arrayOfFoods.push({a: 'Recepie name : ' + yum.data.matches[i].recipeName, 
                                    b: 'Ingredients : ' + ing,
                                     c: 'Time to cook (seconds) : ' + yum.data.matches[i].totalTimeInSeconds,
                                     d: 'rating : ' + yum.data.matches[i].rating
               });
            }
        });
    };
}



