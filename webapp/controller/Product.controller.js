sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("org.indexit.zrnav.controller.Product", {
       onInit:function(oEvent){
             var oModelGW = this.getOwnerComponent().getModel();
                var oModelDEMO = this.getOwnerComponent().getModel("GWDEMO");
                var responseGW = new JSONModel();
                var that = this;
                var sPath = "/ProductSet"
                oModelGW.read(sPath, {
                    success: function (oData, oResponse) {
                        var readModel = new sap.ui.model.json.JSONModel(oData)
                        that.getView().setModel(readModel, "RModel");

                        console.log(oData);



                    },
                    error: function (oError) {


                    }
                });

        },
         onClickItem: function () {

        }
    });
});
