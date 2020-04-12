ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-707717.582914, 1022538.236844, 379909.779348, 1722722.740689]);
var wms_layers = [];

var format_isohyete_6090_Project_0 = new ol.format.GeoJSON();
var features_isohyete_6090_Project_0 = format_isohyete_6090_Project_0.readFeatures(json_isohyete_6090_Project_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isohyete_6090_Project_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isohyete_6090_Project_0.addFeatures(features_isohyete_6090_Project_0);
var lyr_isohyete_6090_Project_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isohyete_6090_Project_0, 
                style: style_isohyete_6090_Project_0,
                interactive: true,
                title: '<img src="styles/legend/isohyete_6090_Project_0.png" /> isohyete_60-90_Project'
            });

lyr_isohyete_6090_Project_0.setVisible(true);
var layersList = [lyr_isohyete_6090_Project_0];
lyr_isohyete_6090_Project_0.set('fieldAliases', {'ID': 'ID', 'MENGE': 'MENGE', });
lyr_isohyete_6090_Project_0.set('fieldImages', {'ID': 'TextEdit', 'MENGE': 'TextEdit', });
lyr_isohyete_6090_Project_0.set('fieldLabels', {'ID': 'inline label', 'MENGE': 'inline label', });
lyr_isohyete_6090_Project_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});