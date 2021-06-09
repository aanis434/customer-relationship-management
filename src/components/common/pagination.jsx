import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {

    const { itemCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav className="d-inline-block">
            <ul className="pagination mb-0">
                <li className="page-item disabled">
                    <button className="page-link" tabindex="-1"><i className="fas fa-chevron-left"></i></button>
                </li>

                {pages.map(page =>
                    (<li key={page} className={(currentPage === page) ? "page-item active" : "page-item"}>
                        <button className="page-link"
                            onClick={() => onPageChange(page)}>{page}<span className="sr-only">(current)</span>
                        </button>
                    </li>) 
                )}
                
                <li className="page-item">
                    <button className="page-link"><i className="fas fa-chevron-right"></i></button>
                </li>
            </ul>
        </nav>
    );
}
 
Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;