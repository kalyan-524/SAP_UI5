sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ladera.expandentity.controller.orderdrill", {
        onInit() {
        },
        onNavigationBack: function(evt){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
 
        }

        
    });
});