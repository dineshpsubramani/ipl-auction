import React from 'react';
import LeagueDetails from '../../components/league/LeagueDetails';
import { useHistory, useParams } from 'react-router-dom'

const detail = {'id':1,'name': "Hifliers", "role":"player", "teams": ["CSK", "DC", "RCB", "MI", "PK"]};
const standings = [
    {"name": "Hari Prasad", "teamName": "CSK", "rank": 1, "score":100, "team": [
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Dev", "teamName": "MI", "rank": 2, "score":99, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Sathish", "teamName": "DC", "rank": 3, "score":98, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Hanumesh Muthuswamy", "teamName": "PK", "rank": 4, "score":97, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Dinesh", "teamName": "SRH", "rank": 5, "score":96, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Sriram", "teamName": "RCB", "rank": 6, "score":95, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Raghav", "teamName": "KKR", "rank": 7, "score":94, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]},
    {"name": "Navathej", "teamName": "RR", "rank": 7, "score":94, "team":[
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        },
        {
           "name":"Sachin",
           "position":"Batsman",
           "points":0
        }
     ]}
]


const LeagueDetailsContainer = (props) => {

    const { id } = useParams();
    console.log(id);

    return(
        <LeagueDetails standings={standings} detail={detail} />
    )

}

export default LeagueDetailsContainer;