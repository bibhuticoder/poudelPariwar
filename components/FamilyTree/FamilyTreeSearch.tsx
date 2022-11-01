import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { Person } from '../../types';
import { searchTree } from '../../utils/family-tree.util';

type Props = {
    treeData: any
};

const FamilyTreeSearch = ({ treeData = null }: Props) => {

    const [keyword, setKeyword] = useState<String>("");
    const [results, setResults] = useState<Person[]>([]);

    const handleKeywordChange = (event: any) => {
        setKeyword((event.target.value as String).toLowerCase())
        setResults(searchTree(keyword, treeData));
    }

    const handleResultChoose = (id: String) => {
        setKeyword("");
        setResults([]);

        if (typeof window !== "undefined") {
            window.document.dispatchEvent(new CustomEvent('show-person-detail', { detail: id }));
        }
    }


    return <div className="relative flex-grow md:max-w-xs">
        <div className="flex items-center border-2 border-gray-200 rounded px-2 py-1 bg-gray-100">
            <span className="text-black">
                <BsSearch />
            </span>
            <input type="text" value={keyword as string} className="pl-2 outline-none w-full text-black bg-gray-100" onChange={handleKeywordChange} />
        </div>

        {results.length > 0 &&
            <div className="absolute bg-gray-50 rounded z-10 w-full shadow-md">
                <div className="flex flex-col">
                    {results.map(sr =>
                        <div key={sr.id} onClick={() => handleResultChoose(sr.id)} className="cursor-pointer py-2 mx-2 my-1 text-black hover:text-gray-900">
                            {sr.name}
                        </div>
                    )}
                </div>
            </div>
        }
    </div>
}

export default FamilyTreeSearch;