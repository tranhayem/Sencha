Ext.define('WEB_BASE.view.Cong_viec.Cong_viec_View', {
    extend: 'Ext.grid.Panel',
    xtype: 'Cong_viec_View',
    id: 'Cong_viec_View',

    controller: 'Cong_viec_ViewController',
    viewModel: {
        type: 'Cong_viec_ViewModel'
    }

});