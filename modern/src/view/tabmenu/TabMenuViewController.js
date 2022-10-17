Ext.define('WEB_BASE.view.tabmenu.TabMenuViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.TabMenuViewController',
    init: function () {
        // console.log(123);
    },
    control: {
        '#TabMenuView': {
            activeItemchange: 'onTabChange'
        }
    },
    onTabChange: function (sender, value, oldValue, eOpts) {
        console.log(value);
    }
});