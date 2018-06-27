// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        // registration worked
        if (registration.installing) {
            console.log('Service worker installing');
        } else if (registration.waiting) {
            console.log('Service worker waiting');
        } else if (registration.active) {
            console.log('Service worker active');
        }
        console.log('Registration completed. Service Worker scope ' + registration.scope);
    }).catch(function(err) {
        console.log("service workker failed to load", err);
    });
}