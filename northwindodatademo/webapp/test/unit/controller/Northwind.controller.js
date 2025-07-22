/*global QUnit*/

sap.ui.define([
	"demo/northwindodatademo/controller/Northwind.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Northwind Controller");

	QUnit.test("I should test the Northwind controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
