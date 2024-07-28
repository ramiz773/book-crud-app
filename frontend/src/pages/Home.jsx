import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdOutlineAddBox } from "react-icons/md";
import BookCard from "../components/home/BookCard";
import BookTable from "../components/home/BookTable";
function Home() {
   const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [showType, setShowType] = useState("table");
   useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
         try {
            const { data } = await axios.get("http://localhost:3001/api/books");
            setTimeout(() => {
               setBooks(data.books);
               setLoading(false);
            }, 1000);
         } catch (error) {
            console.log(error.message);
            setError(error.message);
            setLoading(false);
         }
      };
      fetchData();
   }, []);
   return (
      <div className="p-4">
         <div className="flex justify-center items-center gap-x-4">
            <button
               className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
               onClick={() => {
                  setShowType("table");
               }}
            >
               Table
            </button>
            <button
               className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
               onClick={() => {
                  setShowType("card");
               }}
            >
               Card
            </button>
         </div>
         <div className="flex justify-between items-center">
            <h1 className="text-3xl my-8">BookList</h1>
            <Link to={"/book/create"}>
               <MdOutlineAddBox className="text-sky-800 text-4xl" />
            </Link>
         </div>
         {loading ? (
            <Spinner />
         ) : showType === "table" ? (
            <BookTable books={books} />
         ) : (
            <BookCard books={books} />
         )}
      </div>
   );
}

export default Home;
