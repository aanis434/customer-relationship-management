import { useState, useEffect } from 'react';

const useData = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = getData();
        setData(getData);
    }, [data]);
    

    // let filtered = data;
    //     if (searchQuery)
    //         filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
    //     else if (selectedGenre && selectedGenre._id !== "")
    //         filtered = allMovies.filter(m => m.genre._id.indexOf(selectedGenre._id) > -1);
        
    //     const sortedMovies = _.orderBy(filtered, sortColumn.path, sortColumn.order);

    //     const movies = Paginate(sortedMovies, currentPage, pageSize);
    //     return { totalCount: filtered.length, data:movies };
    
    return data;
}
  
export default useData;