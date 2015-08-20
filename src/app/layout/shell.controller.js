(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['layoutConfig', 'illiroke'];

    function ShellController(layoutConfig, illiroke) {
        var vm = this;

        vm.config = layoutConfig;
        vm.isLoading = true;
        vm.data = illiroke.data;

        vm.prettyModel = prettyModel;

        activate();

        ////////////////

        function activate() {
            layoutConfig.ready()
                .then(hideLoadingScreen);
        }

        function hideLoadingScreen() {
            vm.isLoading = false;
        }

        function prettyModel() {
            return typeof vm.data.model === 'string' ?
                vm.data.model : JSON.stringify(vm.data.model, undefined, 4);
        }
    }

})();
