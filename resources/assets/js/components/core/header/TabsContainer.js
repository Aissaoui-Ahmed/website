import React, {Component, Fragment} from 'react'
// import {withRouter} from 'react-router'
import {PropTypes} from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
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
    }
    handleChange(event, value) {
        this.setState({ value });
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
                        (<Tab key={section} label={section} onClick={() => {console.log(section)}} />)
                    )}
                </Tabs>
            </Fragment>
            
        )
    }
}

export default withStyles(styles)(TabsContainer)