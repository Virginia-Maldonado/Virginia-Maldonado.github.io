export default async function handler(req, res) {
  const { code } = req.query;
  if (!code) return res.status(400).send('Missing code');

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();
  const token = data.access_token;
  const status = token ? 'success' : 'error';
  const payload = token
    ? JSON.stringify({ token, provider: 'github' })
    : (data.error_description || data.error || 'auth_error');

  res.setHeader('Content-Type', 'text/html');
  res.send(`<!doctype html><html><body><script>
    (function(){
      var msg = 'authorization:github:${status}:' + ${JSON.stringify(payload)};
      function receive(e){ window.opener.postMessage(msg, e.origin); }
      window.addEventListener('message', receive, false);
      window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`);
}
