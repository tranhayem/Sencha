Ext.define('WEB_BASE.view.tabmenu.TabMenuView', {
    extend: 'Ext.tab.Panel',
    xtype: 'TabMenuView',
    id: 'TabMenuView',
    itemId: 'TabMenuView',
    requires: ['Ext.layout.overflow.Scroller'],
    tabBarPosition: 'bottom',
    shadow: 'true',
    tabBar: {
        layout: {
            overflow: 'scroller'
        }
    },
    items: [{
        title: 'Tài sản',
        iconAlign: 'top',
        iconCls: 'x-fa fa-money-check iconRed',
        margin: 1,
        html: '1234'
    }, {
        title: 'Kho',
        iconAlign: 'top',
        iconCls: 'x-fa fa-home',
        margin: 1,
        html: '12356'
    }, {
        title: 'Danh mục',
        iconAlign: 'top',
        iconCls: 'x-fa fa-align-justify',
        margin: 1
    }, {
        title: 'Cài đặt',
        iconAlign: 'top',
        iconCls: 'x-fa fa-cog',
        userCls: 'iconRed',
        margin: 1,
        html: '123564554'
    }]

});
