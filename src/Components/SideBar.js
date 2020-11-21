import React from 'react';
import {Outlet,useNavigate,useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeContent from './HomeContent';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#f2743d'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: '#ffffff'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#f2743d',
    color: '#ffffff !important'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: '100%',
  },
  navIcon: {
    minWidth: 35,
    color: '#ffffff'
  },
  navCancelIcon: {
    display: 'none',
  },
  logo: {
    height: 40
  },
  paddingTopBottom0: {
    paddingTop: 0,
    paddingBottom: 0
  },
  paddingBottom0: {
    paddingBottom: 0
  },
  logoIcon:{
    cursor: 'pointer',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },

}));

function SideBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let navigate = useNavigate();
  let location = useLocation();
  let pathname=location.pathname;
  
  const ChangeRoute = (route) => {
    navigate(route);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <List className={classes.paddingBottom0} onClick={() => ChangeRoute('/')}>
          <ListItem  className={classes.paddingTopBottom0} >
            <ListItemIcon > <img src={process.env.PUBLIC_URL + '/shoe.svg'} alt="shoe logo" className={classes.logo} /> </ListItemIcon>
            <ListItemText className={classes.logoIcon}>Shoe Store</ListItemText>
          </ListItem>
        </List>
      </div>
      <Divider />
      <List>
        <ListItem button onClick={() => ChangeRoute('/')}>
          <ListItemIcon className={classes.navIcon}> <HomeIcon /> </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem button onClick={() => ChangeRoute('/product')}>
          <ListItemIcon className={classes.navIcon}> <StorefrontIcon /> </ListItemIcon>
          <ListItemText primary={'Products'} />
        </ListItem>
        <ListItem button onClick={() => ChangeRoute('/about')}>
          <ListItemIcon className={classes.navIcon}> <InfoIcon /> </ListItemIcon>
          <ListItemText primary={'About Us'} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Zubair Ali Ghafoor
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          pathname === '/'
          ? <HomeContent/>
          : <div>
              <Outlet />
            </div>
        } 
      </main>
    </div>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
