Ext.define('WEB_BASE.store.TXN_Record_Store', {
    extend: 'Ext.data.Store',
    alias: 'store.TXN_Record_Store',
    storeId: 'TXN_Record_Store',
    fields: ['id', 'name', {
        name: 'date', type: 'date'
    },'uuid'],
    data: [
        { id: 1, name: 'Record 1', date: new Date(), uuid: '11111' },
        { id: 2, name: 'Record 2', date: '2022-07-14 11:12:23', uuid: '22222' },
        { id: 3, name: 'Record 3', date: '2022-07-15 11:00:23', uuid: '33333' },
        { id: 4, name: 'Record 4', date: '2022-07-16 11:24:23', uuid: '44444' }
    ]

});