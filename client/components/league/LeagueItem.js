import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(15),
    },
  },

  leagueItem: {
      marginLeft: 0,
      paddingLeft: 10,
      paddingTop: 10,
      backgroundColor: "#c4d7f5",
      transition: 'transform 250ms, box-shadow 250ms',
      '&:hover': {
          cursor: "pointer",
          transform: 'translateY(-10px)',
          boxShadow: '0 0 11px rgba(33,33,33,.2)'
      }
  },
  leaguePoint: {
      fontSize: "small",
      marginRight: 5
  },
  leagueName: {
      marginTop: 15
  },
  leaguePosition: {
    
  },
  label: {
      fontWeight: 400
  }
}));

export default function LeagueItem(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    let url = `/leagues/${props.item.id}`
    history.push(url);
  }

  return (
      <div className={classes.root}>
        <Paper className={classes.leagueItem} elevation={1} onClick={handleClick}>
            <Typography className={classes.leagueName} variant="h6" align="center">
                {props.item.name}
            </Typography> 
            <Typography  variant="subtitle1" align="center">
                <FiberManualRecordIcon className={classes.leaguePoint} />
                <span className={classes.label}>Your rank -</span> {props.item.rank}
            </Typography> 
        </Paper>
      </div>
  );
}