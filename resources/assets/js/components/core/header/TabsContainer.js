import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router'
import {PropTypes} from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const sections = [
    'home',
    'technology',
    'design',
    'culture',
    'business',
    'politics',
    'opinion',
    'science',
    'health',
    'style',
    'travel',
]

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
});

class TabsContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.onTabClick = this.onTabClick.bind(this)
    }
    componentDidMount() {
        const pathname = this.props.history.location.pathname.replace(/\//g, '')
        let value = 0;

        if (sections.indexOf(pathname) !== -1) {
            value = sections.indexOf(pathname)
            this.setState({value})
        } else {
            // this.setState({value})
            // this.props.history.push(sections[value])
        }
    }
    handleChange(event, value) {
        this.setState({ value });
    }
    onTabClick(route) {
        this.props.history.push(route.toLowerCase())
    }
    render () {
        const {value} = this.state
        return (
            <Fragment>
                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                >
                    {sections.map(section => 
                        (<Tab key={section} label={section} onClick={() => {this.onTabClick(section)}} />)
                    )}
                </Tabs>
            </Fragment>
            
        )
    }
}

export default withRouter(withStyles(styles)(TabsContainer))