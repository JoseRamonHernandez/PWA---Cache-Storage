

self.addEventListener('fetch', event => {
    const offLineResp = new Response(`
    Bienvenido a mi págin web
    `);


    const resp = fetch(event.request).catch( () => offLineResp);

    event.respondWith(resp);
});
