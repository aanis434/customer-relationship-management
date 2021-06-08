import Table from '../common/table';

const ListBody = ({ data, columns }) => {
    return (
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
                            <Table
                                data={data}
                                columns={columns}
                            />
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
    );
}

export default ListBody;