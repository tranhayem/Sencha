Ext.define('WEB_BASE.Utils', {
	extend: 'Ext.mixin.Observable',
	statics: {
		url: 'http://localhost:8990/gsmartcore',
		deviceid: 'devsim-0002',
		termid: 'term-0004',
		clientid: 'devops01',
		host: 'gpay.vn',
		port: 8083,
		porderTaskRunner: null
	}
});