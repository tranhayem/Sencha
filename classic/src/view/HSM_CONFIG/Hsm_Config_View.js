Ext.define('WEB_BASE.view.HSM_CONFIG.Hsm_Config_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Hsm_Config_View',
    id: 'Hsm_Config_View',
    controller: 'Hsm_Config_ViewController',
    viewModel: {
        type: 'Hsm_Config_ViewModel'
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
            fieldLabel: 'Lib Path',
            width: "100%"
        },{
            xtype: 'textfield',
            margin: 5,
            fieldLabel: 'Private Key',
            width: '100%'
        },{
            xtype: 'textfield',
            margin: 5,            
            width: '100%',
            fieldLabel: 'Slot'
        },{
            xtype: 'textfield',
            margin: 5,
            fieldLabel: 'Alias',            
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