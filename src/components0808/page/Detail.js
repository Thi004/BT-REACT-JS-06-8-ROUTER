import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function Detail () {
    const [data, setData] = useState([]);
    let {x} = useParams()
    useEffect(() => {
        axios.get('http://localhost:3000/students/'+x).then(res => {
            setData(res.data)
        })
    },[])
    return (
        <>
            <h1>Detail Student</h1>
            <h2>Name: {data.name}</h2>
            <h2>Score: {data.score}</h2>
            <h2>Description: {data.description}</h2>
            <h2>Action: {data.action}</h2>
        </>
    )
}

export default Detail