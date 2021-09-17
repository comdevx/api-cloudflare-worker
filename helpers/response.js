module.exports = (ctx, data, status = 200) => {
    ctx.response.headers = { 'Content-Type': 'application/json' }
    ctx.body = JSON.stringify(data)
    ctx.status = status
    return ctx
}