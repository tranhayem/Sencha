Ext.define('WEB_BASE.view.login.RegisterDemo_Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.RegisterDemo_Controller',
    control: {
        '#btnThoat': {
            click: 'onThoat'
        },
        '#btnDangKy': {
            click: 'onChon'
        }
    },
    onThoat: function () {
        this.getView().up('window').close();
    },
    Validate: function () {
        var mes = "";
        var viewmodel = this.getViewModel();
        if (viewmodel.get('user.password') != viewmodel.get('repassword')) {
            mes = "Mật khẩu không trùng nhau! bạn hãy nhập lại mật khẩu";
            return mes;
        }

        return mes;
    },
    onChon: function () {
        var me = this;
        var viewmodel = this.getViewModel();
        var mes = me.Validate();
        if (mes == "") {
            // me.getView().setLoading("Đang gửi thông tin đăng ký");
            var params = new Object();
            params = viewmodel.get('user');
            if (params.middlename == "") {
                params.fullname = params.firstname + " " + params.lastname;
            }
            else {
                params.fullname = params.firstname + " " + params.middlename + " " + params.lastname;
            }
            params = JSON.stringify({
                firstname: params.firstname,
                middlename: params.middlename,
                lastname: params.lastname,
                fullname: params.fullname,
                username: params.username,
                password: params.password,
                email: params.email,
                phone: params.phone,
                orgcode: params.orgcode
            }),

                WEB_BASE.Ajax.post('reg/doregister', params,
                    function (success, response, options) {
                        me.getView().setLoading(false);
                        var response = Ext.decode(response.responseText);
                        if (success) {
                            var mes = "Đăng ký thành công";
                            if (response.status == 4) {
                                mes = "Mã tổ chức không tồn tại!"
                            }
                            else if (response.status == 1) {
                                mes = "Email đã tồn tại!"
                            }
                            else if (response.status == 2) {
                                mes = "Tên đăng nhập đã tồn tại!"
                            }
                            else if (response.status == 3) {
                                mes = "Đăng ký thất bại!"
                            }

                            Ext.MessageBox.show({
                                title: "Thông báo",
                                msg: mes,
                                buttons: Ext.MessageBox.YES,
                                buttonText: {
                                    yes: 'Đóng',
                                }
                            });
                        } else {
                            Ext.MessageBox.show({
                                title: "Thông báo",
                                msg: "Đăng ký thất bại",
                                buttons: Ext.MessageBox.YES,
                                buttonText: {
                                    yes: 'Đóng',
                                }
                            });
                        }
                    })
        }
        else {
            Ext.MessageBox.show({
                title: "Thông báo",
                msg: mes,
                buttons: Ext.MessageBox.YES,
                buttonText: {
                    yes: 'Đóng',
                }
            });
        }
    }
})