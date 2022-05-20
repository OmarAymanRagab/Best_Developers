import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css'
import { withStyles } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default interface CardProps {
    avatar: string;
    name: string;
    username: string;
    repoName: string;
    repoDescription: string;
    url: string;
    initials: string
}

export default function DeveloperCard(props: CardProps) {
    return (

        <Card className={styles.card}>

            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={styles.avatar}>
                        {props.initials}
                    </Avatar>
                }

                title={props.name}
                subheader={props.username}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.avatar}
                alt="Paella dish"
            />
            <CardContent>
                <Typography color="textSecondary" variant="h5" component="h2">
                    Repository name
        </Typography>
                <Typography variant="h5" component="h2">

                    {props.repoName}

                </Typography>

                <Typography className={styles.pos} color="textSecondary">
                    Url
        </Typography>

                <Typography component="span" display="block">
                    {props.url}
                </Typography>


            </CardContent>
            <CardActions>
                <Button   onClick={()=>  window.open(props.url)} size="small">Learn More</Button>
            </CardActions>

        </Card>


    );
}