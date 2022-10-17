Ext.define('WEB_BASE.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    id: 'app-main',
    requires: [
        'Ext.Button',
        'Ext.navigation.View',
        'Ext.dataview.plugin.ItemTip',
        // 'Ext.plugin.Responsive'
    ],

    controller: 'main',
    viewModel: 'MainModel',
    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    layout: 'vbox',
    items: [
        {
            xtype: 'maintoolbar',
            id: 'maintoolbar',
            userCls: 'main-toolbar shadow'
        },
        {
            xtype: 'navigationview',
            flex: 1,
            id: 'mainCardPanel',
            reference: 'mainCardPanel',
            userCls: 'main-container',
            navigationBar: false,
            layout: {
                type: 'card',
                animation: {
                    duration: 300,
                    easing: 'ease-out',
                    type: 'fade',
                    direction: 'left'
                }
            }
        }]
});
