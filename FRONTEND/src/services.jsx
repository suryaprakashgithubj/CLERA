import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import UserService from './Api';
import './service.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Services() {

    React.useEffect(() => {
        fetchdata();

    }, [])

    const [details, setDetails] = React.useState([]);

    const { token } = useSelector(state => state.master)
    
    const navigate=useNavigate();

    const fetchdata = async () => {
        try {

            const response = await UserService.getServices(token);
            setDetails(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='serv'>
            <div style={{ justifyContent: "center", display: "flex", paddingTop: "2.5%", fontFamily: "sans-serif", fontSize: "190%" }}>
                <p>Discover all the services provided by CLERA and book your respective service that you are looking for!!</p>
            </div>
            <div className='card1'>
                <div className="electrician" style={{display:"flex", justifyContent:"space-around" }}>
                    {
                        details.map((ele) => {
                            return (
                                <Card sx={{ maxWidth: 345, maxHeight: 1000, marginRight:"30px" }} onClick={() => navigate(`/p_info/${ele.category}`)}>
                                    <CardActionArea>
                                        {/* <CardMedia
                                            component="img"
                                            height="250"
                                            image="/images/elec.jpg"
                                            alt="green iguana"
                                        /> */}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" >
                                                {ele.category}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {ele.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    );
}