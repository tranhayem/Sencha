Ext.define('WEB_BASE.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    id: 'app-main',
    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: 'main',

    cls: 'sencha-dash-viewport',
    itemId: 'mainView',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        render: 'onMainViewRender'
    },

    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            // hoanglv -style
            height: 35,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="resources/images/icons/i8-factory.png">WEB-APP</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    ui: 'header',
                    iconCls: 'x-fa fa-bars',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize'
                },
                {
                    xtype: 'label',
                    // hoanglv - style
                    style: "font-size:13px;font-weight:bold;margin-left:5px;text-transform:uppercase;color:#fff",
                    //
                    bind: {
                        text: '{selected_menu}'
                    },
                },
                '->',
                {
                    iconCls: 'x-fa fa fa-window-maximize',
                    //cls       : 'icon-fullscreen',
                    ui: 'header',
                    tooltip: 'FullScreen',
                    handler: 'onFullScreen'
                },
                {
                    iconCls: 'x-fa fa fa-power-off',
                    ui: 'header',
                    tooltip: 'Logout',
                    handler: 'onLogout'
                },
                {
                    xtype: 'tbtext',
                    reference: 'tbname',
                    itemId: 'tbname',
                    // hoanglv - style
                    style: "color:#fff",
                    //
                    text: 'Unname',
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    reference: 'tbavatar',
                    itemId: 'tbavatar',
                    id: 'id_avatar',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt: 'current user image',
                    bind: {
                        src: '{avatar}'
                    },
                    listeners: {
                        el: {
                            click: 'onInfo'
                        }
                    }
                }
            ]
        },
        {
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
                    region: 'west',
                    reference: 'westContainer',
                    scrollable: 'y',
                    width: 250,
                    margin: '0 2 0 0',
                    items: [{
                        xtype: 'treelist',
                        // style: "font-size:10px;",
                        height: '100%',
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
