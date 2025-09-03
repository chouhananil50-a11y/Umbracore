import React, { useState } from 'react'

const AdminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@example.com'

export default function App() {
  const [query, setQuery] = useState('')
  const [log, setLog] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    const id = Date.now()
    const entry = { id, at: new Date().toISOString(), query }
    setLog([entry, ...log])
    setQuery('')
  }

  return (
    <div className="app">
      <header>
        <h1>Umbracore</h1>
        <p className="tag">AI-native client • Cloudflare-ready</p>
      </header>

      <section className="card">
        <h2>Quick Search (demo)</h2>
        <form onSubmit={handleSearch}>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type anything…"
            required
          />
          <button type="submit">Run</button>
        </form>
        <p className="hint">Admin: <strong>{AdminEmail}</strong></p>
      </section>

      <section className="card">
        <h3>Activity</h3>
        {log.length === 0 ? (
          <p className="muted">No activity yet.</p>
        ) : (
          <ul className="log">
            {log.map(item => (
              <li key={item.id}>
                <span className="time">{new Date(item.at).toLocaleString()}</span>
                <span className="content">{item.query}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer>
        <small>© {new Date().getFullYear()} Umbracore • Secure by default</small>
      </footer>
    </div>
  )
}