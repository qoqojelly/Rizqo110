var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_1.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_2);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_2,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_2.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_3.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Fisik_Alam_Jenis_Tanah_Kaligesing_4 = new ol.format.GeoJSON();
var features_Fisik_Alam_Jenis_Tanah_Kaligesing_4 = format_Fisik_Alam_Jenis_Tanah_Kaligesing_4.readFeatures(json_Fisik_Alam_Jenis_Tanah_Kaligesing_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_4.addFeatures(features_Fisik_Alam_Jenis_Tanah_Kaligesing_4);
var lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_4, 
                style: style_Fisik_Alam_Jenis_Tanah_Kaligesing_4,
                interactive: true,
                title: '<img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_4.png" /> Fisik_Alam_Jenis_Tanah_Kaligesing'
            });
var format_Fisik_Alam_Jenis_Tanah_Kaligesing_5 = new ol.format.GeoJSON();
var features_Fisik_Alam_Jenis_Tanah_Kaligesing_5 = format_Fisik_Alam_Jenis_Tanah_Kaligesing_5.readFeatures(json_Fisik_Alam_Jenis_Tanah_Kaligesing_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_5.addFeatures(features_Fisik_Alam_Jenis_Tanah_Kaligesing_5);
var lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_5, 
                style: style_Fisik_Alam_Jenis_Tanah_Kaligesing_5,
                interactive: true,
                title: '<img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_5.png" /> Fisik_Alam_Jenis_Tanah_Kaligesing'
            });
var format_Fisik_Alam_Jenis_Tanah_Kaligesing_6 = new ol.format.GeoJSON();
var features_Fisik_Alam_Jenis_Tanah_Kaligesing_6 = format_Fisik_Alam_Jenis_Tanah_Kaligesing_6.readFeatures(json_Fisik_Alam_Jenis_Tanah_Kaligesing_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_6.addFeatures(features_Fisik_Alam_Jenis_Tanah_Kaligesing_6);
var lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fisik_Alam_Jenis_Tanah_Kaligesing_6, 
                style: style_Fisik_Alam_Jenis_Tanah_Kaligesing_6,
                interactive: true,
                title: '<img src="styles/legend/Fisik_Alam_Jenis_Tanah_Kaligesing_6.png" /> Fisik_Alam_Jenis_Tanah_Kaligesing'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_7 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_7 = format_Transportasi_Kecamatan_Kaligesing_LN_7.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_7.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_7);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_7, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_7,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_7.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_8 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_8 = format_Transportasi_Kecamatan_Kaligesing_LN_8.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_8.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_8);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_8, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_8,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_8.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Transportasi_Kecamatan_Kaligesing_LN_9 = new ol.format.GeoJSON();
var features_Transportasi_Kecamatan_Kaligesing_LN_9 = format_Transportasi_Kecamatan_Kaligesing_LN_9.readFeatures(json_Transportasi_Kecamatan_Kaligesing_LN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transportasi_Kecamatan_Kaligesing_LN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transportasi_Kecamatan_Kaligesing_LN_9.addFeatures(features_Transportasi_Kecamatan_Kaligesing_LN_9);
var lyr_Transportasi_Kecamatan_Kaligesing_LN_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transportasi_Kecamatan_Kaligesing_LN_9, 
                style: style_Transportasi_Kecamatan_Kaligesing_LN_9,
                interactive: true,
                title: '<img src="styles/legend/Transportasi_Kecamatan_Kaligesing_LN_9.png" /> Transportasi_Kecamatan_Kaligesing_LN'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_10 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_10 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_10.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_10.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_10);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_10, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_10,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_10.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_11 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_11 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_11.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_11.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_11);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_11, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_11,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_11.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });
var format_Ibu_Kota_Kecamatan_Kaligesing_PT_12 = new ol.format.GeoJSON();
var features_Ibu_Kota_Kecamatan_Kaligesing_PT_12 = format_Ibu_Kota_Kecamatan_Kaligesing_PT_12.readFeatures(json_Ibu_Kota_Kecamatan_Kaligesing_PT_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_12.addFeatures(features_Ibu_Kota_Kecamatan_Kaligesing_PT_12);
var lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ibu_Kota_Kecamatan_Kaligesing_PT_12, 
                style: style_Ibu_Kota_Kecamatan_Kaligesing_PT_12,
                interactive: true,
                title: '<img src="styles/legend/Ibu_Kota_Kecamatan_Kaligesing_PT_12.png" /> Ibu_Kota_Kecamatan_Kaligesing_PT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.setVisible(true);lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4.setVisible(true);lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5.setVisible(true);lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_7.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_8.setVisible(true);lyr_Transportasi_Kecamatan_Kaligesing_LN_9.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11.setVisible(true);lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4,lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5,lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6,lyr_Transportasi_Kecamatan_Kaligesing_LN_7,lyr_Transportasi_Kecamatan_Kaligesing_LN_8,lyr_Transportasi_Kecamatan_Kaligesing_LN_9,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11,lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12];
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6.set('fieldAliases', {'FID_JENIS_': 'FID_JENIS_', 'JNS_TNH': 'JNS_TNH', 'SUMBER': 'SUMBER', 'FID_Kecama': 'FID_Kecama', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER_1': 'SUMBER_1', 'KELURAHAN_': 'KELURAHAN_', 'Luas_Ha': 'Luas_Ha', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_7.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_8.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_9.set('fieldAliases', {'Lebar': 'Lebar', 'Fungsi_Jln': 'Fungsi_Jln', 'Nama_Jln_1': 'Nama_Jln_1', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12.set('fieldAliases', {'Klasifikas': 'Klasifikas', 'Jenis_Utam': 'Jenis_Utam', 'Jenis': 'Jenis', 'Kegiatan_O': 'Kegiatan_O', 'Nama_Objek': 'Nama_Objek', 'Pemerintah': 'Pemerintah', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4.set('fieldImages', {'FID_JENIS_': '', 'JNS_TNH': '', 'SUMBER': '', 'FID_Kecama': '', 'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER_1': '', 'KELURAHAN_': '', 'Luas_Ha': '', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5.set('fieldImages', {'FID_JENIS_': '', 'JNS_TNH': '', 'SUMBER': '', 'FID_Kecama': '', 'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER_1': '', 'KELURAHAN_': '', 'Luas_Ha': '', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6.set('fieldImages', {'FID_JENIS_': '', 'JNS_TNH': '', 'SUMBER': '', 'FID_Kecama': '', 'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER_1': '', 'KELURAHAN_': '', 'Luas_Ha': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_7.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_8.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_9.set('fieldImages', {'Lebar': '', 'Fungsi_Jln': '', 'Nama_Jln_1': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12.set('fieldImages', {'Klasifikas': '', 'Jenis_Utam': '', 'Jenis': '', 'Kegiatan_O': '', 'Nama_Objek': '', 'Pemerintah': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_4.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_5.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_Fisik_Alam_Jenis_Tanah_Kaligesing_6.set('fieldLabels', {'FID_JENIS_': 'no label', 'JNS_TNH': 'no label', 'SUMBER': 'no label', 'FID_Kecama': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER_1': 'no label', 'KELURAHAN_': 'no label', 'Luas_Ha': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_7.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_8.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Transportasi_Kecamatan_Kaligesing_LN_9.set('fieldLabels', {'Lebar': 'no label', 'Fungsi_Jln': 'no label', 'Nama_Jln_1': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_10.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_11.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12.set('fieldLabels', {'Klasifikas': 'no label', 'Jenis_Utam': 'no label', 'Jenis': 'no label', 'Kegiatan_O': 'no label', 'Nama_Objek': 'no label', 'Pemerintah': 'no label', });
lyr_Ibu_Kota_Kecamatan_Kaligesing_PT_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});