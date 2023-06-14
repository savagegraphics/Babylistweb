import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import PodCard from '../lib/PodCard';

const AVATAR = 'https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg';
const PEOPLE = [
    {
        src: 'https://avatars.dicebear.com/v2/avataaars/example.svg',
        name: 'Yeoman',
        tag: '@whatsup yeo',
        onClick: () => alert('Followed Yeoman!'),
    },
    {
        src: 'https://avatars.dicebear.com/v2/avataaars/example2.svg',
        name: 'GGWP',
        tag: '@goodgamewellplay',
        onClick: () => alert('Followed GGWP!'),
    },
    {
        src: 'https://avatars.dicebear.com/v2/avataaars/example3.svg',
        name: 'Sawasdee',
        tag: '@helloTH',
        onClick: () => alert('Followed Sawasdee!'),
    },
];

const Blog = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container spacing={ 2 }>
            { isSmallScreen ? (
                <Grid item xs={ 12 }>
                    <PodCard
                        name={ 'Celebration Event' }
                        people={ PEOPLE }
                        image={
                            'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                        }
                        price={ 49 }
                        range={ '2.4 miles' }
                        time={ 'Mon, Jun 31st, 5.00pm' }
                        images={ [ AVATAR, AVATAR, AVATAR ] }
                    />
                </Grid>
            ) : (
                <>
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                        <PodCard
                            name={ 'Celebration Event' }
                            people={ PEOPLE }
                            image={
                                'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                            }
                            price={ 49 }
                            range={ '2.4 miles' }
                            time={ 'Mon, Jun 31st, 5.00pm' }
                            images={ [ AVATAR, AVATAR, AVATAR ] }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                        <PodCard
                            name={ 'Celebration Event' }
                            people={ PEOPLE }
                            image={
                                'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                            }
                            price={ 49 }
                            range={ '2.4 miles' }
                            time={ 'Mon, Jun 31st, 5.00pm' }
                            images={ [ AVATAR, AVATAR, AVATAR ] }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                        <PodCard
                            name={ 'Celebration Event' }
                            people={ PEOPLE }
                            image={
                                'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
                            }
                            price={ 49 }
                            range={ '2.4 miles' }
                            time={ 'Mon, Jun 31st, 5.00pm' }
                            images={ [ AVATAR, AVATAR, AVATAR ] }
                        />
                    </Grid>
                </>
            ) }
        </Grid>
    );
};

export default Blog;
