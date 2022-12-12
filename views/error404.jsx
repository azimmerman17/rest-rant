const React = require('react')
const Default = require('./layouts/default')

function Error404() {
    return (
        <Default>
            <main>
                <h2>404: PAGE NOT FOUND</h2>
                <p>Sorry, we cannot find this page!</p>
                <img src='/images/cookies.jpg' alt='bowl of cookies'/>
                <div className='img-credit'>
                    <small>
                        Photo by <a href="https://unsplash.com/@sjcbrn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SJ 📸</a> on <a href="https://unsplash.com/s/photos/cookies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </small>
                </div>
            </main>
        </Default>
    )
}

module.exports = Error404