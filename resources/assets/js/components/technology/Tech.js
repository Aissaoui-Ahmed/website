import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Hidden from '@material-ui/core/Hidden'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    mainFeaturedPost: {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
    //   [theme.breakpoints.up('md')]: {
    //     paddingRight: 0, //
    //   },
    },
    mainGrid: {
      marginTop: theme.spacing.unit * 3,
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },

})

class Tech extends Component {
    render() {
        const {classes} = this.props
        return (
            <main>
                <Paper className={classes.mainFeaturedPost}>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                            <Typography variant="display2" color="inherit" gutterBottom>
                                هذا العنوان الدعائي يكون طويل شوية معليهش
                            </Typography>
                            <Typography variant="headline" color="inherit" paragraph>
                                هذا نص يتكون من مجموعة من الأسطر، لاعلام القراء الجدد بشكل مختصر وفعال حول المحتوى الأساسي لهذا الموقع
                                هذا نص يتكون من مجموعة من الأسطر، لاعلام القراء الجدد بشكل مختصر وفعال حول المحتوى الأساسي لهذا الموقع
                                هذا نص يتكون من مجموعة من الأسطر، لاعلام القراء الجدد بشكل مختصر وفعال حول المحتوى الأساسي لهذا الموقع
                                هذا نص يتكون من مجموعة من الأسطر، لاعلام القراء الجدد بشكل مختصر وفعال حول المحتوى الأساسي لهذا الموقع

                            </Typography>
                            <Typography variant="title" color="inherit">
                                Continue reading...
                            </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>

                <Grid container spacing={40} className={classes.cardGrid}>
                    Technology posts goes here!
                </Grid>
            </main>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Tech)