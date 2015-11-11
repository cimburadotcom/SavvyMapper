// When the page loads look for any maps we should initialize
DM = {};
jQuery(document).ready(function(){

    // The map in the metabox on an edit page
    // Let the user select a feature
    jQuery('.dm_metabox_map_div').each(function(){
        var tmpdm = new DapperMapper();
        tmpdm._makeCartoDBMetaboxMap(this);
        DM[tmpdm.id] = tmpdm;
    });

    // Show page and archive maps
    jQuery('.dm_map_div').each(function(){
        var tmpdm = new DapperMapper();
        tmpdm._basicMapSetup(this);
        DM[tmpdm.id] = tmpdm;
    });

    if(jQuery('.dm_cdb_table_select').length > 0){
        var tmpdm = new DapperMapper();
        DM[tmpdm.id] = tmpdm;
        tmpdm._cdb_tables_and_columns = cdb_tables_and_columns;
        jQuery('.dm_cdb_table_select').on('change',function(e){
            tmpdm._setCDBColumnOpts(e);
        });
    }
});

