interface FilterTextType{
    handleChange: (searchText: string) => void;
}
function FilterText(props: FilterTextType) {
    const { handleChange } = props;
    
    return(
        <>
            <input type="text" onChange={(e) => handleChange(e.target.value)}/>
        </>
    )
}

export default FilterText;