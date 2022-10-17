Ext.define('WEB_BASE.view.Home.HomeView', {
    extend: 'Ext.panel.Panel',
    xtype: 'HomeView',
    requires: ['Ext.chart.CartesianChart', 'Ext.chart.axis.Numeric', 'Ext.chart.axis.Category',
        'Ext.chart.series.Bar', 'Ext.chart.interactions.ItemHighlight'],
    id: 'HomeView',
    controller: 'HomeView_Controller',
    layout: 'fit',
    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        captions: {
            title: 'Tồn kho'
        },

        store: {
            type: 'browsersStore'
        },
        legend: {
            type: 'sprite',
            docked: 'bottom'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            adjustByMajorUnit: true,
            grid: true,
            fields: ['data1'],
            renderer: 'onAxisLabelRender',
            minimum: 0
        }, {
            type: 'category',
            position: 'bottom',
            grid: true,
            fields: ['type'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            title: ['Kho Hà đông', 'Kho Sơn tây', 'Kho Hải phòng', 'Kho Online'],
            xField: 'type',
            yField: ['data1', 'data2', 'data3', 'data4'],
            stacked: true,
            style: {
                opacity: 0.80
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onBarTipRender'
            }
        }]
    }]
});

