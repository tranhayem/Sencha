Ext.define('WEB_BASE.view.Hoso.Hoso_View', {
    extend: 'Ext.tree.Panel',
    xtype: 'Hoso_View',
    id: 'Hoso_View',

    controller: 'Hoso_ViewController',
    viewModel: {
        type: 'Hoso_ViewModel'
    }

});