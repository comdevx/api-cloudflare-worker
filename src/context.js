const parser = require('./parser')

module.exports = class Context {
  constructor(event) {
    this.request = parser.parseRequest(event.request)
    this.event = event
    this.state = {}
    this.cloned = false
    this.response = {
      headers: { 'Content-Type': 'application/json' },
    }
    this.body = ''
    this.status = 404

    // Shortcuts directly on the context
    this.query = this.request.query
  }

  /**
   * Gets a header from the request
   * @param {string} key
   */
  header(key) {
    return this.request.headers[key]
  }

  /**
   * Set a status on the response
   * @param {number} value
   */
  status(value) {
    this.status = value
  }

  /**
   * Set a json on the response
   * @param {object} value
   */
  json(value) {
    this.status = 200
    this.response = {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    }

    this.body = JSON.stringify(value)
  }

  /**
   * Set a header on the response
   * @param {string} key
   * @param {string} value
   */
  set(key, value) {
    this.response.headers[key] = value
  }

  /**
   * Creates a cloned context
   */
  clone() {
    const clonedContext = new Context(this.event)
    clonedContext.cloned = true

    return clonedContext
  }
}
