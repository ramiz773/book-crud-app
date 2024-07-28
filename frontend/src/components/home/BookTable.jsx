import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const BookTable = ({ books }) => {
   return (
      <table className="w-full mt-7">
         <thead>
            <tr>
               <th className="border border-slate-600 ">No</th>
               <th className="border border-slate-600 ">Title</th>
               <th className="border border-slate-600 ">Author</th>
               <th className="border border-slate-600 ">Publish Year</th>
               <th className="border border-slate-600 ">Operations</th>
            </tr>
         </thead>
         <tbody>
            {books?.map((book, index) => {
               return (
                  <tr
                     key={book._id}
                     className="h-8 even:bg-sky-50 odd:bg-sky-100"
                  >
                     <td className="border border-slate-800  text-center rounded-sm">
                        {index + 1}
                     </td>
                     <td className="border border-slate-800 text-center rounded-sm">
                        {book.title}
                     </td>
                     <td className="border border-slate-800 text-center rounded-sm">
                        {book.author}
                     </td>
                     <td className="border border-slate-800 text-center rounded-sm max-md:hidden">
                        {book.publishYear}
                     </td>
                     <td className="border border-slate-800 rounded-sm">
                        <div className="flex justify-center gap-x-4">
                           <Link to={`/book/details/${book._id}`}>
                              <BsInfoCircle className="text-2xl text-green-800" />
                           </Link>
                           <Link to={`/book/edit/${book._id}`}>
                              <AiOutlineEdit className="text-2xl text-yellow-600" />
                           </Link>
                           <Link to={`/book/delete/${book._id}`}>
                              <MdOutlineDelete className="text-2xl text-red-600" />
                           </Link>
                        </div>
                     </td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
};

export default BookTable;
