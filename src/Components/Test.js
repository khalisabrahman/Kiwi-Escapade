import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import snow from '../images/Snow.jpg';
import queenstownView from '../images/queenstownView.jpg';
import hiking from '../images/hiking.jpg';
import bungy from '../images/bungy.jpg';
import solo from '../images/solo.jpg';
import maori from '../images/maori.jpg';

const useStyles = makeStyles(() => ({
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        "& :nth-child(1)": {
            flex: '1 1 50%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${snow})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },
        "& :nth-child(2)": {
            flex: '1 1 25%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${queenstownView})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },
        "& :nth-child(3)": {
            flex: '1 1 25%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${hiking})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },
        "& :nth-child(4)": {
            flex: '1 1 50%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${bungy})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },
        "& :nth-child(5)": {
            flex: '1 1 25%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${solo})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },
        "& :nth-child(6)": {
            flex: '1 1 25%',
            background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${maori})`,
            minHeight: '375px',
            backgroundPosition: 'top center',
            	backgroundRepeat: 'no-repeat',
            	backgroundSize: 'cover',
        },

    },
}))

function Test() {
    const classes  = useStyles();

    return (
        <div className={classes.flexContainer}>
            <div className={classes.box1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At unde esse, eum iure laudantium architecto aperiam, quam dolores, dolorem laborum ab facere! Fugiat saepe repellat a impedit vero ad error ratione dignissimos quisquam amet numquam, ducimus eos maxime, voluptatibus distinctio modi quia assumenda illo voluptates nisi, similique laboriosam! Repellendus, autem?</div>
            <div className={classes.box2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde, explicabo dolores saepe sed rerum tenetur eum quisquam odit exercitationem cumque vel eius laudantium quo nostrum! Maiores excepturi minima in magnam commodi esse sapiente ad sunt aliquid quibusdam, placeat debitis iste facilis odit incidunt, praesentium sed veniam aperiam dicta. Consequatur?</div>
            <div className={classes.box3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus in ad obcaecati necessitatibus quos, iusto tempora? Laborum sunt minus optio itaque hic porro, reprehenderit nam rem provident officia sapiente cumque inventore pariatur natus ipsum deserunt tempore commodi iusto accusantium earum eaque. Neque perspiciatis doloremque earum expedita officia nulla delectus eveniet.</div>
            <div className={classes.box4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere necessitatibus quis dicta dignissimos, perspiciatis tenetur est inventore praesentium dolor eveniet autem nulla. Beatae pariatur voluptatem laudantium quae officia, fugit voluptatibus suscipit qui perferendis, quibusdam vel culpa perspiciatis enim iste earum facere commodi corrupti? Itaque autem et voluptates aperiam necessitatibus dolores.</div>
            <div className={classes.box4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere necessitatibus quis dicta dignissimos, perspiciatis tenetur est inventore praesentium dolor eveniet autem nulla. Beatae pariatur voluptatem laudantium quae officia, fugit voluptatibus suscipit qui perferendis, quibusdam vel culpa perspiciatis enim iste earum facere commodi corrupti? Itaque autem et voluptates aperiam necessitatibus dolores.</div>
            <div className={classes.box4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere necessitatibus quis dicta dignissimos, perspiciatis tenetur est inventore praesentium dolor eveniet autem nulla. Beatae pariatur voluptatem laudantium quae officia, fugit voluptatibus suscipit qui perferendis, quibusdam vel culpa perspiciatis enim iste earum facere commodi corrupti? Itaque autem et voluptates aperiam necessitatibus dolores.</div>
        </div>
    )
}
export default Test;
