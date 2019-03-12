import React, { Suspense, useCallback } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Telas */
    const Proof = React.lazy(() => import('./pages/proofs'))
    const Info = React.lazy(() => import('./pages/houseInfo'))
    const Fallback = () => <div>Loading</div>

export default function Routes (props) {
    return(
        <Router>
            <Suspense fallback={<Fallback />}>
            <Switch>
                <Route path='/' exact render={props => <Proof {...props} />} />
                <Route path='/Info' exact render={props => <Info {...props} />} />
            </Switch>
            </Suspense>
        </Router>
    )
}