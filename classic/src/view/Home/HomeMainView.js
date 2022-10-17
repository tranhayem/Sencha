Ext.define('WEB_BASE.view.Home.HomeMainView', {
    extend: 'Ext.form.Panel',
    xtype: 'HomeMainView',
    id: 'HomeMainView',
    layout: 'border',
    height: '100%',
    items: [{
        title: 'View 1',  //dat xtype to here AddFile_View
        region: 'west',
        width: '50%'
    }, {
        title: 'View 2',  //dat xtype to here AddOrEdit_GiayPhep_View
        region: 'center'
    }]
})