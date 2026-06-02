export default {
  async fetch(request) {
    const url = new URL(request.url);
    const origin = 'https://ucfzem.github.io';
    const proxyUrl = origin + url.pathname + url.search;
    const proxyReq = new Request(proxyUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    proxyReq.headers.delete('Host');
    return fetch(proxyReq);
  }
};
