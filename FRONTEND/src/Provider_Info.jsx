import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

const Provider_Info = () => {

  const { category } = useParams();
  const { token } = useSelector(state => state.master)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await Userservice.getProviders(category, location, token);
    setDetails(response.data);
  }

  return (
    <div>

      {category}
    </div>
  )
}

export default Provider_Info;