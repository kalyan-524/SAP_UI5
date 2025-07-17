/*global QUnit*/

sap.ui.define([
	"employeedata/controller/Employeedetails.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Employeedetails Controller");

	QUnit.test("I should test the Employeedetails controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
