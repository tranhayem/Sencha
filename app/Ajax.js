Ext.define('WEB_BASE.Ajax', {
	extend: 'Ext.app.ViewController',
	singleton: true,
	post: function (url, params, callback) {
		var me = this;
		Ext.Ajax.request({
			url: config.getAppBaseUrl() + url,
			method: 'POST',
			cors: true,
			headers: {
				'Content-Type': "application/json"
			},
			useDefaultXhrHeader: false,
			params: params,
			success: function (response, options) {
				callback.call(me, true, response, options);
			},
			failure: function (response, options) {
				callback.call(me, false, response, options);
				console.log(response, options);
				//me.fireEvent('logout');

			}
		});
		//}

	},
	postUpload: function (url, rawdata, callback) {
		var me = this;
		Ext.Ajax.request({
			url: config.getAppBaseUrl() + url,
			method: 'POST',
			cors: true,
			rawData: rawdata,
			headers: {
				'Content-Type': null
			},
			useDefaultXhrHeader: false,
			success: function (response, options) {
				callback.call(me, true, response, options);
			},
			failure: function (response, options) {
				callback.call(me, false, response, options);
			}
		});
	},
	setProxy: function (store, url, params, callback) {
		var me = this;

		var access_token = config.getToken();
		//if(access_token==null){
		//	me.redirectTo('login', {replace: true});
		//}else{
		store.setProxy({
			type: 'ajax',
			actionMethods: {
				create: 'POST',
				read: 'POST',
				update: 'POST',
				destroy: 'POST'
			},
			url: config.getAppBaseUrl() + url,
			paramsAsJson: true,
			noCache: false,
			headers: {
				'Accept': "application/json",
				'Content-Type': "application/json"
				//					'authorization': access_token
			},
			extraParams: params,
			reader: {
				type: 'json',
				rootProperty: 'data'
			}
		});
		store.loadPage(1, {
			scope: this,
			callback: function (records, operation, success) {
				console.log(records, operation, success);
				//if(!success){
				//	me.fireEvent('logout');
				//}
				callback.call(records, operation, success);
			}
		});
		//}
	}
});