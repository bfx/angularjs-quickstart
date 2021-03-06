/**
 *
 */
angular.module("pizza5App",[]);

function PizzaMenuCtrl($scope) {
    $scope.menu = [
            {
                id : 0,
                name: "Margherita",
                price: 5,
                ingredients : ["Flour","Salt","Cheese","Tomato"]
            },
        {
            id : 1,
            name: "Napoli",
            price: 6,
            ingredients : ["Flour","Salt","Cheese","Tomato", "Anchovies"]
        },

        {
            id : 2,
            name: "Four Seasons",
            price: 7,
            ingredients : ["Flour","Salt","Cheese","Tomato","Mushrooms","Olives"]
        }
        ,

        {
            id : 3,
            name: "Wurstel",
            price: 8,
            ingredients : ["Flour","Salt","Cheese","Tomato","Wurstel"]
        }
        ];
}


function OrderCtrl($scope) {
    $scope.order = {
        pizzaCount : 0,
        items : [],
        totalPrice : 0
    };

    $scope.add = function(pizza)
    {
        $scope.order.items.push(pizza);
        $scope.order.pizzaCount = $scope.order.pizzaCount + 1;
        $scope.order.totalPrice = $scope.order.totalPrice + pizza.price; //TODO REFACTOR
    }
}

angular.module("pizza5App").controller("PizzaMenuCtrl",PizzaMenuCtrl);
angular.module("pizza5App").controller("OrderCtrl",OrderCtrl);
