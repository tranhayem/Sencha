Ext.define('WEB_BASE.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginViewCtrl',

	requires: [
		'WEB_BASE.view.main.Main',
		'WEB_BASE.util.State',
		'WEB_BASE.model.Session'
	],

	initKeyMappings: function () {
		this.getView().unmask();
		// Init key mappings
		var usernameFieldKeyMapp = new Ext.util.KeyNav({
			target: Ext.getCmp('mlogin').down('formpanel').getFields('username').el,
			enter: function (e) {
				this.getView().down('formpanel').getFields('password').focus();
			},
			scope: this
		});
		var passwordFieldKeyMapp = new Ext.util.KeyNav({
			target: Ext.getCmp('mlogin').down('formpanel').getFields('password').el,
			enter: function (e) { this.onLoginClick(); },
			scope: this
		});
	},

	onLoginClick: function () {

		var self = this,
			form = Ext.getCmp('mlogin').down('formpanel'),
			values = form.getValues();

		if (form.validate() === true) {
			try {
				Ext.getCmp('login-form-error-label').setHidden(true);

				Ext.getCmp('mlogin').mask();

				WEB_BASE.model.Session.login(values.username, values.password)
					.then(function (session) {
						config.setToken('Bearer ' + session.get('token'));
						config.setFname(session.get('fname'));
						WEB_BASE.util.State.set('session', session && session.getData(true));

						Ext.Ajax.setDefaultHeaders({ authorization: config.getToken() });
						self.getView().destroy();
						//console.log('create view port');
						// Add the main view to the viewport
						var mainView = Ext.getCmp('WEB_BASE-view-main');
						if (mainView) mainView.destroy();
						Ext.create('WEB_BASE.view.main.Main', { fullscreen: true });

						/*Ext.create({
							xtype: 'app-main',
							routeId: 'hash',
							hideMode: 'offsets'
						});*/
					})
					.catch(function (errors) {
						// Ext.Msg.alert('Thông báo', 'Lỗi đăng nhập!');
						console.log('Error on login', errors);
						try {
							if (Ext.decode(errors.responseText).description || errors.description) {
								var message = errors.description ? errors.description : Ext.decode(errors.responseText).description;
								Ext.getCmp('login-form-error-label').setHtml(message);
							} else {
								Ext.getCmp('login-form-error-label').setHtml('Unauthorized');
							}
							Ext.getCmp('login-form-error-label').setHidden(false);
						} catch (error) {

							console.log('Error catch on login', error);
							if (Ext.getCmp('mlogin')) Ext.getCmp('mlogin').unmask();
						}
					})
					.then(function (session) {
						// Ext.Msg.alert('Thông báo', 'Lỗi đăng nhập!');
						if (Ext.getCmp('mlogin')) Ext.getCmp('mlogin').unmask();
					});
			} catch (error) {
				// Ext.Msg.alert('Thông báo', 'Lỗi đăng nhập!');
				console.log('Error onLoginClick', error);
				if (Ext.getCmp('mlogin')) Ext.getCmp('mlogin').unmask()
			}
		}
	}
});