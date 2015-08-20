(function () {
    'use strict';

    angular
        .module('app.form')
        .controller('FormController', FormController);

    FormController.$inject = ['schemaForm', 'illiroke'];

    /* @ngInject */
    function FormController(schemaForm, illiroke) {
        var vm = this;

        vm.data = illiroke.data;

        vm.form = [
            '*',
            {
                type: 'submit',
                title: 'Save'
            }
        ];

        vm.model = {};

        activate();

        ////////////////

        function activate() {
        }

        vm.pretty = function() {
            return JSON.parse(vm.data.schema);
        };
    }
})();
