 
 export function parseUrl() {
    return (window.location.href
        .split('?')[1] || '')
        .split('&')
        .map(kv => kv.split('='))
        .reduce((params, [k, v]) => {
            params[k] = v;
            return params;
        }, {});
}
    