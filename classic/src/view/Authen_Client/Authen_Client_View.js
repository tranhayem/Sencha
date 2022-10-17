Ext.define('WEB_BASE.view.Authen_Client.Authen_Client_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Authen_Client_View',
    id: 'Authen_Client_View',
    controller: 'Authen_Client_ViewController',
    viewModel: {
        type: 'Authen_Client_ViewModel'
    },
    layout: 'vbox',
    items: [{
        xtype: 'fieldset',
        layout: 'vbox',
        width: 400,
        margin: 5,
        items:[{
            xtype: 'textfield',
            margin: 5,
            fieldLabel: 'End Point 1',
            width: "100%"
        },{
            xtype: 'textfield',
            margin: 5,
            fieldLabel: 'End Point 2',
            width: '100%'
        },{
            xtype: 'textfield',
            margin: 5,            
            width: '100%',
            fieldLabel: 'End Point 3'
        },{
            xtype: 'textfield',
            margin: 5,
            fieldLabel: 'End Point 4',      
            width: '100%'
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