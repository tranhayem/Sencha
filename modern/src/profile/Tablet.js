Ext.define('WEB_BASE.profile.Tablet', {
    extend: 'Ext.app.Profile',

    // requires: [
    //     'WEB_BASE.view.tablet.*'
    // ],

    // Map tablet/desktop profile views to generic xtype aliases:
    //
    views: {
        // email: 'WEB_BASE.view.tablet.email.Email',
        // inbox: 'WEB_BASE.view.tablet.email.Inbox',
        // compose: 'WEB_BASE.view.tablet.email.Compose',

        // searchusers: 'WEB_BASE.view.tablet.search.Users'
    },

    isActive: function () {
        return !Ext.platformTags.phone;
    }
    /*requires: [
        'WEB_BASE.view.phone.*'
    ],

    // Map phone profile views to generic xtype aliases:
    //
    views: {
        email: 'WEB_BASE.view.phone.email.Email',
        inbox: 'WEB_BASE.view.phone.email.Inbox',
        compose: 'WEB_BASE.view.phone.email.Compose',

        searchusers: 'WEB_BASE.view.phone.search.Users'
    },

    isActive: function () {
        return Ext.platformTags.phone;
    },

    launch: function () {
        Ext.getBody().addCls('phone');
    }*/
});
