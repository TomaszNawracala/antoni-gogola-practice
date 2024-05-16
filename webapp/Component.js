sap.ui.define([
    'sap/ui/core/UIComponent'
], (UIComponent) => {
    'use strict';
    
    return UIComponent.extend('', {
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});