Ext.define('WEB_BASE.view.pages.Error404Window', {
    extend: 'WEB_BASE.view.pages.ErrorBase',
    xtype: 'page404',

    requires: [
        // 'WEB_BASE.view.authentication.AuthenticationController',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Spacer'
    ],

    header: false,

    items: [
        {
            xtype: 'container',
            width: 400,
            cls: 'error-page-inner-container',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'error-page-top-text',
                    text: '404'
                },
                {
                    xtype: 'label',
                    cls: 'error-page-desc',
                    html: '<div>Bạn không được quyền truy cập trang này!</div><div>Ấn vào <a href="#dashboard">đây</a> để quay về trang chủ.</div>'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                }
            ]
        }
    ]
});
