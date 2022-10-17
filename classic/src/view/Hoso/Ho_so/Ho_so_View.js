Ext.define('WEB_BASE.view.Ho_so.Ho_so_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Ho_so_View',
    id: 'Ho_so_View',

    controller: 'Ho_so_ViewController',
    viewModel: {
        type: 'Ho_so_ViewModel'
    },

    defaults: {
        collapsible: false,
        split: true,
        bodyPadding: 10
    },
    layout: 'border',
    items: [
        {
            xtype: '',
            title: 'xinchao',
            region: 'west',
            width: '30%',
            margin: '20 10 20 20'
        },
        {
            region: 'center',
            reference: 'mainContainerWrap',
            layout: 'border',
            border: false,
            height: Ext.Element.getViewportHeight() - 35,
            animatePolicy: {
                x: true,
                width: true
            },
            items: [
                {
                    region: 'north',
                    reference: 'northContainer',
                    scrollable: true,
                    width: '100%',
                    margin: '0 2 0 0',
                    items: [{
                        xtype: 'treelist',
                        // style: "font-size:10px;",
                        w: '100%',
                        reference: 'navigationTreeList',
                        itemId: 'navigationTreeList',
                        ui: 'navigation',
                        store: 'NavigationTree',
                        expanderFirst: false,
                        expanderOnly: false,
                        // listeners: {
                        //     selectionchange: 'onNavigationTreeSelectionChange'
                        // }
                    }]
                },
                {
                    xtype: 'container',
                    region: 'center',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});