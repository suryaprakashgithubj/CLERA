import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserService from './Api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const Provider_Info = () => {

  const { category } = useParams();
  const { token } = useSelector(state => state.master)
  const { userDetails } = useSelector(state => state.master)

  useEffect(() => {
    fetchData();
  }, [])

  const [details, setDetails] = useState([]);
  console.log(userDetails.location)
  const fetchData = async () => {
    const response = await UserService.getProviders(category, userDetails.location, token);
    setDetails(response.data);
  }

  return (
    <div style={{display:"grid" , placeContent:"center" , marginTop:"15%"}}>

      {
        details.map(ele => {
          return (
            <>
              <Card sx={{ maxWidth: 700, maxHeight: 1000 }}>
                <CardActionArea>
                  
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                     Name: {ele.firstName} {ele.lastName}
                      
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Service:{ele.serviceProviding}<br/>
                      {ele.mobile}
                      {ele.role}
                      Experience: {ele.experience} years<br/>
                      Price:{ele.price}<br/>
                      {ele.workinghour}<br/>
                      {/* {ele.serviceProviding} */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </>
          );
        })
      }
    </div>
  )
}

export default Provider_Info;