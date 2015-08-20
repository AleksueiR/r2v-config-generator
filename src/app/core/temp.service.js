//jscs:disable
// jshint ignore: start
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('illiroke', illiroke);

    illiroke.$inject = [];

    /* @ngInject */
    function illiroke() {
        var service = {
            data: {
                schema: {},
                form: {},
                model: {}
            },
            initialize: initialize
        };

        // TODO: remove hack
        initialize();

        return service;

        ////////////////

        //TODO: remove

        function initialize() {
            service.data.schema = {
                "type": "object",
                "properties": {
                    "basemaps": {
                        "title": "Basemaps",
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "title": "Basemap",
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "layers": {
                                    "type": "array",
                                    "minItems": 1,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "url": {
                                                "type": "string",
                                                "format": "uri"
                                            }
                                        },
                                        "required": [
                                            "url"
                                        ],
                                        "additionalProperties": true
                                    }
                                },
                                "thumbnail": {
                                    "type": "string"
                                },
                                "scaleCssClass": {
                                    "type": "string",
                                    "default": "map-scale-dark"
                                },
                                "type": {
                                    "type": "string",
                                    "default": "Topographic"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "altText": {
                                    "type": "string"
                                },
                                "tileSchema": {
                                    "type": "string",
                                    "description": "should define a combination of the projection and tiling format (ex: NRCAN_Lambert_3978, ESRI_World_AuxMerc_3857 )"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "description"
                                },
                                "spatialReference": {
                                    "type": "object",
                                    "properties": {
                                        "wkid": { "type": "number" },
                                        "vcsWkid": { "type": "number" },
                                        "latestWkid": { "type": "number" },
                                        "latestVcsWkid": { "type": "number" },
                                        "wkt": { "type": "string" }
                                    },
                                    "anyOf": [
                                        { "required": [ "wkid" ] },
                                        { "required": [ "vcsWkid" ] },
                                        { "required": [ "latestWkid" ] },
                                        { "required": [ "latestVcsWkid" ] },
                                        { "required": [ "wkt" ] }
                                    ]
                                },
                            },
                            "required": [
                                "id",
                                "layers",
                                "tileSchema"
                            ],
                            "additionalProperties": false
                        }
                    }
                }
            };

        }
    }
})();
