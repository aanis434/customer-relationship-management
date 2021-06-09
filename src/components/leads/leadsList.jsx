import React from 'react';
import { Link } from 'react-router-dom';
import ListHeader from '../contents/listHeader';
import Table from '../common/table';

const LeadsList = () => {

  const cards = [
    {
      "count": "24",
      "label": "Contacted"
    },
    {
      "count": "21",
      "label": "Qualified"
    },
    {
      "count": "23",
      "label": "Working"
    },
    {
      "count": "23",
      "label": "Proposal sent"
    }
  ];

    return (
        <div className="main-content">
        <section className="section">

          <ListHeader title="Leads" month="June" cards={cards} />          

          <div className="section-body">
            <span className="section-title"></span>
            <Link to="/leads/create" className="btn btn-primary">Add new lead</Link>
            <a href="{() => false}" className="btn btn-info">Import lead</a>

            <p className="section-lead"></p>

            <Table />
            
          </div>
        </section>
      </div>
    );
} 

export default LeadsList;