export const api = {
  icon: '🚀',
  name: 'hmac.do',
  description: 'HMAC Generation & Validation API',
  url: 'https://hmac.do/api',
  type: 'https://apis.do/crypto',
  endpoints: {
    listCategories: 'https://hmac.do/api',
    getCategory: 'https://hmac.do/:type',
  },
  site: 'https://hmac.do',
  login: 'https://hmac.do/login',
  signup: 'https://hmac.do/signup',
  subscribe: 'https://hmac.do/subscribe',
  repo: 'https://github.com/drivly/hmac.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://hmac.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
