Ext.define('WEB_BASE.view.TXN_Record.TXN_Record_View', {
    extend: 'Ext.grid.Panel',
    xtype: 'TXN_Record_View',
    id: 'TXN_Record_View',
    controller: 'TXN_Record_ViewController',
    viewModel: {
        type: 'TXN_Record_ViewModel'
    },
    viewConfig: {
        columnLines: true,
        rowLines: true,
        enableTextSelection: true
    },
    bind: {
        store: '{TXN_Record_Store}'
    },
    columns:[{
        text: 'STT',
        width: 50,
        xtype: 'rownumberer',
        align: 'center'
    },{
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    },{
        text: 'Date',
        xtype: 'datecolumn',
        dataIndex: 'date',
        width: 120,
        format: 'd-m-y H:i'
    },{
        text: 'uuid',
        dataIndex: 'uuid',
        width: 100
    }]
})