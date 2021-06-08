import React from 'react';
import { Link } from 'react-router-dom';
import ListHeader from '../contents/listHeader';
import Table from '../common/table';

const CustomersList = () => {

  const cards = [
    {
      "count": "24",
      "label": "Active customers"
    },
    {
      "count": "21",
      "label": "Inactive customers"
    },
    {
      "count": "23",
      "label": "Active contacts"
    },
    {
      "count": "23",
      "label": "Active today"
    }
  ];

    return (
        <div className="main-content">
        <section className="section">

          <ListHeader title="Customer" month="August" cards={cards} />          

          <div className="section-body">
            <span className="section-title"></span>
            <Link to="/customers/create" className="btn btn-primary">Add new customer</Link>
            <a href="{() => false}" className="btn btn-info">Import customer</a>

            <p className="section-lead"></p>

            <Table />
            
          </div>
        </section>
      </div>
    );
} 

export default CustomersList;