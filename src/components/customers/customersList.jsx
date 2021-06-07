import React from 'react';
import { Link } from 'react-router-dom';

const CustomersList = (props) => {
    return (
        <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-stats">
                  <div className="card-stats-title">
                    Customer Summary -
                    <div className="dropdown d-inline">
                      <a className="font-weight-600 dropdown-toggle" data-toggle="dropdown"
                        id="orders-month">August</a>
                      <ul className="dropdown-menu dropdown-menu-sm">
                        <li className="dropdown-title">Select Month</li>
                        <li><a className="dropdown-item">January</a></li>
                        <li>
                          <a className="dropdown-item">February</a>
                        </li>
                        <li><a className="dropdown-item">March</a></li>
                        <li><a className="dropdown-item">April</a></li>
                        <li><a className="dropdown-item">May</a></li>
                        <li><a className="dropdown-item">June</a></li>
                        <li><a className="dropdown-item">July</a></li>
                        <li>
                          <a className="dropdown-item active">August</a>
                        </li>
                        <li>
                          <a className="dropdown-item">September</a>
                        </li>
                        <li><a className="dropdown-item">October</a></li>
                        <li>
                          <a className="dropdown-item">November</a>
                        </li>
                        <li>
                          <a className="dropdown-item">December</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-stats-items">
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">24</div>
                      <div className="card-stats-item-label">
                        Active Customers
                      </div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">12</div>
                      <div className="card-stats-item-label">
                        Inactive customers
                      </div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">23</div>
                      <div className="card-stats-item-label">Active contacts</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">23</div>
                      <div className="card-stats-item-label">
                        Inactive contacts
                      </div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">23</div>
                      <div className="card-stats-item-label">Active today</div>
                    </div>
                  </div>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-archive"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Customers</h4>
                  </div>
                  <div className="card-body">59</div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-body">
            <span className="section-title"></span>
            <Link to="/customers/create" className="btn btn-primary">Add new customer</Link>
            <a className="btn btn-info">Import customer</a>

            <p className="section-lead"></p>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Customer List</h4>
                    <div className="card-header-form">
                      <form>
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search" />
                          <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          <th>#</th>
                          <th>Company</th>
                          <th>Contact name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Designation</th>
                          <th>Created at</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Saputra</td>
                          <td>Irwansyah Saputra</td>
                          <td>aputra@mail.com</td>
                          <td>009 200 400 56</td>
                          <td>Managing Director</td>
                          <td>2017-01-09</td>
                          <td>
                            <label className="custom-switch mt-2">
                              <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                              <span className="custom-switch-indicator"></span>
                              <span className="custom-switch-description badge badge-success">Active</span>
                            </label>
                          </td>
                          <td>
                            <a className="btn btn-sm btn-icon btn-primary">
                              <i className="fa fa-edit"></i>
                            </a>
                            <a className="btn btn-sm btn-icon btn-danger">
                              <i className="fa fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Saputra</td>
                          <td>Irwansyah Saputra</td>
                          <td>aputra@mail.com</td>
                          <td>009 200 400 56</td>
                          <td>Managing Director</td>
                          <td>2017-01-09</td>
                          <td>
                            {/* <div className="">Active</div> */}
                            <label className="custom-switch mt-2">
                              <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input"/>
                              <span className="custom-switch-indicator"></span>
                              <span className="custom-switch-description badge badge-warning">Inactive</span>
                            </label>
                          </td>
                          <td>
                            <a className="btn btn-sm btn-icon btn-primary">
                              <i className="fa fa-edit"></i>
                            </a>
                            <a className="btn btn-sm btn-icon btn-danger">
                              <i className="fa fa-trash"></i>
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <nav className="d-inline-block">
                      <ul className="pagination mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" tabindex="-1"><i className="fas fa-chevron-left"></i></a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link">1 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">2</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link">3</a>
                        </li>
                        <li className="page-item">
                          <a className="page-link"><i className="fas fa-chevron-right"></i></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
} 

export default CustomersList;