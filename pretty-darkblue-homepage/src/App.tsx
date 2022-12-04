const App = () => {
  return (
    <div className="app">
      <header>
        <h1>SQUARESPACE</h1>
        <nav>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#tour">Tour</a></li>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>
      </header>

      <div className="main">
        <main>
          <h2>Create your own</h2>
          <article>
            <header>SPACE</header>
            <nav>
              <ul>
                <li><a href="#login">Websites</a></li>
                <li><a href="#tour">Domains</a></li>
                <li><a href="#menu">Commerce</a></li>
                <li><a href="#menu">Mobile</a></li>
                <li><a href="#menu">24/7 Support</a></li>
              </ul>
            </nav>
          </article>
        </main>
      </div>
    </div>
  )
}

export default App;