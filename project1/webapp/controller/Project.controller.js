sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.Project", {

        onInit() {
            var productsModel = new sap.ui.model.json.JSONModel("model/product.json");
            this.getView().setModel(productsModel);
            if (!this.addProduct) {
                this.addProduct = new sap.ui.xmlfragment("project1.view.addproduct", this);
                this.getView().addDependent(this.addProduct);
            }
        },
        onSearchProducts: function (evt) {
            var productsearch = evt.getParameter("newValue")
            var filters = new sap.ui.model.Filter("ProductName", "Contains", productsearch);
            this.getView().byId("ProductID").getBinding("items").filter(filters);

        },
        Onchange: function (evt) {
            var productsearch = evt.getParameter("value")
            var filters = new sap.ui.model.Filter("Location", "Contains", productsearch);
            this.getView().byId("ProductID").getBinding("items").filter(filters);
        },

        onSortPress: function (evt) {
            this._sortDescending = !this._sortDescending;
            var oSorter = new sap.ui.model.Sorter("ProductName", this._sortDescending);
            this.getView().byId("ProductID").getBinding("items").sort(oSorter);
        },

        onaddPress: function () {
            // if(!this.addProduct){
            // this.addProduct = new sap.ui.xmlfragment("project1.view.addproduct",this);
            // this.getView().addDependent(this.addProduct);
            // }
            this.mode = "ADD"
            var newProductObj = {
                "ProductId": this.getView().getModel().oData.Products.length + 1,
                "ProductName": "",
                "ProductDescription": "",
                "Location": "",
                "CostCenter": "",
                "Status": "Inactive"
            };
            var ProductObj = new sap.ui.model.json.JSONModel(newProductObj);
            sap.m.MessageToast.show("New Product is added");
            this.getView().setModel(ProductObj, "ProductObj");
            this.addProduct.open();
        },
        onSaveProduct: function () {
            if (this.mode == "ADD") {
                this.getView().getModel().oData.Products.push(this.getView().getModel("ProductObj").oData);
                sap.m.MessageToast.show("New Product is added");
            } else {
                sap.m.MessageToast.show("Product is Updated");
            }
            this.getView().getModel().updateBindings(true);
            this.addProduct.close();
        },
        oneditPress: function () {
            this.mode = "EDIT";
            if (!this.getView().byId("ProductID").getSelectedItem()) {
                sap.m.MessageToast.show("Please select an item to edit!");
                return;
            }
            var editProductObj = this.getView().byId("ProductID").getSelectedItem().getBindingContext().getObject();
            var productObj = new sap.ui.model.json.JSONModel(editProductObj);
            this.getView().setModel(productObj, "productObj");
            this.addProduct.open();

            },
             onSaveProduct: function(){
                if(this.mode == "ADD"){
                this.getView().getModel().oData.Products.push(this.getView().getModel("ProductObj").oData);
                this.getView().getModel().updateBindings(true);
                this.addProduct.close();
                }
        },
        onCancelProduct: function () {
            this.addProduct.close();
        },
        ondeletepress: function (evt) {
            var selectedTableRow = evt.getSource().getBindingContext().getPath().split("/")[2];
            this.getView().getModel().oData.Products.splice(selectedTableRow, 1);
            this.getView().getModel().updateBindings(true);
        },
        onProductrowpress: function(evt) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("productdetailspage",{
                "productIndex":evt.getSource().getBindingContext().getPath().split("/")[2]
            })
        }


    });
});