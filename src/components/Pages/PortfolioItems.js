import React from 'react';
import BetReadImg from '../../assets/images/betterreadsscreenshot.png';
import CrypGifImg from '../../assets/images/memecoin-screenshot2.jpg';
import PreWImg from '../../assets/images/prework-image.png';
import WDScreenShot from '../../assets/images/reactuweather-screenshot.jpg';
import CodeQuizShot from '../../assets/images/code-quiz-screenshot.png';
import TeamProfShot from '../../assets/images/team-profiler-screenshot.png';
import CarShopShot from '../../assets/images/Car-shop-screenshot.jpg';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PortfolioItems() {
    return (
        <section className="work" id="work">
            <h2>My Projects</h2>
            <div className='portfoliocards'>
            <a className='projectcard' href="https://smokey-nagata.herokuapp.com/"><Card sx={{ width: 500, backgroundColor: "rgba(125, 125, 125, 0.4)", boxShadow: "10px 10px 1px 0px rgba(0,0,0,0.2),10px 10px 10px 1px rgba(0,0,0,0.14),10px 1px 3px 1px rgba(0,0,0,0.12)", margin: "2%", borderRadius: "3%" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={CarShopShot}
                        title="The Car Shop"
                    />
                    <CardContent className='cardtext'>
                        <Typography gutterBottom variant="h4" component="div">
                        <p className='projecttitle'>The Car Shop</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className='projectdesc'>A platform for bidding on or auctioning off a personal vehicle (Collaboration)</p>
                        <p className='projectdesc2'>Skills demonstrated: ReactJS, Node, MUI style framework</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button className='repobtn' size="small"><a href="https://github.com/gibsonberglund/smokey-nagata">View Repo</a></Button>
                    </CardActions>
                </Card>
                </a>
                <a className='projectcard' href="https://gibsonberglund.github.io/Crypto-MEMES/"><Card sx={{ width: 500, backgroundColor: "rgba(125, 125, 125, 0.4)", boxShadow: "10px 10px 1px 0px rgba(0,0,0,0.2),10px 10px 10px 1px rgba(0,0,0,0.14),10px 1px 3px 1px rgba(0,0,0,0.12)", margin: "2%", borderRadius: "3%" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={CrypGifImg}
                        title="MemeCoin"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <p className='projecttitle'>MemeCoin</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className='projectdesc'>A meme-based cryptocurrency price tracker (Collaboration)</p>
                        <p className='projectdesc2'>Skills demonstrated: Third-party API integration, Javascript, Vulma style framework</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small"><a className='githublink' href="https://github.com/gibsonberglund/Crypto-MEMES">View Repo</a></Button>
                    </CardActions>
                </Card>
                </a>
                <a href="https://gibsonberglund.github.io/weather-dashboard/" className='projectcard'><Card sx={{ width: 500, backgroundColor: "rgba(125, 125, 125, 0.4)", boxShadow: "10px 10px 1px 0px rgba(0,0,0,0.2),10px 10px 10px 1px rgba(0,0,0,0.14),10px 1px 3px 1px rgba(0,0,0,0.12)", margin: "2%", borderRadius: "3%" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={WDScreenShot}
                        title="React-u-Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <p className='projecttitle'>React-u-Weather</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className='projectdesc'>Current weather report and forecast, with a sense of humor</p>
                        <p className='projectdesc2'>Skills demonstrated: Javascript, CSS, Third-party API integration</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <a className='githublink' href="https://github.com/gibsonberglund/weather-dashboard"><Button size="small">View Repo</Button></a>
                    </CardActions>
                </Card>
                </a>
                <a href="https://github.com/gibsonberglund/better_reads" className='projectcard'><Card sx={{ width: 500, backgroundColor: "rgba(125, 125, 125, 0.4)", boxShadow: "10px 10px 1px 0px rgba(0,0,0,0.2),10px 10px 10px 1px rgba(0,0,0,0.14),10px 1px 3px 1px rgba(0,0,0,0.12)", margin: "2%", borderRadius: "3%" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={BetReadImg}
                        title="Better Reads"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <p className='projecttitle'>Better Reads</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p className='projectdesc'>A digital reading list and book search engine (Collaboration)</p>
                        <p className='projectdesc2'>Skills demonstrated: Handlebars, Node, Express</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <a className='githublink' href="https://github.com/gibsonberglund/better_reads"><Button size="small">View Repo</Button></a>
                    </CardActions>
                </Card>
                </a>
            </div>
        </section>
    )
    }

export default PortfolioItems;