import BaseLayout from "@/components/BaseLayout";
import Head from "next/head";
import { useState, useEffect } from "react";
import { GrSearch } from "react-icons/Gr";

const Track = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate fetching documents data from an API
    // Replace this with your actual API call
    fetch("/api/documents")
      .then((response) => response.json())
      .then((data) => {
        setDocuments(data);
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, []);

  const filteredDocuments = documents.filter((document) =>
    document.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BaseLayout>
      <div className="w-full flex items-center justify-center">
        <Head>
          <title>LSU Operational System</title>
          <link rel="icon" href="/LOGO.jpg" />
        </Head>

        <main className="min-h-min mb-10 rounded-lg p-20 shadow-2xl bg-white">
          <h1 className="text-2xl font-semibold mb-4 rounded-lg p-10 bg-white">
            Tracking Documents
          </h1>

          {/* Search Bar */}
          <div className="bg-gray-200 w-100 p-2 flex items-center mb-3 rounded-lg">
            <GrSearch className="text-gray-400 m-2" />
            <input
              type="text"
              placeholder="Search Tracking Code here..."
              className="bg-gray-200 outline-none text-sm flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocuments.map((document) => (
              <li
                key={document.id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <h2 className="text-xl font-semibold">{document.title}</h2>
                <p>Author: {document.author}</p>
                <p>Status: {document.status}</p>
                {/* Add more document details as needed */}
              </li>
            ))}
          </ul>
          <div className="mb-10 text-center flex justify-center">
            <button
              type="submit"
              className=" border-2 border-green-500 text-green-500 px-12 py-1.5 flex justify-center font-semibold rounded-full hover:bg-green-500 hover:text-white"
            >
              Track
            </button>
          </div>
          <div className="flex items-end">
            Information About the document after submit
          </div>
        </main>
      </div>
    </BaseLayout>
  );
};

export default Track;
