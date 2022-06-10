const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="/images/michael-scott-no.jpeg" alt="Micheal Scott NOOO! meme"/>
                <div>
                  Photo by <a href="buzzfeed.com">BuzzFeed</a> on <a href="pinterest.com">Pinterest</a>
                </div>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404