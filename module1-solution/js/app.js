(function() {
    angular.module('LunchMenu', [])
        .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        var limits = {
            empty: 0,
            ok: 3
        }
        var messages = {
            empty: 'Please enter data first',
            tooMuch: 'Too much!',
            ok: 'Enjoy!'
        };
        var getMessage = function (itemsCount) {
            if (itemsCount == limits.empty) {
                return messages.empty;
            }
            if (itemsCount <= limits.ok) {
                return messages.ok;
            }
            return messages.tooMuch;
        }

        $scope.state = {
            menu: '',
            message: ''
        }

        $scope.checkMenu = function () {
            var items = $scope.state.menu.split(',')
                .map(function (i) { return i.trim() })
                .filter(function (i) { return i });
            $scope.state.message = getMessage(items.length);
            $scope.state.menu = items.join(',');
        }
    }
})()