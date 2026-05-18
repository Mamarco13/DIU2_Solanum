import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import logoCircular from './assets/logo circular sin fondo.png'
import heroImg from './assets/Home - fondo hero.png'
import fondoTarjeta from './assets/Home - fondo tarjeta.png'
import imgMatcha from './assets/Home - café matcha.png'
import imgToast from './assets/Home - saturno toast.png'
import imgCafes from './assets/Manú - Cafés.png'
import './App.css'
import { events } from './src/data/events.js'
import { menuItems } from './src/data/menu.js'
function App() {
  const [showHome, setShowHome] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showExplore, setShowExplore] = useState(false)
  const [showReserva, setShowReserva] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showEventos, setShowEventos] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [menuSearch, setMenuSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState(null)
  const [reservaDate, setReservaDate] = useState('2024-05-04')
  const [reservaTime, setReservaTime] = useState('16:30')
  const [reservaPeople, setReservaPeople] = useState(2)

  const plates = [
    { id: 1, name: 'Galaxy Matcha', price: 4.80, description: 'Matcha premium con leche de avena y mulas durante un mini matcha...', image: imgMatcha },
    { id: 2, name: 'Saffron Toast', price: 7.50, description: 'Pan tostado con aguacate, tomate secado y semillas...', image: imgToast },
    { id: 3, name: 'Rooibos Latte', price: 4.80, description: 'Café de especia del rojo con leche capuchino y espuma de vainilla...', image: imgCafes }
  ]

  const [selectedPlates, setSelectedPlates] = useState({})

  const navItems = [
    { id: 'home', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>, label: 'Home', action: () => { setShowMenu(false); setShowReserva(false); setShowEventos(false); setShowConfirmation(false); setShowExplore(true); } },
    { id: 'menu', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>, label: 'Menú', action: () => { setShowMenu(true); setShowExplore(false); setShowReserva(false); setShowEventos(false); setShowConfirmation(false); } },
    { id: 'reservas', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>, label: 'Reservas', action: () => { setShowMenu(false); setShowReserva(true); setShowExplore(false); setShowEventos(false); setShowConfirmation(false); } },
    { id: 'eventos', icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>, label: 'Eventos', action: () => { setShowMenu(false); setShowEventos(true); setShowExplore(false); setShowReserva(false); setShowConfirmation(false); } }
  ]

  const addPlate = (plateId) => {
    setSelectedPlates(prev => ({
      ...prev,
      [plateId]: (prev[plateId] || 0) + 1
    }))
  }

  const removePlate = (plateId) => {
    setSelectedPlates(prev => {
      const newCount = (prev[plateId] || 0) - 1
      if (newCount <= 0) {
        const updated = { ...prev }
        delete updated[plateId]
        return updated
      }
      return { ...prev, [plateId]: newCount }
    })
  }

  const totalPlates = Object.values(selectedPlates).reduce((sum, qty) => sum + qty, 0)
  const totalPrice = Object.entries(selectedPlates).reduce((sum, [plateId, qty]) => {
    const plate = plates.find(p => p.id === Number(plateId))
    return sum + (plate?.price || 0) * qty
  }, 0)

  const handleSplashClick = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setShowHome(true)
    }, 600)
  }

  useEffect(() => {
    const root = document.documentElement
    let rafId = 0

    const update = () => {
      const maxScroll = window.innerHeight || 1
      const raw = window.scrollY / maxScroll
      const progress = Math.min(Math.max(raw, 0), 1)
      const inverse = 1 - progress

      root.style.setProperty('--scroll-progress', progress.toFixed(3))
      root.style.setProperty('--scroll-progress-inv', inverse.toFixed(3))
      root.style.setProperty('--splash-shift', `${progress * -26}px`)
      root.style.setProperty('--home-shift', `${inverse * 28}px`)
      root.style.setProperty('--planet-shift', `${progress * -40}px`)
      root.style.setProperty('--splash-blur', `${progress * 3}px`)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  return (
    <main className={`app ${isAnimating ? 'app--splash-animate' : ''}`}>
      <section className={`screen screen--splash ${isAnimating ? 'screen--splash-animate' : ''}`} onClick={handleSplashClick}>
        <div className="screen__content">
          <div className="brand">
            <img className="brand-logo" src={logo} alt="Logo de Gravity Brew" />
          </div>
        </div>
      </section>

      {showHome && (
        <section className="screen screen--home">
          <div className="home">
            <div className="home__content">
              <img className="home__logo-large" src={logo} alt="Gravity Brew" />
              <h2>Entre estrellas y café</h2>
              <p>Café de especialidad • brunch • eventos</p>
              <button
                className="btn btn--primary"
                type="button"
                onClick={() => {
                  setShowExplore(true)
                  setShowHome(false)
                }}
              >
                Explorar →
              </button>
            </div>
          </div>
        </section>
      )}

      {showExplore && (
        <section className="screen screen--explore">
          <div className="explore">

            {/* Top header bar */}
            <header className="explore__header">
              <div className="explore__brand">
                <img src={logoCircular} alt="Gravity Brew" className="explore__logo-circular" />
                <span className="explore__brand-name">GRAVITY<br/><span className="explore__brand-sub">BREW</span></span>
              </div>
            </header>

            {/* Hero section with background image */}
            <div className="explore__hero" style={{ backgroundImage: `url(${heroImg})` }}>
              <div className="explore__hero-overlay" />
              <div className="explore__hero-content">
                <h2 className="explore__hero-title">Tu pausa<br/>entre estrellas</h2>
                <p className="explore__hero-sub">Café de especialidad,<br/>brunch y eventos nocturnos</p>
                <div className="explore__hero-btns">
                  <button
                    className="btn-hero btn-hero--primary"
                    onClick={() => { setShowReserva(true); setShowExplore(false); }}
                  >
                    Reservar mesa
                  </button>
                  <button
                    className="btn-hero btn-hero--ghost"
                    onClick={() => { setShowMenu(true); setShowExplore(false); }}
                  >
                    Ver menú
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable content below hero */}
            <div className="explore__body">

              {/* Quick actions */}
              <div className="explore__section-label">¿Qué quieres hacer?</div>
              <div className="explore__quick">
                <button className="quick-action" onClick={() => { setShowReserva(true); setShowExplore(false); }}>
                  <div className="quick-action__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <span>Reservar</span>
                </button>
                <button className="quick-action" onClick={() => { setShowEventos(true); setShowExplore(false); }}>
                  <div className="quick-action__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                  </div>
                  <span>Eventos</span>
                </button>
                <button className="quick-action" onClick={() => { setShowMenu(true); setShowExplore(false); }}>
                  <div className="quick-action__icon">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                  </div>
                  <span>Menú</span>
                </button>
              </div>

              {/* Recommended section */}
              <div className="explore__section-label">Recomendados para ti</div>

              {/* Galaxy Matcha card – horizontal list style */}
              <div className="rec-list-card">
                <img src={imgMatcha} alt="Galaxy Matcha" className="rec-list-card__img" />
                <div className="rec-list-card__body">
                  <h3 className="rec-list-card__name">Galaxy Matcha</h3>
                  <p className="rec-list-card__desc">Matcha premium con leche de avena y notas suaves de vainilla.</p>
                  <div className="rec-list-card__footer">
                    <span className="rec-list-card__price">4,80 €</span>
                    <button className="rec-list-card__link" onClick={() => { setShowMenu(true); setShowExplore(false); }}>Ver todo</button>
                  </div>
                </div>
              </div>

              {/* Events banner card – full-width image with overlay */}
              <div
                className="rec-event-card"
                style={{ backgroundImage: `url(${fondoTarjeta})` }}
                onClick={() => { setShowEventos(true); setShowExplore(false); }}
              >
                <div className="rec-event-card__overlay" />
                <div className="rec-event-card__body">
                  <span className="rec-event-card__tag">EVENTO MUSICAL</span>
                  <h3 className="rec-event-card__title">Noches Indie<br/>Acústicas</h3>
                  <p className="rec-event-card__date">15 enero 2025</p>
                  <button className="rec-event-card__btn" onClick={(e) => { e.stopPropagation(); setShowEventos(true); setShowExplore(false); }}>
                    Ver más →
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom nav */}
            <nav className="explore__nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${item.id === 'home' ? 'nav-item--active' : ''}`}
                  onClick={item.action}
                  title={item.label}
                >
                  {item.icon}
                  <span className="nav-item__label">{item.label}</span>
                </button>
              ))}
            </nav>

          </div>
        </section>
      )}

      {showReserva && (
        <section className="screen screen--reserve">
          <div className="reserve">
            <header className="reserve__header">
              <img src={logo} alt="Logo" className="reserve__logo" />
            </header>

            <div className="reserve__title">
              <h2>Reserva</h2>
            </div>
            <div className="reserve__contact-inputs" style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginBottom: '16px' }}>
              <div className="reserve__input-group">
                <label htmlFor="name">Nombre de la reserva</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="reserve__input"
                />
              </div>
              <div className="reserve__input-group">
                <label htmlFor="phone">Número de teléfono</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Tu teléfono"
                  className="reserve__input"
                />
              </div>
            </div>

            <div className="reserve__inputs">
              <div className="reserve__input-group">
                <label htmlFor="date">Fecha</label>
                <input
                  id="date"
                  type="date"
                  value={reservaDate}
                  onChange={(e) => setReservaDate(e.target.value)}
                  className="reserve__input"
                />
              </div>
              <div className="reserve__input-group">
                <label htmlFor="time">Hora</label>
                <input
                  id="time"
                  type="time"
                  value={reservaTime}
                  onChange={(e) => setReservaTime(e.target.value)}
                  className="reserve__input"
                />
              </div>
              <div className="reserve__input-group">
                <label htmlFor="people">Personas</label>
                <select
                  id="people"
                  value={reservaPeople}
                  onChange={(e) => setReservaPeople(Number(e.target.value))}
                  className="reserve__input"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
              </div>
            </div>

            <div className="reserve__plates">
              <h3>Añade platos a tu reserva (opcional)</h3>
              <p>Asegura tu experiencia reservando tus platos favoritos</p>

              <div className="plates-list">
                {plates.map((plate) => (
                  <div key={plate.id} className="plate-item">
                    <img src={plate.image} alt={plate.name} className="plate-img" style={{ objectFit: 'cover' }} />
                    <div className="plate-body">
                      <h4>{plate.name}</h4>
                      <p>{plate.description}</p>
                      <div className="plate-footer">
                        <span>{plate.price.toFixed(2)}€</span>
                        <div className="plate-controls">
                          <button
                            className="plate-btn plate-btn-minus"
                            onClick={() => removePlate(plate.id)}
                            disabled={!selectedPlates[plate.id]}
                          >
                            −
                          </button>
                          <span className="plate-qty">{selectedPlates[plate.id] || 0}</span>
                          <button
                            className="plate-btn plate-btn-plus"
                            onClick={() => addPlate(plate.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reserve__summary">
              <div className="summary-item">{totalPlates} platos seleccionados</div>
              <div className="summary-total">{totalPrice.toFixed(2)}€</div>
            </div>

            <div className="reserve__actions">
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setShowReserva(false)
                  setShowExplore(true)
                }}
              >
                Cancelar
              </button>
              <button className="btn btn--primary" onClick={() => {
                setShowConfirmation(true)
                setShowReserva(false)
              }}>
                Confirmar reserva →
              </button>
            </div>

            <nav className="reserve__nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${item.id === 'reservas' ? 'nav-item--active' : ''}`}
                  onClick={item.action}
                  title={item.label}
                >
                  {item.icon}
                  <span className="nav-item__label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>
      )}

      {showConfirmation && (
        <section className="screen screen--confirmation">
          <div className="confirmation">
            <div className="confirmation__header">
              <img src={logo} alt="Logo" className="confirmation__logo" />
              <h1>Reserva Confirmada</h1>
            </div>

            <div className="confirmation__details">
              <div className="detail-section">
                <h3>Detalles de la reserva</h3>
                <div className="detail-item">
                  <span className="detail-label">Fecha:</span>
                  <span className="detail-value">{new Date(reservaDate).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Hora:</span>
                  <span className="detail-value">{reservaTime}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Número de personas:</span>
                  <span className="detail-value">{reservaPeople}</span>
                </div>
              </div>

              {totalPlates > 0 && (
                <div className="detail-section">
                  <h3>Platos seleccionados</h3>
                  <div className="plates-summary">
                    {plates.map((plate) => {
                      const qty = selectedPlates[plate.id]
                      if (!qty) return null
                      return (
                        <div key={plate.id} className="summary-plate">
                          <div className="summary-plate-info">
                            <span className="summary-plate-name">{plate.name}</span>
                            <span className="summary-plate-qty">x{qty}</span>
                          </div>
                          <span className="summary-plate-price">{(plate.price * qty).toFixed(2)}€</span>
                        </div>
                      )
                    })}
                  </div>
                  <div className="confirmation__total">
                    <span>Total:</span>
                    <span className="total-amount">{totalPrice.toFixed(2)}€</span>
                  </div>
                </div>
              )}
            </div>

            <div className="confirmation__actions">
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setShowConfirmation(false)
                  setShowReserva(true)
                }}
              >
                Volver
              </button>
              <button className="btn btn--primary" onClick={() => {
                setShowConfirmation(false)
                setShowExplore(true)
              }}>Finalizar</button>
            </div>
          </div>
        </section>
      )}

      {showEventos && (
        <section className="screen screen--eventos">
          <div className="eventos">
            <header className="eventos__header">
              <img
                src={logo}
                alt="Logo"
                className="eventos__logo"
                onClick={() => {
                  setShowEventos(false)
                  setShowExplore(true)
                }}
                style={{ cursor: 'pointer' }}
              />
            </header>

            <div className="eventos__title">
              <h2>Eventos</h2>
              <p>Experiencias únicas en Gravity Brew</p>
            </div>

            <div className="eventos__list">
              {events.map((event) => (
                <div key={event.id} className={`event-card ${event.featured ? 'event-card--featured' : ''}`}>
                  <img src={fondoTarjeta} alt={event.title} className="event-card__image" />
                  <div className="event-card__content">
                    {event.featured && <span className="event-card__badge">Evento destacado</span>}
                    <h3 className="event-card__title">{event.title}</h3>
                    <div className="event-card__info">
                      <div className="event-card__date">{event.date}</div>
                      <div className="event-card__time">{event.time}</div>
                    </div>
                    <p className="event-card__description">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>



            <nav className="eventos__nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${item.id === 'eventos' ? 'nav-item--active' : ''}`}
                  onClick={item.action}
                  title={item.label}
                >
                  {item.icon}
                  <span className="nav-item__label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>
      )}

      {showMenu && (
        <section className="screen screen--menu">
          <div className="menu">
            <header className="menu__header">
              <img
                src={logo}
                alt="Logo"
                className="menu__logo"
                onClick={() => {
                  setShowMenu(false)
                  setShowExplore(true)
                }}
                style={{ cursor: 'pointer' }}
              />
            </header>

            <div className="menu__title">
              <h2>Menú</h2>
            </div>

            <div className="menu__search">
              <input
                type="text"
                placeholder="Buscar bebidas o platos..."
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                className="menu__search-input"
              />
            </div>

            <div className="menu__filters-container">
              <div className="menu__filters">
                {[
                  { id: 'sin_lactosa', label: 'Sin lactosa' },
                  { id: 'sin_gluten', label: 'Sin gluten' },
                  { id: 'vegano', label: 'Veganos' },
                  { id: 'otros', label: 'Otros alérgenos' }
                ].map(filter => (
                  <button
                    key={filter.id}
                    className={`menu__filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="menu__list">
              {['Bebidas destacadas', 'Comidas'].map(category => {
                const categoryItems = menuItems.filter(item => {
                  const matchesSearch = item.name.toLowerCase().includes(menuSearch.toLowerCase()) || item.description.toLowerCase().includes(menuSearch.toLowerCase());
                  const matchesFilter = activeFilter ? item.allergens.includes(activeFilter) : true;
                  return item.category === category && matchesSearch && matchesFilter;
                });

                if (categoryItems.length === 0) return null;

                return (
                  <div key={category} className="menu__category">
                    <h3 className="menu__category-title">{category}</h3>
                    {categoryItems.map(item => (
                      <div key={item.id} className="menu-item">
                        {item.image
                          ? <img src={item.image} alt={item.name} className="menu-item__img" />
                          : <div className="menu-item__img" />}
                        <div className="menu-item__content">
                          <div className="menu-item__header">
                            <h4 className="menu-item__name">{item.name}</h4>
                            <span className="menu-item__price">{item.price.toFixed(2)}€</span>
                          </div>
                          <p className="menu-item__description">{item.description}</p>
                          <div className="menu-item__tags">
                            {item.tags.map(tag => (
                              <span key={tag} className="menu-item__tag">#{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>

            <nav className="menu__nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${item.id === 'menu' ? 'nav-item--active' : ''}`}
                  onClick={item.action}
                  title={item.label}
                >
                  {item.icon}
                  <span className="nav-item__label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </section>
      )}
    </main>
  )
}

export default App