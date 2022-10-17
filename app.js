/*
 * This file is responsible for launching the application. Application logic should be
 * placed in the WEB_BASE.Application class.
 */
Ext.application({
    name: 'WEB_BASE',

    extend: 'WEB_BASE.Application',

    // Simply require all classes in the application. This is sufficient to ensure
    // that all WEB_BASE classes will be included in the application build. If classes
    // have specific requirements on each other, you may need to still require them
    // explicitly.
    //
    requires: [
        'WEB_BASE.*'
    ]
});
