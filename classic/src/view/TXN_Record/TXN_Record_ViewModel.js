Ext.define('WEB_BASE.view.TXN_Record.TXN_Record_ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TXN_Record_ViewModel',
    requiers: ['WEB_BASE.store.TXN_Record_Store'],
    stores: {
        TXN_Record_Store: {
            type: 'TXN_Record_Store'
        }
    }
});
