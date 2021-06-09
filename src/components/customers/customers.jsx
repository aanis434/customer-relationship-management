import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ListHeader from '../contents/listHeader';
import ListBody from '../contents/listBody';
import { getCustomers } from './../../services/customerService';
import SwitchButton from './../common/switchButton';
import { Paginate } from '../../utils/paginate';

const Customers = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;
 
  useEffect(() => {
    const customers = getCustomers();
    setData(customers);
    
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  console.log(data);

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
        content: customer => (<SwitchButton status={customer.status} />)
      },
    {
      label: "Action",
      key: "action",
      content: customer => (
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
    const customers = Paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data:customers };
  };

  const { totalCount, data: customers } = getPageData();
  
    return (
        <div className="main-content">
        <section className="section">
         
          <ListHeader title="Customer" month="August" cards={cards} totalCount={totalCount} />          

          <div className="section-body">
            <span className="section-title"></span>
            <Link to="/customers/create" className="btn btn-primary">Add new customer</Link>
            <a href="{() => false}" className="btn btn-info">Import customer</a>

            <p className="section-lead"></p>

            <ListBody
              data={customers}
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

export default Customers;