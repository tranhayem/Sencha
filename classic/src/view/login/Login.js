Ext.define('WEB_BASE.view.login.Login', {
    extend: 'Ext.panel.Panel',
    xtype: 'xlogin',

    requires: [
        'WEB_BASE.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',

    cls: 'auth-login',
    id: 'auth-login',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    plugins: 'viewport',

    items: [{
        xtype: 'panel',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        padding: '20 20',
        cls: 'auth-middle-panel',
        items: [{
            xtype: 'label',
            id: 'login-form-error-label',
            hidden: true,
            margin: '10 0 10 0',
            padding: '0 0 10 0'
        }, {
            xtype: 'label',
            style: 'font-size: 20px',
            html: 'Đăng nhập',
            margin: '10 0 10 0',
            padding: '0 0 10 0'
        }, {
            xtype: 'form',
            reference: 'form',
            layout: 'vbox',

            defaults: {
                margin: '10 0'
            },

            items: [{
                xtype: 'textfield',
                fieldLabel: "Tên đăng nhập:",
                name: 'username',
                emptyText: 'Username',
                // value: 'admin@gpay.vn',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: "Mật khẩu:",
                name: 'password',
                emptyText: 'Password',
                inputType: 'password',
                // value: 'admin123',
                allowBlank: false
            }],
            buttonAlign: 'center',
            buttons: [{
                text: 'Đăng nhập',
                iconCls: 'x-fa fa-angle-right',
                formBind: true,
                cls: 'auth-btn',
                handler: 'onLoginClick',
                margin: 5
            }]
        }]
    }],
    listeners: {
        afterrender: 'initKeyMappings'
    }
});