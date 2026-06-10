export default {
  async fetch(request) {
    const url = new URL(request.url);
    const origin = 'https://ucfzem.github.io/tanger';
    const proxyUrl = origin + url.pathname + url.search;
    const proxyReq = new Request(proxyUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
    proxyReq.headers.delete('Host');
    const response = await fetch(proxyReq);
    const headers = new Headers(response.headers);
    headers.set('cache-control', 'no-cache, no-store, must-revalidate');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
};
