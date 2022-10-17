Ext.define('WEB_BASE.store.browsersStore', {
    extend: 'Ext.data.Store',
    alias: 'store.browsersStore',

    //                   IE    Firefox  Chrome   Safari
    fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],

    constructor: function (config) {
        config = config || {};

        config.data = [
            { type: 'Phụ kiện', data1: 200, data2: 370, data3: 350, data4: 40, other: 40 },
            { type: 'Vật tư', data1: 200, data2: 370, data3: 360, data4: 50, other: 20 },
            { type: 'Giấy phép', data1: 190, data2: 360, data3: 370, data4: 40, other: 40 },
            { type: 'Thành phần', data1: 180, data2: 360, data3: 380, data4: 50, other: 30 }
        ];

        this.callParent([config]);
    }

});