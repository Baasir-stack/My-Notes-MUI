import { AppBar, Avatar, Drawer, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {format} from 'date-fns'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            backgroundColor: "#f9f9f9",
            width: '100%'

        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        active: {
            backgroundColor: "#f4f4f4"
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
        

    }

})

const Layout = ({ children }) => {
    const history = useHistory()
    const classes = useStyles()
    const location = useLocation()
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='primary' />,
            path: '/'

        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='primary' />,
            path: '/create'

        }
    ]

    return (
        <div className={classes.root}>
            {/* {app bar} */}

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                       Today is  {format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                       Mario
                    </Typography>
                    <Avatar className={classes.avatar} src='/mario-av.png'/>
                </Toolbar>
            </AppBar>


            {/* {side drawer} */}

            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div >
                    <Typography variant='h5' className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>




            </Drawer>
            <div className={`${classes.toolbar} ${classes.title}`}>
                <div className={classes.toolbar}></div>
                {children}

            </div>
        </div>
    )
}

export default Layout