Ext.define('WEB_BASE.view.BankAPI.Bank_API_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Bank_API_View',
    id: 'Bank_API_View',
    controller: 'Bank_API_ViewController',
    viewModel: {
        type: 'Bank_API_ViewModel'
    },
    layout: 'vbox',
    items: [{
        xtype: 'fieldset',
        layout: 'vbox',
        width: 400,
        margin: 5,
        items: [{
            xtype: 'fieldset',
            title: 'Header Parameter',
            layout: 'vbox',
            width: "100%",
            items:[{
                xtype: 'textfield',
                margin: 5,
                fieldLabel: 'Param 1',
                width: "100%"
            },{
                xtype: 'textfield',
                margin: 5,
                fieldLabel: 'Param 2',
                width: '100%'
            },{
                xtype: 'textfield',
                margin: 5,            
                width: '100%',
                fieldLabel: 'Param 3'
            },{
                xtype: 'textfield',
                margin: 5,
                fieldLabel: 'Param 4',      
                width: '100%'
            }]
        },{
            xtype: 'fieldset',
            layout: 'vbox',
            width: "100%",
            items:[{
                xtype: 'textfield',
                margin: 5,
                fieldLabel: 'Timeout',
                width: "100%"
            },{
                xtype: 'textfield',
                margin: 5,
                fieldLabel: 'Url Push',
                width: '100%'
            }]
        },{
            layout: 'hbox',
            width: '100%',
            items: [{
                flex: 1,
                border: false
            },{
                xtype: 'button',
                margin: 5,
                iconCls: 'x-fa fa-save',
                text: 'Save'
            },{
                xtype: 'button',
                margin: 5,
                iconCls: 'x-fa fa-undo',
                text: 'Cancel'
            },{
                flex: 1,
                border: false
            }]
        }]
    }]
})