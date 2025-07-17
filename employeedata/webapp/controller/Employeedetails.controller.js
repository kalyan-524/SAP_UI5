sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
    
    return Controller.extend("a.controller.Employeedetaemployeedatils", {
        onInit() {
			
			var EmployeeModel = new sap.ui.model.json.JSONModel("model/Employee.json");
           this.getView().setModel(EmployeeModel);
		},
        
        onsearchemployee : function(evt){
            var searchstring = evt.getParameter("newValue");
            var filters=new sap.ui.model.Filter("Name","Contains",searchstring);
            this.getView().byId("employeelistid").getBinding("items").filter(filters);
        },

        onsearchlocation : function(evt){
            var searchstring = evt.getParameter("value");
            var filters = new sap.ui.model.Filter("Location","Contains",searchstring);
            this.getView().byId("employeelistid").getBinding("items").filter(filters);
        },
        onSortPress: function(evt){

                this.onSort = new sap.ui.xmlfragment("employeedata.view.empdetails", this);
                this.getView().addDependent(this.onSort);
                this.onSort.open();            
        },
        onDescending : function(evt){

        if (!this._sortDescending) {
            this._sortDescending = !this._sortDescending;
        }                
            var oSort = new sap.ui.model.Sorter("Name", this._sortDescending);
            this.getView().byId("employeelistid").getBinding("items").sort(oSort);
            this.onSort.close();
        },
        onAscending : function(evt){

            // this._sortascending = !this._sortascending;
            var oSort = new sap.ui.model.Sorter("Name", this._sortascending);
            this.getView().byId("employeelistid").getBinding("items").sort(oSort);           
            this.onSort.close();
        },
        onCloseDialog : function ( ) {
            this.onSort.close();

        // // },
        // onaddpress : function(){
        //     if(!this.empdetails){
        //     this.empdetails = new sap.ui.xmlfragment("employeedata.view.empdetails",this);
        //     this.getView().addDependent(this.empdetails);
        //     }
        //     this.empdetails.open();
         },
         onemprowpress : function(){
            var orouter = sap.ui.core.UIComponent.getRouterFor(this);
            orouter.navTo("RouteEmployeepage");
         }

    });
});