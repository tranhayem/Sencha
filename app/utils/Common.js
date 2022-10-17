Ext.define('WEB_BASE.util.Common', {
    singleton: true,
    alternateClassName: [
        'common'
    ],
    Check_Object_Permission: function () {
        var data = WEB_BASE.util.State.get('session');
        var list_function = data.list_function;

        for (var i = 0; i < list_function.length; i++) {
            var func = list_function[i];
            var a = '#' + func.function_id_item;
            var item = Ext.first(a);
            // var item = me.lookupReference(func.function_id_item);
            // console.log(a);
            // console.log(item);
            if (item != null) {
                item.setDisabled(func.isreadonly);
            }
        }
    },
    Check_Menu_Permission: function (me) {
        var data = WEB_BASE.util.State.get('session');
        var list_function = data.list_function;

        for (var i = 0; i < list_function.length; i++) {
            var func = list_function[i];
            var item = me.queryById(func.function_id_item);

            if (item != null) {
                item.setDisabled(func.isreadonly);
            }
        }
    },
    Check_ActionColum_Permission: function (itemref) {
        var data = WEB_BASE.util.State.get('session');
        var list_function = data.list_function;

        for (var i = 0; i < list_function.length; i++) {
            var func = list_function[i];
            if (func.function_id_item == itemref) {
                return func.isreadonly;
            }
        }
    },
    ThongBao_ThanhCong: function (title, msg) {
        var massage = Ext.MessageBox.show({
            title: title,
            msg: msg,
            icon: Ext.Msg.INFO,
            buttons: Ext.MessageBox.YES,
            buttonText: {
                yes: 'Đóng',
            }
        });
        return massage;
    },
    ThongBao_ThanhCong: function (title, msg) {
        var massage = Ext.MessageBox.show({
            title: title,
            msg: msg,
            icon: Ext.Msg.ERROR,
            buttons: Ext.MessageBox.YES,
            buttonText: {
                yes: 'Đóng',
            }
        });
        return massage;
    }
})