import { useEffect } from 'react'
import '../App.css'
import {Link} from 'react-router'

const tickets = [
        { name: 'Child', price: 5, detail: 'Ages 12 and under', url: '/payment' },
    { name: 'Adult', price: 8, detail: 'Ages 13 and up', url: '/payment' },
    { name: 'Premium', price: 10, detail: 'Premium admission', url: '/payment' },
]

export default function Tickets() {
    useEffect(() => {
        document.title = 'Scoopermania Tickets'
    }, [])

    return (
        <main className="tickets-page">
            <div className="tickets-content">
                <header className="tickets-heading">
                    <h1>Choose your ticket</h1>
                    <p>All-you-can-eat ice cream at Scoopermania</p>
                </header>

                <div className="ticket-grid">
                    {tickets.map(({ name, price, detail, url }) => (
                        <article className="ticket-card glass" key={name}>
                            <h2>{name}</h2>
                            <p className="ticket-price"><span>$</span>{price}</p>
                            <p className="ticket-detail">{detail}</p>
                            <Link className="ticket-buy" to={url} rel="noopener noreferrer" aria-label={`Buy ${name.toLowerCase()} ticket for $${price}`}>
                                Buy ticket
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
            <div className="credits glass">
                <p className="creditsText">Website built by <b>Alex Rivkin</b> and <b>Eythan Lawless</b></p>
            </div>
        </main>
    )
}
