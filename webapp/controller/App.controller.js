sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit() {
            // set data model on view
            const oData = {
                recipient: {
                    name: "World"
                }
            };
            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onShowHello: function() {
            MessageToast.show("Hello World");
        }
    });
});