module.exports = (ctx, data, status = 200) => {
    ctx.body = JSON.stringify(data)
    ctx.status = status
    return ctx
}