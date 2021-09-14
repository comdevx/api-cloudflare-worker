const Router = require('cloudworker-router')

const router = new Router()

router.get('/', async (ctx) => {
    ctx.response.headers = { 'Content-Type': 'application/json' }
    ctx.body = JSON.stringify({ msg: 'test' })
    ctx.status = 200
})

addEventListener('fetch', event => {
    event.respondWith(router.resolve(event))
})