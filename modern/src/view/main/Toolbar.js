Ext.define('WEB_BASE.view.main.Toolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'maintoolbar',
    requires: [
        'Ext.SegmentedButton'
    ],

    items: [
        {
            xtype: 'component',
            bind: {
                html: '{menu}'
            },
            margin: '0 1 0 4',
            userCls: 'main-user-name'
        },
        '->',
        {
            xtype: 'component',
            bind: {
                html: '{fullname}'
            },
            margin: '0 1 0 4',
            userCls: 'main-user-name'
        },
        {
            iconCls: 'x-fa fa fa-power-off',
            ui: 'header',
            margin: '0 7 0 0',
            handler: 'onLogout'
        }
    ]
});
