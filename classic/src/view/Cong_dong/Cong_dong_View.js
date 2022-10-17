Ext.define('WEB_BASE.view.Cong_dong.Cong_dong_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Cong_dong_View',
    id: 'Cong_dong_View',

    controller: 'Cong_dong_ViewController',
    viewModel: {
        type: 'Cong_dong_ViewModel'
    }

});