const SearchBox = ({searchValue, setSearchValue}) => {
    return(
        <div className="col col-sm-4">
            <input 
                className='form-control' 
                value={searchValue} 
                type="text" 
                onChange={(e)=>setSearchValue(e.target.value)}
                placeholder='Type to search...'
            />
        </div>
    )
}

export default SearchBox