sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller,MessageBox) => {
    "use strict";

    return Controller.extend("northwindemployees.controller.Employees", {
        onInit() {
        },
        onAfterRendering:function(){
            var that = this;
            this.getOwnerComponent().getModel().read("/Products",{
                // filters:[new sap.ui.model.Filter("ProductName","Contains","Chai")],
                success:function(oData, results){
                    var productModel = new sap.ui.model.json.JSONModel(oData);
                    that.getView().setModel(productModel,"productModel")
                },
                error:function(error){
                    MessageBox.error(JSON.parse(error.responseText).error.message.value);
                }

               
            });
        },
        onSearchProducts:function(evt){
            var searchString =evt.getParameter("value");
            var filters = new sap.ui.model.Filter("ProductName","Contains",searchString);
            this.getView().byId("producttableid").getBinding("items").filter(filters);
        },
        // onSortPress: function (evt) {
        //     this._sortDescending = !this._sortDescending;
        //     var oSorter = new sap.ui.model.Sorter("ProductID", this._sortDescending);
        //     this.getView().byId("producttableid").getBinding("items").sort(oSorter);
        // }

        onSortPress: function(evt){           
            if(!this.onSort){
                this.onSort = new sap.ui.xmlfragment("northwindemployees.view.employeesort",this);
                this.getView().addDependent(this.onSort);
                }    
                this.onSort.open();           
    },
    // onDescending : function(evt){

    // if (!this._sortDescending) {
    //     this._sortDescending = !this._sortDescending;
    // }                
    //     var oSort = new sap.ui.model.Sorter("ProductID", this._sortDescending);
    //     this.getView().byId("producttableid").getBinding("items").sort(oSort);
    //     this.onSort.close();
    // },
    // onAscending : function(evt){        
    //     var oSort = new sap.ui.model.Sorter("ProductID", this._sortascending);
    //     this.getView().byId("producttableid").getBinding("items").sort(oSort);           
    //     this.onSort.close();
    // },
    // onCloseDialog : function ( ) {
    //     this.onSort.close();
    // }

    onSelectionChange: function(oEvent){
        var oSelectedItem = oEvent.getParameter("selectedItem");
        if (oSelectedItem) {
            this.sKey = oSelectedItem.getKey();
            this.sText = oSelectedItem.getText();
        }
    },

    onAddSort:function(){
        if(!this.addSort){
            this.addSort = new sap.ui.xmlfragment("northwindemployees.view.employeesort",this);
            this.getView().addDependent(this.addSort);
            }    
            this.addSort.open();  
    },
    onOk : function (oEvent) {

        var sortAsc = sap.ui.getCore().byId("Asc").getSelected();
        var sortDesc = sap.ui.getCore().byId("Desc").getSelected();
       
        if (sortAsc) {
            var oSorterAsc = new sap.ui.model.Sorter(this.sText, false);
            this.getView().byId("producttableid").getBinding("items").sort(oSorterAsc);
            this.onSort.close();
        } else {
            var oSorterDesc = new sap.ui.model.Sorter(this.sText, true);
            this.getView().byId("producttableid").getBinding("items").sort(oSorterDesc);
            this.onSort.close();
        }
    },     
    onCancel : function(){       
            this.onSort.close();
        },

    });
});