import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import { Button } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import CreateLeagueModal from './CreateLeagueModal';
import JoinLeagueModal from './JoinLeagueModal';
import { withStyles } from '@material-ui/core/styles';
import LeagueItem from './LeagueItem';

const styles = {
    headerBlock:{
        marginBottom: 15
    },
    subTitle:{
        marginTop: 25
    },
    subTitleText:{
        fontWeight: 500
    }
};
  

class League extends React.Component{

    constructor(props) {
        super(props);
        
    }

    state = {
        showCreateLeagueForm: false,
        showJoinLeagueForm: false,
        userLeague: false
    }

    onCreateFormOpen = () => {
        this.setState({
            showCreateLeagueForm: true
        })
    }

    onCreateFormClose = () => {
        this.setState({
            showCreateLeagueForm: false
        })
    }

    onJoinFormOpen = () => {
        this.setState({
            showJoinLeagueForm: true
        })
    }

    onJoinFormClose = () => {
        this.setState({
            showJoinLeagueForm: false
        })
    }

    changeType = () => {
        this.setState({
            showJoinLeagueForm: !this.state.showJoinLeagueForm,
            showCreateLeagueForm: !this.state.showCreateLeagueForm
        })
    }
    render(){
        return(
                <Box>

                    {this.state.userLeague? <Grid className={this.props.classes.headerBlock} container-fluid spacing={2}>
                        <Grid item xs>
                            <Typography>
                                You are not part of any league. Please create a new league or join an existing league
                            </Typography>
                        </Grid>
                    </Grid>: ""}

                    <Grid container spacing={2}>
                        <Grid item xs="3">
                            <Button variant="primary" color="primary" onClick={this.onCreateFormOpen}>
                                Create a New League
                            </Button>
                            <CreateLeagueModal show={this.state.showCreateLeagueForm} onExit={this.onCreateFormClose} onChangeFormType={this.changeType}/>
                        </Grid>
                        <Grid item xs="3">
                            <Button variant="outline-secondary" color="primary" onClick={this.onJoinFormOpen}>
                                Join an existing League
                            </Button>
                            <JoinLeagueModal show={this.state.showJoinLeagueForm} onExit={this.onJoinFormClose} onChangeFormType={this.changeType}/>
                        </Grid>
                    </Grid>

                    <Grid className={this.props.classes.subTitle} container spacing={1}>
                        <Grid item xs>
                            <Typography variant="h5" className={this.props.classes.subTitleText}>
                                Your Leagues
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        {this.props.list.map((item)=>{
                            return (
                                <Grid item md="4" xs="4">
                                    <LeagueItem item={item} />
                                </Grid>
                            )
                                
                        })}
                    </Grid>
                    
                </Box>
                
        )
    }
}

export default (withStyles(styles)(League));