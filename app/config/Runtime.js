Ext.define('WEB_BASE.config.Runtime', {
    alternateClassName: [
        'config'
    ],
    singleton: true,
    config: {
        appBaseUrl: 'http://localhost:9091/', // đường dẫn call api trong app
        back: 'http://localhost:9091/oauth/', //đường dẫn login
        token: null,
        enableSSO: false,
        warmUpTime: 300000,
        dictionary: null,
        fname: null,
        avatar: null,
        pageSize: 25,
        // MQTT config
        deviceid: 'devsim-0002',
        termid: 'term-0004',
        clientid: 'devops01',
        host: 'gpay.vn',
        port: 8083,
        porderTaskRunner: null
    },
    constructor: function (config) {
        this.initConfig(config);
        return this;
    }
});
