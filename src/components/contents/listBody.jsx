import Pagination from '../common/pagination';
import Table from '../common/table';

const ListBody = ({ data, columns, totalCount, ...rest }) => {
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
                        <Pagination
                            itemCount={totalCount}
                            {...rest}            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListBody;