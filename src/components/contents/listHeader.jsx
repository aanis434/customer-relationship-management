
const ListHeader = ({title, month, cards }) => {
    return (        
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card card-statistic-2">   
            <div className="card-stats">
              <div className="card-stats-title">
                {title} Summary -
                <div className="dropdown d-inline">
                  <a href="{() => false}" className="font-weight-600 dropdown-toggle" data-toggle="dropdown"
                                    id="orders-month">{ month }</a>
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
                  
                {cards.map((card) => (
                    <div className="card-stats-item">
                        <div className="card-stats-item-count">{ card.count }</div>
                        <div className="card-stats-item-label">
                          { card.label }
                        </div>
                    </div>
                ))}
                
              </div>
            </div>
            <div className="card-icon shadow-primary bg-primary">
              <i className="fas fa-archive"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total</h4>
              </div>
              <div className="card-body">59</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ListHeader;