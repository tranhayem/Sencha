Ext.define('WEB_BASE.view.Home.Home_StatusView_Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Home_StatusView_Controller',
    control: {
    },

    onDataRender: function (v) {
        return v;
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('status') + ': ' + record.get('data1'));
    }
})