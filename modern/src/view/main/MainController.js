Ext.define('WEB_BASE.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnMathRouter'
            }
        }
    },
    routes: {
        ':node': 'onRouteChange',
        ':node/:id(/:args)?': 'onRouteDataChange'
    },
    control: {
    },
    lastView: null,
    init: function (view) {
        var viewmodel = this.getViewModel();
        var me = this,
            refs = me.getReferences();
        //console.log(view);
        me.callParent([view]);

        var session = WEB_BASE.util.State.get('session');
        viewmodel.set('fullname', session.fname);

        me.nav = refs.navigation;

        if ('' == window.location.hash) {
            me.redirectTo('mobilemenu');
        } else {
            var hash = window.location.hash.substring(1);
            console.log(' hash view: ', hash);
            var listhast = hash.split('/');
            if (listhast.length > 1)
                me.onRouteDataChange(listhast[0], listhast[1], listhast[2]);
            else
                me.onRouteChange(hash);
        }

    },
    onUnMathRouter: function () {
        this.redirectTo('mobilemenu');
    },
    beforeRender: function () {
        // var tbname = this.lookup('tbname');
        // tbname.text = config.getFname();
        // console.log('beforeRender - location hash: ', window.location.hash);
        var hash = window.location.hash.substring(1);
        console.log(' hash view: ', hash);
        this.setCurrentView(hash);
    },
    setCurrentView: function (hashTag) {
        console.log('setCurrentView:' + hashTag);
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel;

        var activeItem = mainCard.getActiveItem();
        var store = Ext.getStore('NavigationTree');
        var node = store.findNode('routeId', hashTag);  // console.log(node);
        var xtype = '';

        if (node) {
            xtype = node.get('viewType');
        }

        if (hashTag == 'mobilemenu') {
            xtype = 'TabMenuView';
        }

        if (xtype == '' || xtype == null) {
            this.redirectTo('mobilemenu');
        }
        else {
            if (activeItem) {
                activeItem.destroy();
            }
            var item = mainCard.child('component[routeId=' + hashTag + ']');
            if (!item) {
                //check truong hop chuyen url ma chua co view thi tu dong chuyen ve menu chinh
                try {
                    item = mainCard.push({
                        xtype: xtype,
                        routeId: hashTag
                    });

                    activeItem = mainCard.getActiveItem();
                    if (activeItem.xtype == 'TabMenuView') {
                        Ext.getCmp('maintoolbar').setHidden(false);
                    } else {
                        Ext.getCmp('maintoolbar').setHidden(true);
                        mainCard.setHeight('100vh');
                    }
                }
                catch (err) {
                    console.log(err);
                    Ext.Msg.alert('Thông báo', 'Chức năng đang phát triển! Bạn vui lòng quay lại sau!', function () {
                        me.redirectTo('mobilemenu');
                    });
                }
            }
        }

    },

    onNavigationTreeSelectionChange: function (tree, node) {
        var to = node && (node.get('routeId') || node.get('viewType'));
        var hash = window.location.hash.substring(1);
        if (to.substring(2) == hash.split('/')[0]) {
            this.redirectTo(hash);
        }
        else
            this.redirectTo(to);
    },

    onToggleNavigationSize: function () {
        var me = this,
            refs = me.getReferences(),
            navigationList = refs.navigationTreeList,
            west = refs.westContainer,
            center = refs.mainCardPanel,
            collapsing = !navigationList.getMicro(),
            new_width = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();

            refs.senchaLogo.setWidth(new_width);

            treelist.setWidth(new_width);
            treelist.setMicro(collapsing);

            Ext.resumeLayouts(); // do not flush the layout here...

            // No animation for IE9 or lower...
            // wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            // wrapContainer.updateLayout();  // ... since this will flush them
        }
        else {
            navigationList.setMicro(collapsing);

            // Start this layout first since it does not require a layout
            refs.senchaLogo.animate({ dynamic: true, to: { width: new_width } });

            // Directly adjust the width config and then run the main wrap container layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            navigationList.width = new_width;
            west.setWidth(new_width);
            center.setWidth(center.width + 250 - new_width);
            west.updateLayout();
            center.updateLayout();
            // navigationList.el.addCls('nav-tree-animating');



            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            // if (collapsing) {
            //     navigationList.on({
            //         afterlayoutanimation: function () {
            //             navigationList.el.removeCls('nav-tree-animating');
            //         },
            //         single: true
            //     });
            // }
        }
    },

    onMainViewRender: function () {
        if (!window.location.hash) {
            this.redirectTo("dashboard");
        }
    },


    onRouteChange: function (id) {
        console.log('onRouteChange:' + id);
        this.setCurrentView(id);
    },
    onRouteDataChange(hashTag, id, args) {
        console.log('onRouteDataChange: ' + hashTag + ' ' + id + ' ' + args);

        args = Ext.Array.clean((args || '').split('/'));
        hashTag = (hashTag || '').toLowerCase();
        var session = WEB_BASE.util.State.get('session');
        if (!session) {
            this.redirectTo("login");
        }
        var me = this,
            refs = me.getReferences(),
            mainCard = refs.mainCardPanel;

        var activeItem = mainCard.getActiveItem();
        var store = Ext.getStore('NavigationTree');
        var node = store.findNode('routeId', hashTag) || store.findNode('viewType', hashTag);
        var xtype_edit = '';

        // console.log('args: ' + args);

        if (node) {
            if (args == 'edit') {
                xtype_edit = node.get('xtype_edit');
            } else if (args == 'edit_detail') {
                xtype_edit = node.get('xtype_edit_detail');
            }

        }
        if (xtype_edit == '' || xtype_edit == null) {
            this.redirectTo('mobilemenu');
        }
        else {
            if (activeItem) {
                activeItem.destroy();
            }
            var item = mainCard.child('component[routeId=' + xtype_edit + ']');
            if (!item) {
                try {
                    if (args.toString().includes('edit')) {
                        item = mainCard.push({
                            xtype: xtype_edit,
                            routeId: xtype_edit
                        });
                        me.fireEvent('loaddata', id, args);
                    } else {
                        item = mainCard.push({
                            xtype: xtype_edit,
                            routeId: xtype_edit
                        });
                        me.fireEvent('newdata', node, id);
                    }

                    activeItem = mainCard.getActiveItem();
                    if (activeItem.xtype == 'MobileMenu') {
                        Ext.getCmp('maintoolbar').setHidden(false);
                    } else {
                        Ext.getCmp('maintoolbar').setHidden(true);
                        Ext.getCmp('mainCardPanel').setHeight('100vh');
                    }
                }
                catch (err) {
                    console.log(err);
                    Ext.Msg.alert('Thông báo', 'Chức năng đang phát triển! Bạn vui lòng quay lại sau!', function () {
                        me.redirectTo('mobilemenu');
                    });
                }
            }
        }
    },
    onSearchRouteChange: function () {
        this.setCurrentView('searchresults');
    },

    onSwitchToModern: function () {
        Ext.Msg.confirm('Switch to Modern', 'Are you sure you want to switch toolkits?',
            this.onSwitchToModernConfirmed, this);
    },

    onSwitchToModernConfirmed: function (choice) {
        if (choice === 'yes') {
            var s = window.location.search;

            // Strip "?classic" or "&classic" with optionally more "&foo" tokens
            // following and ensure we don't start with "?".
            s = s.replace(/(^\?|&)classic($|&)/, '').replace(/^\?/, '');

            // Add "?modern&" before the remaining tokens and strip & if there are
            // none.
            window.location.search = ('?modern&' + s).replace(/&$/, '');
        }
    },
    closeSession: function () {
        config.setToken(null);
        WEB_BASE.util.State.set('session', null);
        this.getView().destroy();
        Ext.create('WEB_BASE.view.login.Login', { fullscreen: true });
    },
    onInfo: function (e) {
        var menu_grid = new Ext.menu.Menu({
            items: [{
                text: 'Thay đổi mật khẩu',
                iconCls: 'x-fa fa-key',
                handler: 'onChangePass'
            }
            ]
        })
        e.stopEvent();
        menu_grid.showAt(e.getXY());
    },
    onChangePass: function () {
        var me = this;
        var data = WEB_BASE.util.State.get('session');
        var session = data ? WEB_BASE.model.Session.loadData(data) : null;

        var form = Ext.create('Ext.window.Window', {
            height: 200,
            closable: true,
            title: 'Thay đổi mật khẩu',
            resizable: false,
            modal: true,
            border: false,
            closeAction: 'destroy',
            width: 300,
            bodyStyle: 'background-color: transparent',
            layout: {
                type: 'fit', // fit screen for window
                padding: 5
            },
            items: [{
                xtype: 'ChangePass',
                viewModel: {
                    data: {
                        userid: session.get('id'),
                        username: session.get('username')
                    }
                }
            }]
        });
        form.show();

        form.down('#ChangePass').on('Success', function () {
            form.close();
            me.onLogout();
        })
    },
    onLogout: function () {
        // config.setToken(null);
        // WEB_BASE.util.State.set('session', null);
        // Ext.Ajax.setDefaultHeaders({ authorization: '' });
        // this.getView().destroy();
        // Ext.create('WEB_BASE.view.login.Login', { fullscreen: true });
        // console.log('onLogout:');
        var self = this;
        WEB_BASE.model.Session.logout()
            .then(function (session) {
                self.closeSession();
            })
            .catch(function (errors) {
                //console.log('Error on user logout', errors);
                console.log('Error on user logout');
                self.closeSession();
            });
        /*Ext.Ajax.request({
            url :  'http://localhost:8990/gsmartcore/api/v1/menu/menu_data',
            //url: 'http://localhost:8080/users/me',
            method:'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    //'authorization': config.getToken()
            },
            callback: function() {
                console.log('Test finished');
            }
        });*/
    }
});