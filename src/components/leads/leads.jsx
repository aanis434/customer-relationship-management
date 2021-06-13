import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ListHeader from '../contents/listHeader';
import ListBody from '../contents/listBody';
import { getLeads } from '../../services/leadService';
import SwitchButton from '../common/switchButton';
import { Paginate } from '../../utils/paginate';

const Leads = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;
 
  useEffect(() => {
    const leads = getLeads();
    setData(leads);
    
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  console.log(data);

  const cards = [
    {
      "count": "24",
      "label": "Active Leads"
    },
    {
      "count": "21",
      "label": "Inactive Leads"
    },
    {
      "count": "23",
      "label": "Active contacts"
    },
    {
      "count": "24",
      "label": "Inactive contacts"
    },
    {
      "count": "23",
      "label": "Active today"
    }
  ];

  const columns = [
      { path: "company", label: "Company"},
      { path: "contact_name", label: "Contact name" },
      { path: "email", label: "Email" },
      { path: "phone", label: "Phone" },
      { path: "designation", label: "Designation" },
      { path: "created_at", label: "Created at" },
      {
        key: "status",
        label: "Status",
        content: lead => (<SwitchButton status={lead.status} />)
      },
    {
      label: "Action",
      key: "action",
      content: lead => (
        <div>
          <a href="{() => false}" class="btn btn-sm btn-icon btn-primary">
            <i class="fa fa-edit"></i>
          </a>
          <a href="{() => false}" class="btn btn-sm btn-icon btn-danger">
            <i class="fa fa-trash"></i>
          </a>
        </div>
      )
    }
  ];

  const getPageData = () => {
    let filtered = data;
    const leads = Paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data:leads };
  };

  const { totalCount, data: leads } = getPageData();
  
    return (
        <div className="main-content">
        <section className="section">
         
          <ListHeader title="Lead" month="August" cards={cards} totalCount={totalCount} />          

          <div className="section-body">
            <span className="section-title"></span>
            <Link to="/leads/create" className="btn btn-primary">Add new</Link>
            <a href="{() => false}" className="btn btn-info">Import</a>

            <p className="section-lead"></p>

            <ListBody
              data={leads}
              columns={columns}
              totalCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            
          </div>
        </section>
      </div>
    );
} 

export default Leads;