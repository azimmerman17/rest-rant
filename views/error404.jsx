const React = require('react')
const Default = require('./default')

function Error404() {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Sorry, we cannot find this page!</p>
            </main>
        </Default>
    )
}

module.exports = Error404