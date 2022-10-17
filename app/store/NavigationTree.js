Ext.define('WEB_BASE.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    storeId: 'NavigationTree',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'rowCls', type: 'string' },
        {
            name: 'iconCls', type: 'string',
            convert: function (val) {
                return val + ' iconMenu';
            }
        },
        { name: 'routeId', type: 'string' },
        { name: 'viewType', type: 'string' },
        { name: 'leaf' },
        { name: 'action', type: 'string' },
        { name: 'type', type: 'number' },
        { name: 'index', type: 'number' }
    ],
    sorters: [{
        property: 'index',
        direction: 'DESC'
    }],
    loadMenu: function (callback) {
        this.setProxy({
            type: 'ajax',
            url: config.getAppBaseUrl() + 'menu/menu_tree',
            actionMethods: {
                read: 'POST'
            },
            paramsAsJson: true,
            noCache: false,
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'authorization': config.getToken()
            },
            timeout: 60000,
            reader: {
                type: 'json',
                rootProperty: 'children'
            }
        });
        this.load();

        this.on({
            load: function (tree, records, successful, operation, node, eOpts) {
                //console.log(records);
                if (callback != null) {
                    //console.log(records);
                    if (records != null) {
                        if (records.length == 0) {
                            successful = false;
                        }
                    }
                    else {
                        successful = false;
                    }


                    callback.call(this, successful, records, operation);
                }
            }
        });
    },
    root: {
        expanded: true,
        children: [
            {
                text: 'Tin tức',
                iconCls: 'x-fa fa-cogs',
                viewType: 'Tin_tuc_View',
                routeId: 'tin_tuc',
                leaf: true,
                index: 4
            },
            {
                text: 'Cộng đồng',
                iconCls: 'x-fa fa-home',
                viewType: 'Cong_dong_View',
                routeId: 'cong_dong',
                leaf: true,
                index: 3
            },
            {
                text: 'Hồ sơ',
                iconCls: 'x-fa fa-user-shield',
                viewType: 'Hoso_View',
                routeId: 'hoso',
                index: 2,
                children: [
                    {
                        text: 'Hồ sơ',
                        iconCls: 'x-fa fa-user-shield',
                        viewType: 'Ho_so_View',
                        routeId: 'ho_so',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Công việc',
                iconCls: 'x-fa fa-bars',
                viewType: 'Cong_viec_View',
                routeId: 'cong_viec',
                leaf: true,
                index: 1
            }
        ]
    }
});