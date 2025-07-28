sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ladera.expandentity.controller.View1", {
        onInit() {
        },

        onorderListItemPress: function(evt){
            // var Selrowid = evt.getSource().getBindingContext().getObject().OrderID;
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);             
            oRouter.navTo("orderdrill",{
                "OrderID": evt.getSource().getBindingContext().getProperty().OrderID
            })
        }
    });
});