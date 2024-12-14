import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

//<Form>  =  component extends HTML <form> to provide prefetching of loading ui, client - side navigation on submission etc..

const SearchForm = ({ query }: { query?: string }) => {
   // const query = "test"; //can safely remove this fake query once we add props.

   return (
      <Form action="/" scroll={false} className="search-form">
         <input
            name="query"
            default  Value={query}
            className="search-input"
            placeholder="Search for startups"
         />
         <div className="flex gap-2">
            {query && <SearchFormReset />}
            <button type="submit" className="search-btn text-white">
               <Search size={24} />
            </button>
         </div>
      </Form>
   );
};

export default SearchForm;
