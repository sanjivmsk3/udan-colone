import { AppBar, IconButton, InputBase, Paper, Toolbar, makeStyles,Link, CardActionArea } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() =>({
    rea:{
        marginLeft: 120,
    },
    app:{
        backgroundColor: '#f5f5f5',
    },
    search:{
        width: 1000,
        paddingLeft:10,
    },
    paper:{
        height:35,
    },
    link:{
        marginLeft:20,
        color:"black",
    },
    img:{
        marginLeft:150,
        marginTop:80,
        width:1200,
    },
})) ;

function Header() {
    const classes = useStyles();
    return(
        <React.Fragment>
        <AppBar className={classes.app}>
            <Toolbar className={classes.rea}>
                <IconButton edge='start' color='default' aria-label='menu'>
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Paper component='form' className={classes.paper}>
                <InputBase placeholder='search' className={classes.search}/>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                </Paper>
                <Link className={classes.link} component='button' variant='button'>Login</Link>
            </Toolbar>
        </AppBar>
        <div className={classes.img}>
            <CardActionArea>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/hdaa80b3ht3lsa14qm7b.jpg" width='1200' height="600" alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/4xnk0ivwwc6rcj0fd0tr.jpg" width='1200' height="650" alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/rn2uimqoaf6v83cpprtf.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/8ipvkaf4x8yjw33h8pza.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/hp8nh537hsvvi0apr7rr.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/idjkx5k8h2auvy5lf8fn.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/siw49dt40jd724silenp.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/dripwazunlpz39mas9rr.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/zias2q3y5lhz8sxqslrm.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/4t07vvrv3znvnrsa1t7o.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/e9vfvblsf3atbobpzi0q.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/kqfqlzqhmi7w7bpl9p4u.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/nfchoktuc7adqwhyjovv.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/7ussdum9kriy2w5pijb5.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/lwz9fyqg5g8xtfrrkede.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/6zum54yvue09npje29tj.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/9ehdvvx6ytcgehzryz2c.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/chnhzmubd7qlzaxzwzqw.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/ruei0kw2866vymsjbd7g.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/a73za8udiazuqhql97mh.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1520/u/assets/6ti2cyj434yv1lhlgsp1.jpg" width='600' height='300' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/473c82yjrzvo3b2j2w4f.jpg" width='1200' alt=""/>
            <img src="https://ud-img.azureedge.net/f_auto,q_auto:eco,w_1600/u/assets/ie5vqxvuqk5km85hqhkq.jpg" width='1200' height='500' alt=""/>

            </CardActionArea>
        </div>
        </React.Fragment>
    )
};
export default Header;