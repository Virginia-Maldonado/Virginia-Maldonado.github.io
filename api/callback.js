module.exports = async function handler(req, res) {
  const code = req.query.code;
  if (!code) return res.status(400).send('Missing code');

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code: code,
    }),
  });

  const data = await tokenRes.json();
  const token = data.access_token;

  if (!token) {
    const errMsg = data.error_description || data.error || 'auth_error';
    return res.send(
      '<!doctype html><html><body><script>' +
      '(function(){' +
      'window.opener.postMessage("authorization:github:error:' + errMsg + '","*");' +
      'window.close();' +
      '})();' +
      '</script></body></html>'
    );
  }

  const payload = JSON.stringify({ token: token, provider: 'github' });
  res.setHeader('Content-Type', 'text/html');
  res.send(
    '<!doctype html><html><body><script>' +
    '(function(){' +
    'var payload = ' + JSON.stringify(payload) + ';' +
    'var msg = "authorization:github:success:" + payload;' +
    'function receive(e){ window.opener.postMessage(msg, e.origin); }' +
    'window.addEventListener("message", receive, false);' +
    'window.opener.postMessage("authorizing:github","*");' +
    '})();' +
    '</script></body></html>'
  );
};
