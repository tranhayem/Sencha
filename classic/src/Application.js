Ext.define('WEB_BASE.Application', {
    extend: 'Ext.app.Application',

    name: 'WEB_BASE',
    requires: [
        'WEB_BASE.util.State',
        'WEB_BASE.model.Session',
        'WEB_BASE.view.*',
        'Ext.grid.*',
        'Ext.grid.plugin.Exporter'
    ],
    stores: [
        'NavigationTree'
    ],

    launch: function () {
        var me = this;
        console.log('.... launch classic app!');

        // config.setAppBaseUrl(window.location.origin + '/');
        // config.setBack(window.location.origin + '/oauth/');

        // Check if session exists
        var data = WEB_BASE.util.State.get('session'),
            session = data ? WEB_BASE.model.Session.loadData(data) : null;
        var storeMenu = Ext.getStore('NavigationTree');
        console.log(session);
        // If session valid --> Load main app
        if (session && session.isValid()) {
            //console.log('Session is valid --> Open main app', session);   
            config.setToken('Bearer ' + session.get('token'));
            config.setFname(session.get('fname'));

            Ext.Ajax.setDefaultHeaders({ authorization: config.getToken() });
            //console.log(config.getEnableSSO());
            // storeMenu.loadMenu(function (success, records, operation) {
            //     //console.log(success,records, operation);  
            //     if (!success) {
            //         if (operation.error == undefined) {
            //             Ext.Msg.alert('Warning', 'Can load resource data, Please check your network connection!', function () {
            //                 window.location.reload();
            //             });
            //         } else {
            //             if (403 == operation.error.status || 401 == operation.error.status) {
            //                 Ext.Msg.alert('Warning', 'User token expire, Please re-login to continue', function () {
            //                     config.setToken(null);
            //                     WEB_BASE.util.State.set('session', null);
            //                     Ext.Ajax.setDefaultHeaders({ authorization: '' });
            //                     var main = Ext.getCmp('app-main');
            //                     if (main) {
            //                         main.destroy();
            //                     }
            //                     Ext.create('WEB_BASE.view.login.Login', { fullscreen: true });
            //                 });
            //             }
            //             else {
            //                 Ext.Msg.alert('Thông báo', 'Không thể load dữ liệu. Hãy kiểm tra kết nối!', function () {
            //                     window.location.reload();
            //                 });
            //             }
            //         }
            //     } else {
            //         Ext.create('WEB_BASE.view.main.Main', { fullscreen: true });
            //     }
            //     //Ext.create('WEB_BASE.view.main.Main', { fullscreen: true });
            // });
            Ext.create('WEB_BASE.view.main.Main', { fullscreen: true });


            // If session is not valid --> Go to login screen
        } else {
            console.log('Session is not valid --> Go login');
            config.setToken(null);
            Ext.Ajax.setDefaultHeaders({ authorization: '' });
            var main = Ext.getCmp('app-main');
            if (main) {
                main.destroy();
            }
            Ext.create('WEB_BASE.view.login.Login', { fullscreen: true });
        }

        Ext.EventManager.onWindowResize(function () {
            var main = Ext.getCmp('app-main');
            if (main) {
                var refs = main.getReferences()
                refs.mainContainerWrap.height = Ext.Element.getViewportHeight() - 35;
            }

        });
    },
    onAppUpdate: function () {
        window.location.reload();
    }
});