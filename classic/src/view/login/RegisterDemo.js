Ext.define('WEB_BASE.view.login.RegisterDemo', {
    extend: 'Ext.form.Panel',
    xtype: 'RegisterDemo',
    id: 'RegisterDemo',
    controller: 'RegisterDemo_Controller',
    viewModel: {
        type: 'RegisterDemo_ViewModel'
    },
    layout: 'vbox',
    items: [{
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Họ',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.firstname}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Đệm',
            bind: '{user.middlename}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Tên',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.lastname}'
        }]
    }, {
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Tên đăng nhập',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.username}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            inputType: 'password',
            fieldLabel: 'Mật khẩu',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.password}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            inputType: 'password',
            fieldLabel: 'Nhập lại MK',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{repassword}'
        }]
    }, {
        layout: 'hbox',
        width: '100%',
        items: [{
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Mã tổ chức',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.orgcode}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            inputType: 'email',
            fieldLabel: 'Email',
            allowBlank: false,
            blankText: 'Trường bắt buộc nhập',
            bind: '{user.email}'
        }, {
            xtype: 'textfield',
            margin: 5,
            flex: 1,
            fieldLabel: 'Số điện thoại',
            bind: '{user.phone}',
            maskRe: /[0-9]/
        }]
    }],
    dockedItems: [{
        layout: 'hbox',
        dock: 'bottom',
        items: [{
            flex: 1,
            border: false
        }, {
            xtype: 'button',
            text: 'Đăng ký',
            iconCls: 'x-fa fas fa-paper-plane',
            itemId: 'btnDangKy',
            formBind: true,
            margin: 5,
            width: 90
        }, {
            xtype: 'button',
            text: 'Thoát',
            itemId: 'btnThoat',
            iconCls: 'x-fa fas fa-window-close',
            margin: 5,
            width: 90
        }, {
            flex: 1,
            border: false
        }]
    }]
});