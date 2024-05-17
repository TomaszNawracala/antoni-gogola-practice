sap.ui.define([
	"sap/ui/core/ComponentContainer",
], (componentContainer) => {
	"use strict";

	new componentContainer({
		name: "ui5.walkthrough",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");
});