var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordepartamentoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordepartamentoINDEC_3 = format_PoblacinpordepartamentoINDEC_3.readFeatures(json_PoblacinpordepartamentoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordepartamentoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordepartamentoINDEC_3.addFeatures(features_PoblacinpordepartamentoINDEC_3);
var lyr_PoblacinpordepartamentoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordepartamentoINDEC_3, 
                style: style_PoblacinpordepartamentoINDEC_3,
                interactive: true,
    title: 'Población por departamento (INDEC)<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_0.png" /> 4.850 - 24.000<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_1.png" /> 24.001 - 53.150<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_2.png" /> 53.151 - 87.250<br />\
    <img src="styles/legend/PoblacinpordepartamentoINDEC_3_3.png" /> 87.251 - 114.500<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 2.980 - 14.480<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 14.481 - 31.810<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 31.811 - 54.870<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 54.871 o más<br />'
        });
var format_ViviendasenreasRuralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasRuralesINDEC_5 = format_ViviendasenreasRuralesINDEC_5.readFeatures(json_ViviendasenreasRuralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasRuralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasRuralesINDEC_5.addFeatures(features_ViviendasenreasRuralesINDEC_5);
var lyr_ViviendasenreasRuralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasRuralesINDEC_5, 
                style: style_ViviendasenreasRuralesINDEC_5,
                interactive: true,
    title: 'Viviendas en Áreas Rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_5_0.png" /> 0<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_5_1.png" /> 1 - 225<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_5_2.png" /> 226 - 1.025<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_5_3.png" /> 1.026 - 2.210<br />\
    <img src="styles/legend/ViviendasenreasRuralesINDEC_5_4.png" /> 2.211 - 3.650<br />'
        });
var format_CabezasdeporcinosINTAMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosINTAMAGyP_6 = format_CabezasdeporcinosINTAMAGyP_6.readFeatures(json_CabezasdeporcinosINTAMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosINTAMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosINTAMAGyP_6.addFeatures(features_CabezasdeporcinosINTAMAGyP_6);
var lyr_CabezasdeporcinosINTAMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosINTAMAGyP_6, 
                style: style_CabezasdeporcinosINTAMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (INTA - MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosINTAMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosINTAMAGyP_6_1.png" /> 1 - 750<br />\
    <img src="styles/legend/CabezasdeporcinosINTAMAGyP_6_2.png" /> 751 - 4.775<br />\
    <img src="styles/legend/CabezasdeporcinosINTAMAGyP_6_3.png" /> 4.776 o más<br />'
        });
var format_CabezasdeovinosINTAMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosINTAMAGyP_7 = format_CabezasdeovinosINTAMAGyP_7.readFeatures(json_CabezasdeovinosINTAMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosINTAMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosINTAMAGyP_7.addFeatures(features_CabezasdeovinosINTAMAGyP_7);
var lyr_CabezasdeovinosINTAMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosINTAMAGyP_7, 
                style: style_CabezasdeovinosINTAMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (INTA - MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosINTAMAGyP_7_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeovinosINTAMAGyP_7_1.png" /> 1 - 85<br />\
    <img src="styles/legend/CabezasdeovinosINTAMAGyP_7_2.png" /> 86 - 340<br />\
    <img src="styles/legend/CabezasdeovinosINTAMAGyP_7_3.png" /> 341 - 1.155<br />\
    <img src="styles/legend/CabezasdeovinosINTAMAGyP_7_4.png" /> 1.156 - 2.225<br />'
        });
var format_CabezasdecaprinosINTAMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosINTAMAGyP_8 = format_CabezasdecaprinosINTAMAGyP_8.readFeatures(json_CabezasdecaprinosINTAMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosINTAMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosINTAMAGyP_8.addFeatures(features_CabezasdecaprinosINTAMAGyP_8);
var lyr_CabezasdecaprinosINTAMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosINTAMAGyP_8, 
                style: style_CabezasdecaprinosINTAMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (INTA - MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosINTAMAGyP_8_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdecaprinosINTAMAGyP_8_1.png" /> 1 - 360<br />\
    <img src="styles/legend/CabezasdecaprinosINTAMAGyP_8_2.png" /> 361 - 1.980<br />\
    <img src="styles/legend/CabezasdecaprinosINTAMAGyP_8_3.png" /> 1.981 - 7.555<br />\
    <img src="styles/legend/CabezasdecaprinosINTAMAGyP_8_4.png" /> 7.556 - 21.005<br />'
        });
var format_CabezasdebovinosINTAMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosINTAMAGyP_9 = format_CabezasdebovinosINTAMAGyP_9.readFeatures(json_CabezasdebovinosINTAMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosINTAMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosINTAMAGyP_9.addFeatures(features_CabezasdebovinosINTAMAGyP_9);
var lyr_CabezasdebovinosINTAMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosINTAMAGyP_9, 
                style: style_CabezasdebovinosINTAMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (INTA - MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosINTAMAGyP_9_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdebovinosINTAMAGyP_9_1.png" /> 1 - 620<br />\
    <img src="styles/legend/CabezasdebovinosINTAMAGyP_9_2.png" /> 621 - 2.125<br />\
    <img src="styles/legend/CabezasdebovinosINTAMAGyP_9_3.png" /> 2.126 - 5.335<br />\
    <img src="styles/legend/CabezasdebovinosINTAMAGyP_9_4.png" /> 5.336 - 17.825<br />'
        });
var format_HectreasHortalizasINDEC_10 = new ol.format.GeoJSON();
var features_HectreasHortalizasINDEC_10 = format_HectreasHortalizasINDEC_10.readFeatures(json_HectreasHortalizasINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasHortalizasINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasHortalizasINDEC_10.addFeatures(features_HectreasHortalizasINDEC_10);
var lyr_HectreasHortalizasINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasHortalizasINDEC_10, 
                style: style_HectreasHortalizasINDEC_10,
                interactive: true,
    title: 'Hectáreas Hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_10_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_10_2.png" /> 201 - 950<br />\
    <img src="styles/legend/HectreasHortalizasINDEC_10_3.png" /> 951 - 2.125<br />'
        });
var format_HectreasciruelosINDEC_11 = new ol.format.GeoJSON();
var features_HectreasciruelosINDEC_11 = format_HectreasciruelosINDEC_11.readFeatures(json_HectreasciruelosINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasciruelosINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasciruelosINDEC_11.addFeatures(features_HectreasciruelosINDEC_11);
var lyr_HectreasciruelosINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasciruelosINDEC_11, 
                style: style_HectreasciruelosINDEC_11,
                interactive: true,
    title: 'Hectáreas ciruelos (INDEC)<br />\
    <img src="styles/legend/HectreasciruelosINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasciruelosINDEC_11_1.png" /> 1 - 5<br />\
    <img src="styles/legend/HectreasciruelosINDEC_11_2.png" /> 6 - 55<br />\
    <img src="styles/legend/HectreasciruelosINDEC_11_3.png" /> 56 - 118<br />\
    <img src="styles/legend/HectreasciruelosINDEC_11_4.png" /> 119 o más<br />'
        });
var format_HectreasolivosINDEC_12 = new ol.format.GeoJSON();
var features_HectreasolivosINDEC_12 = format_HectreasolivosINDEC_12.readFeatures(json_HectreasolivosINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasolivosINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasolivosINDEC_12.addFeatures(features_HectreasolivosINDEC_12);
var lyr_HectreasolivosINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasolivosINDEC_12, 
                style: style_HectreasolivosINDEC_12,
                interactive: true,
    title: 'Hectáreas olivos (INDEC)<br />\
    <img src="styles/legend/HectreasolivosINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasolivosINDEC_12_1.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreasolivosINDEC_12_2.png" /> 151 - 735<br />\
    <img src="styles/legend/HectreasolivosINDEC_12_3.png" /> 736 - 2.425<br />\
    <img src="styles/legend/HectreasolivosINDEC_12_4.png" /> 2.426 - 4.575<br />'
        });
var format_HectreasVidINDEC_13 = new ol.format.GeoJSON();
var features_HectreasVidINDEC_13 = format_HectreasVidINDEC_13.readFeatures(json_HectreasVidINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasVidINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasVidINDEC_13.addFeatures(features_HectreasVidINDEC_13);
var lyr_HectreasVidINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasVidINDEC_13, 
                style: style_HectreasVidINDEC_13,
                interactive: true,
    title: 'Hectáreas Vid (INDEC)<br />\
    <img src="styles/legend/HectreasVidINDEC_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasVidINDEC_13_1.png" /> 1 - 725<br />\
    <img src="styles/legend/HectreasVidINDEC_13_2.png" /> 726 - 1.925<br />\
    <img src="styles/legend/HectreasVidINDEC_13_3.png" /> 1.926 - 4.175<br />\
    <img src="styles/legend/HectreasVidINDEC_13_4.png" /> 4.176 - 8.915<br />'
        });
var format_Capacitaciones2019tcnicas_14 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_14 = format_Capacitaciones2019tcnicas_14.readFeatures(json_Capacitaciones2019tcnicas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_14.addFeatures(features_Capacitaciones2019tcnicas_14);
var lyr_Capacitaciones2019tcnicas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_14, 
                style: style_Capacitaciones2019tcnicas_14,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_14.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_15 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_15 = format_Capacitaciones2018tcnicas_15.readFeatures(json_Capacitaciones2018tcnicas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_15.addFeatures(features_Capacitaciones2018tcnicas_15);
var lyr_Capacitaciones2018tcnicas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_15, 
                style: style_Capacitaciones2018tcnicas_15,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_15.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_LocalidadesSanJuan_16 = new ol.format.GeoJSON();
var features_LocalidadesSanJuan_16 = format_LocalidadesSanJuan_16.readFeatures(json_LocalidadesSanJuan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesSanJuan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesSanJuan_16.addFeatures(features_LocalidadesSanJuan_16);
var lyr_LocalidadesSanJuan_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesSanJuan_16, 
                style: style_LocalidadesSanJuan_16,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesSanJuan_16.png" /> Localidades San Juan'
            });
var format_BERSanJuan_17 = new ol.format.GeoJSON();
var features_BERSanJuan_17 = format_BERSanJuan_17.readFeatures(json_BERSanJuan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERSanJuan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERSanJuan_17.addFeatures(features_BERSanJuan_17);
var lyr_BERSanJuan_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERSanJuan_17, 
                style: style_BERSanJuan_17,
                interactive: true,
                title: '<img src="styles/legend/BERSanJuan_17.png" /> BER San Juan'
            });
var format_BERSanJuan_18 = new ol.format.GeoJSON();
var features_BERSanJuan_18 = format_BERSanJuan_18.readFeatures(json_BERSanJuan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERSanJuan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERSanJuan_18.addFeatures(features_BERSanJuan_18);
var lyr_BERSanJuan_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERSanJuan_18, 
                style: style_BERSanJuan_18,
                interactive: true,
                title: '<img src="styles/legend/BERSanJuan_18.png" /> BER San Juan'
            });
var format_DelegacinSanJuan_19 = new ol.format.GeoJSON();
var features_DelegacinSanJuan_19 = format_DelegacinSanJuan_19.readFeatures(json_DelegacinSanJuan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinSanJuan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinSanJuan_19.addFeatures(features_DelegacinSanJuan_19);
var lyr_DelegacinSanJuan_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinSanJuan_19, 
                style: style_DelegacinSanJuan_19,
                interactive: true,
                title: '<img src="styles/legend/DelegacinSanJuan_19.png" /> Delegación San Juan'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordepartamentoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasenreasRuralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosINTAMAGyP_6.setVisible(true);lyr_CabezasdeovinosINTAMAGyP_7.setVisible(true);lyr_CabezasdecaprinosINTAMAGyP_8.setVisible(true);lyr_CabezasdebovinosINTAMAGyP_9.setVisible(true);lyr_HectreasHortalizasINDEC_10.setVisible(true);lyr_HectreasciruelosINDEC_11.setVisible(true);lyr_HectreasolivosINDEC_12.setVisible(true);lyr_HectreasVidINDEC_13.setVisible(true);lyr_Capacitaciones2019tcnicas_14.setVisible(true);lyr_Capacitaciones2018tcnicas_15.setVisible(true);lyr_LocalidadesSanJuan_16.setVisible(true);lyr_BERSanJuan_17.setVisible(true);lyr_BERSanJuan_18.setVisible(true);lyr_DelegacinSanJuan_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordepartamentoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasenreasRuralesINDEC_5,lyr_CabezasdeporcinosINTAMAGyP_6,lyr_CabezasdeovinosINTAMAGyP_7,lyr_CabezasdecaprinosINTAMAGyP_8,lyr_CabezasdebovinosINTAMAGyP_9,lyr_HectreasHortalizasINDEC_10,lyr_HectreasciruelosINDEC_11,lyr_HectreasolivosINDEC_12,lyr_HectreasVidINDEC_13,lyr_Capacitaciones2019tcnicas_14,lyr_Capacitaciones2018tcnicas_15,lyr_LocalidadesSanJuan_16,lyr_BERSanJuan_17,lyr_BERSanJuan_18,lyr_DelegacinSanJuan_19];
lyr_Departamentos_2.set('fieldAliases', {'Dpto.': 'Dpto.', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasenreasRuralesINDEC_5.set('fieldAliases', {'Viv. rur': 'Viv. rur', });
lyr_CabezasdeporcinosINTAMAGyP_6.set('fieldAliases', {'Porcino': 'Porcino', });
lyr_CabezasdeovinosINTAMAGyP_7.set('fieldAliases', {'Ovino': 'Ovino', });
lyr_CabezasdecaprinosINTAMAGyP_8.set('fieldAliases', {'Caprino': 'Caprino', });
lyr_CabezasdebovinosINTAMAGyP_9.set('fieldAliases', {'Bovino': 'Bovino', });
lyr_HectreasHortalizasINDEC_10.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasciruelosINDEC_11.set('fieldAliases', {'Ciruelo': 'Ciruelo', });
lyr_HectreasolivosINDEC_12.set('fieldAliases', {'Olivos': 'Olivos', });
lyr_HectreasVidINDEC_13.set('fieldAliases', {'Vid': 'Vid', });
lyr_Capacitaciones2019tcnicas_14.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Capacitaciones2018tcnicas_15.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo': 'Tipo', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_LocalidadesSanJuan_16.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_BERSanJuan_17.set('fieldAliases', {'Numero': 'Numero', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin.': 'Admin.', });
lyr_BERSanJuan_18.set('fieldAliases', {'Numero': 'Numero', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin.': 'Admin.', });
lyr_DelegacinSanJuan_19.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Dpto.': '', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldImages', {'Poblacion': '', });
lyr_PEAINDEC_4.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasenreasRuralesINDEC_5.set('fieldImages', {'Viv. rur': 'TextEdit', });
lyr_CabezasdeporcinosINTAMAGyP_6.set('fieldImages', {'Porcino': 'TextEdit', });
lyr_CabezasdeovinosINTAMAGyP_7.set('fieldImages', {'Ovino': 'TextEdit', });
lyr_CabezasdecaprinosINTAMAGyP_8.set('fieldImages', {'Caprino': 'TextEdit', });
lyr_CabezasdebovinosINTAMAGyP_9.set('fieldImages', {'Bovino': 'TextEdit', });
lyr_HectreasHortalizasINDEC_10.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasciruelosINDEC_11.set('fieldImages', {'Ciruelo': 'TextEdit', });
lyr_HectreasolivosINDEC_12.set('fieldImages', {'Olivos': 'TextEdit', });
lyr_HectreasVidINDEC_13.set('fieldImages', {'Vid': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_14.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Capacitaciones2018tcnicas_15.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo': '', 'Tematica': '', 'Fechas': '', 'Asistentes': '', });
lyr_LocalidadesSanJuan_16.set('fieldImages', {'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_BERSanJuan_17.set('fieldImages', {'Numero': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin.': 'TextEdit', });
lyr_BERSanJuan_18.set('fieldImages', {'Numero': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin.': 'TextEdit', });
lyr_DelegacinSanJuan_19.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', });
lyr_Departamentos_2.set('fieldLabels', {'Dpto.': 'inline label', });
lyr_PoblacinpordepartamentoINDEC_3.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasenreasRuralesINDEC_5.set('fieldLabels', {'Viv. rur': 'inline label', });
lyr_CabezasdeporcinosINTAMAGyP_6.set('fieldLabels', {'Porcino': 'inline label', });
lyr_CabezasdeovinosINTAMAGyP_7.set('fieldLabels', {'Ovino': 'inline label', });
lyr_CabezasdecaprinosINTAMAGyP_8.set('fieldLabels', {'Caprino': 'inline label', });
lyr_CabezasdebovinosINTAMAGyP_9.set('fieldLabels', {'Bovino': 'inline label', });
lyr_HectreasHortalizasINDEC_10.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasciruelosINDEC_11.set('fieldLabels', {'Ciruelo': 'inline label', });
lyr_HectreasolivosINDEC_12.set('fieldLabels', {'Olivos': 'inline label', });
lyr_HectreasVidINDEC_13.set('fieldLabels', {'Vid': 'inline label', });
lyr_Capacitaciones2019tcnicas_14.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_15.set('fieldLabels', {'Localidad': 'inline label', 'Tipo': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_LocalidadesSanJuan_16.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BERSanJuan_17.set('fieldLabels', {'Numero': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin.': 'inline label', });
lyr_BERSanJuan_18.set('fieldLabels', {'Numero': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin.': 'inline label', });
lyr_DelegacinSanJuan_19.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_DelegacinSanJuan_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});