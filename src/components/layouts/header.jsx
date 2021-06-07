import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [heading, setHeading] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setHeading(props.title);
        setLink(props.link);
    }, [props.title, props.link]);

    return (
        <div className="section-header">
            <h1>{ heading }</h1>
            <div className="section-header-breadcrumb">
                <Link to={link} className="btn btn-primary">Back to list</Link>
            </div>
        </div>
    );
}

export default Header;