Ext.define('WEB_BASE.view.Home.Home_StatusView', {
    extend: 'Ext.panel.Panel',
    xtype: 'Home_StatusView',
    id: 'Home_StatusView',
    requires: ['Ext.chart.PolarChart', 'Ext.chart.series.Pie', 'Ext.chart.interactions.Rotate'],
    controller: 'Home_StatusView_Controller',
    layout: 'fit',
    items: [{
        xtype: 'polar',
        reference: 'chart',
        captions: {
            title: 'Trạng thái vật tư'
        },
        insetPadding: 40,
        innerPadding: 20,
        store: {
            type: 'status_tonkhoStore'
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        series: [{
            type: 'pie',
            angleField: 'data1',
            label: {
                field: 'status',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});

