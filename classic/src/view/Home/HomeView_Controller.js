Ext.define('WEB_BASE.view.Home.HomeView_Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.HomeView_Controller',
    control: {
    },
    onEditTipRender: function (tooltip, item, target, e) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), target.yField),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(
            browser + ' on ' + item.record.get('type') + ': ' +
            target.yValue.toFixed(1));
    },
    onBarTipRender: function (tooltip, record, item) {
        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
            browser = item.series.getTitle()[fieldIndex];

        tooltip.setHtml(record.get('type') + ' tại ' +
            browser + ': ' +
            record.get(item.field).toFixed(1));
    },

    onAxisLabelRender: function (axis, label, layoutContext) {
        return label.toFixed(label < 10 ? 1 : 0);
    }
})