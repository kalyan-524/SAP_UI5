/*global QUnit*/

sap.ui.define([
	"assesment/controller/empdetails.controller"
], function (Controller) {
	"use strict";

	QUnit.module("empdetails Controller");

	QUnit.test("I should test the empdetails controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
