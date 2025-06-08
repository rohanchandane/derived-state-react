import { useState } from "react";
import ArticleList from "../../presentation/ArticleList";
import FilterText from "../../presentation/FilterText";
import type { ArticleType } from "../../../type/article";

function ArticleContainer() {
    const articles1: ArticleType[] = [
        { title: "Jack's title", id: 1 },
        { title: "Lisa's title", id: 2 },
        { title: "Peter's title", id: 3 },
        { title: "Roman's title", id: 4 },
        { title: "Sarah's title", id: 5 },
        { title: "Eric's title", id: 6 },
        { title: "Fiora's title", id: 7 },
    ];

    const [filterString, setFilterString] = useState("");

    // React Pattern: Derived state
    // Derived State: doesn't need state (useState) variable here to store this
    const filteredList = articles1.filter((item) => {
        return item.title.toLowerCase().includes(filterString.toLowerCase())
    });

    return(
        <>
            <h1>Dashboard</h1>
            <FilterText handleChange={setFilterString} />
            <ArticleList filteredList={filteredList}/>
        </>
    )
}

export default ArticleContainer;
