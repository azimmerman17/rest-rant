const React = require('react')
const Default = require('./default')

function Home() {
    return (
        <Default>
            <main>
                <h1>HOME PAGE</h1>
                <button className='btn btn-primary'>Places Page</button>
            </main>
        </Default>
    )
}

module.exports = Home