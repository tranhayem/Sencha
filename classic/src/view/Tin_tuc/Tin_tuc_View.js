Ext.define('WEB_BASE.view.Tin_tuc.Tin_tuc_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Tin_tuc_View',
    id: 'Tin_tuc_View',

    controller: 'Tin_tuc_ViewController',
    viewModel: {
        type: 'Tin_tuc_ViewModel'
    }
    
});