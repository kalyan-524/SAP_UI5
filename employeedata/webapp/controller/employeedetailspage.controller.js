sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("a.controller.employeedetailspage", {
        onInit() {
        },
        onNavigationBack : function() {
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("RouteEmployeedetails");
         }
    });
  });