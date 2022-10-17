Ext.define('WEB_BASE.store.status_tonkhoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.status_tonkhoStore',

    fields: ['status', 'data1'],
    data: [
        { status: 'Lỗi, hỏng', data1: 50 },
        { status: 'Đang yêu cầu', data1: 180 },
        { status: 'Đang sử dụng', data1: 170 },
        { status: 'Tồn kho', data1: 100 }
    ]

});