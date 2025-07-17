/*global QUnit*/

sap.ui.define([
	"project1/controller/Project.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Project Controller");

	QUnit.test("I should test the Project controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
