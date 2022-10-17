Ext.define('WEB_BASE.extend.GridComboBox', {
    extend: 'Ext.form.field.ComboBox',
    requires: ['Ext.grid.Panel'],
    alias: 'widget.GridComboBox',
    xtype: 'GridComboBox',
    emptyText: 'Combo grid..',
    createPicker: function () {
        var me = this;
        var picker,
            pickerCfg = Ext.apply({
                xtype: 'grid',
                id: me.id + '-picker',
                hideHeaders: false,
                autoScroll: true,
                pickerField: me,
                selectionModel: me.pickerSelectionModel,
                floating: true,
                hidden: true,
                store: me.getPickerStore(),
                displayField: me.displayField,
                preserveScrollOnRefresh: true,
                tpl: me.tpl,
                columns: [{
                    dataIndex: 'name',
                    text: 'Name'
                }]
            }, me.listConfig, me.defaultListConfig);

        picker = me.picker = Ext.widget(pickerCfg);
        console.log(picker);
        // picker.getNode = function () {
        //     picker.getView().getNode(arguments);
        // };
        // // We limit the height of the picker to fit in the space above
        // // or below this field unless the picker has its own ideas about that.
        // if (!picker.initialConfig.maxHeight) {
        //     picker.on({
        //         beforeshow: me.onBeforePickerShow,
        //         scope: me
        //     });
        // }
        // picker.getSelectionModel().on({
        //     beforeselect: me.onBeforeSelect,
        //     beforedeselect: me.onBeforeDeselect,
        //     selectionchange: me.onSelectionChange,
        //     scope: me
        // });

        // picker.getNavigationModel().navigateOnSpace = false;

        return picker;
    },
    onSelectionChange: function (grid, selected, eOpts) {
        this.setValue(selected[0].get(displayField));
        this.collapse();
    }
});