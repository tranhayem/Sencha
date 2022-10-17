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
                text: 'HSM Config',
                iconCls: 'x-fa fa-cogs',
                viewType: 'Hsm_Config_View',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true,
                index: 4
            },
            {
                text: 'Bank API',
                iconCls: 'x-fa fa-home',
                viewType: 'Bank_API_View',
                routeId: 'bank_api', // routeId defaults to viewType
                leaf: true,
                index: 3
            },
            {
                text: 'Authen Client',
                iconCls: 'x-fa fa-user-shield',
                viewType: 'Authen_Client_View',
                routeId: 'authen_client', // routeId defaults to viewType
                leaf: true,
                index: 2
            },
            {
                text: 'TXN Record',
                iconCls: 'x-fa fa-bars',
                viewType: 'TXN_Record_View',
                routeId: 'txn_record', // routeId defaults to viewType
                leaf: true,
                index: 1
            }
        ]
    }
});