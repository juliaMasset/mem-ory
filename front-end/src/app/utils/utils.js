export function parseUrl() {
        debugger;
        let url = window.location;
        let query = url.href.split("?")[1] || "";
        let delimiter = "&";
        let result = {};
    
        let parts = query.split(delimiter);
        
        return parts.map(items => items.split("=")).reduce((result, kv) => {
          result[kv[0]] = kv[1];
          return result;
        }, {});
        
  return result;
}