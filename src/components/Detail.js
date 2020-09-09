import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Global from './Global';
import Country from './Countries';

function Detail() {
    const [country,setCountry] = useState([]);
    const [global,setGlobal] = useState([]);
    const [date,setDate] = useState('');
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        async function fetchData() {
            await axios.get("https://api.covid19api.com/summary")
              .then(res =>{
                setGlobal(res.data.Global)
                setCountry(res.data.Countries)
                setDate(res.data.Date)
                setLoading(false)
              })
        }
        fetchData();
    },[]);

    if (loading){
        return(
            <h3>loading....</h3>
        )
    }
    return (
        <>
            <Global summery={global} curdate={date}/>
            <Country conData={country}/>
        </>
    )
}

export default Detail;