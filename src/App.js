import React from 'react'
import {hot} from 'react-hot-loader'
// import Warning from './Warning'
const Warning = React.lazy(() => import('./Warning'))
class App extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <h1>Hello worldavbt</h1>
                <h2 className={ this.state.count > 10 ? 'warning': null}>count: {this.state.count}</h2>
                { this.state.count > 10 ? 
                    <React.Suspense fallback={null}>
                        <Warning/>
                    </React.Suspense>
                    : null}
                <button onClick={() => this.setState(state => ({count: state.count + 1}))}>+</button>
                <button onClick={() => this.setState(state => ({count: state.count - 1}))}>-</button>
            </div>
        )
    }
}

export default hot(module)(App)