import type { ArticleType } from "../../../type/article";

interface ArticleListType{
    filteredList: ArticleType[]
}

function ArticleList(props: ArticleListType) {
    const { filteredList } = props;

    return(
        <>
            <div>
            {
                filteredList.map( (item) => {
                    return <div key={item.id}> {item.title} </div>
                })
            }
            </div>
        </>
    ) 
}

export default ArticleList;