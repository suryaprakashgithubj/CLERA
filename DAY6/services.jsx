import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './service.css'

export default function Services() {
    return (
        <div className='serv'>
             <div style={{justifyContent:"center" , display:"flex" , paddingTop:"2.5%" , fontFamily:"sans-serif" , fontSize:"190%"}}>
                <p>Discover all the services provided by CLERA and book your respective service that you are looking for!!</p>
             </div>
            <div className='card1'>
                <div className="electrician" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/elec.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Electrician
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Executing plans of electrical wiring for well functioning lighting, intercom and other electrical systems
Installing electrical apparatus, fixtures and equipment for alarm and other systems
Installing safety and distribution components
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="Saloon" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 ,maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/hair.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hair Stylists
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Welcoming customers and identifying their preferences by asking pointed questions
                                    Recommending hairstyles and haircuts according to customers’ face shapes and tastes
                                    Washing, rinsing and drying clients’ hair using appropriate shampoos and conditioners (e.g. for oily hair or dry scalps)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="plumbing" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/plumber.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Plumber
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Reading blueprints and drawings to understand or plan the layout of plumbing, waste disposal and water supply systems
                                    Cutting, assembling and installing pipes and tubes with attention to existing infrastructure (e.g. electrical wiring)
                                    Installing and maintaining water supply systems
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </div>
                <div className='card2'>
                <div className="mech" style={{marginRight:"20px" , paddingBottom:"40px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/mech.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Mechanics
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately
                                    Inspecting vehicle computer and electronic systems to repair, maintain and upgrade
                                    Conducting routine maintenance work aiming to vehicle functionality and longevity

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="nurse" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 , maxHeight:1000 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/nurse.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nursing
                                </Typography>
                                <Typography variant="body2" color="text.secondary">

                                    Identifying patients’ care requirements, focus on their needs and act on them
                                    Nurturing a compassionate environment by providing psychological support
                                    Resolving or reporting on patients’ needs or problems
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="ac" style={{marginRight:"20px"}}>
                    <Card sx={{ maxWidth: 345 ,maxHeight:1000 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image="/images/ac.jpeg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    AC MECHANIC
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                He also carries out general repairs and maintenance of machinery and equipment by diagnosing and troubleshooting special service problems following all building codes, blueprints, instructions, and manuals.

{/* The air conditioning technician’ role also involves estimating material and labor cost and determining plan and requirements for installing, fabricating, and start-up; testing, and servicing HVAC equipment. */}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
 
                </div>
        </div>
    );
}