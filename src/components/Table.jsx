import React, {useEffect, useState} from 'react';
import Col from "./Col";
import Row from "./Row";

const Table = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rows, setRows] = useState([]);

    const get_data = async () => {
        await fetch("http://192.168.0.111/")
                .then(res => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setRows(result);
                        setTimeout(get_data, 2000);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
    }

    useEffect(get_data, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <table>
                <tbody>
                <tr>
                    <Col name={'Имя'}/>
                    <Col name={'Фамилия'}/>
                    <Col name={'Возраст'}/>
                    <Col name={'Хобби'}/>
                </tr>

                {
                    rows.map(row => (
                        <tr key={row.id}>
                            <Row value={row.first_name}/>
                            <Row value={row.last_name}/>
                            <Row value={row.age}/>
                            <Row value={row.hobby}/>
                        </tr>

                    ))}
                </tbody>
            </table>
        );
    }
}
export default Table;