import React from 'react'
import { Filter } from './Filter.jsx'

export function PortfolioNav() {
    return (
<section className="portfolio-nav flex justify-between align-center">
    <button className="next-pg" >Next Page</button>
    <Filter />
    <button className="prev-pg" >Prev Page</button>
</section>
    )
}

// onclick={onNextPage()}
// onclick={onPrevPage()}