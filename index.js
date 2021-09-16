const Router = require('./src')
const { response } = require('./helpers')

const router = new Router()

router.get('/', async (ctx) => {
    const data = { msg: 'test' }
    response(ctx, data)
})

addEventListener('fetch', event => {
    event.respondWith(router.resolve(event))
})