(function () {
    'use strict';

    angular
        .module('app.editor')
        .controller('EditorController', EditorController);

    EditorController.$inject = ['illiroke'];

    /* @ngInject */
    function EditorController(illiroke) {
        var vm = this;
        var aceEditor;

        vm.title = 'EditorController';
        vm.schemaString = '';
        vm.schemaIsValid = true;

        //vm.prettySchema = prettySchema;

        vm.aceOnLoad = aceOnLoad;
        vm.aceOnChange = aceOnChange;

        activate();

        ////////////////

        function activate() {
            updateStringSchema();
        }

        function updateSchema(stringSchema) {
            try {
                illiroke.data.schema = JSON.parse(stringSchema);
                vm.schemaIsValid = true;
            } catch (e) {
                vm.schemaIsValid = false;
            }
        }

        function updateStringSchema() {
            vm.schemaString = JSON.stringify(illiroke.data.schema, undefined, 4);
        }

        // function prettySchema() {
        //     return typeof vm.data.schema === 'string' ?
        //         vm.data.schema : JSON.stringify(vm.data.schema, undefined, 4);
        // }

        function aceOnLoad(editor) {
            aceEditor = editor;
        }

        function aceOnChange() {
            var newStringSchema = aceEditor.getSession().getDocument().getValue();
            updateSchema(newStringSchema);
        }
    }
})();
