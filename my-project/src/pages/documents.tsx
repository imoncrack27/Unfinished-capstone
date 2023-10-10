import BaseLayout from "@/components/BaseLayout";
import Head from "next/head";
import { useState } from "react";

const DocumentRequester = () => {
  const [documentName, setDocumentName] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [requestResult, setRequestResult] = useState("");
  const [trackedDocument, setTrackedDocument] = useState(null);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    setIsRequesting(true);

    try {
      // Simulate an API request, replace with your actual API endpoint
      const response = await fetch("/api/request-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentName, requestMessage }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setTrackedDocument(responseData); // Store the tracked document information
        setRequestResult("Document request submitted successfully!");
      } else {
        setRequestResult(
          "Failed to submit document request. Please try again."
        );
      }
    } catch (error) {
      setRequestResult("An error occurred while submitting the request.");
    } finally {
      setIsRequesting(false);
    }
  };

  return (
    <BaseLayout>
      <div>
        <Head>
          <title>LSU Registrar Operational System</title>
          <link rel="icon" href="/LOGO.jpg" />
        </Head>

        <main className="bg-gray-100 min-h-screen p-6">
          <div className="bg-white rounded-lg shadow-2xl p-6">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              Document Requester
            </h1>

            {requestResult && (
              <div
                className={`${
                  requestResult.includes("Failed")
                    ? "text-red-500"
                    : "text-green-500"
                } mb-4`}
              >
                {requestResult}
              </div>
            )}

            <form onSubmit={handleRequestSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600">Document Name</label>
                <input
                  type="text"
                  className="border rounded-lg w-full py-2 px-3"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600">Request Message</label>
                <textarea
                  className="border rounded-lg w-full py-2 px-3"
                  rows={4}
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="mb-10 flex justify-center">
                <button
                  type="submit"
                  className="border-2 border-green-500 text-green-500 px-20 py-1.5 flex justify-center font-semibold rounded-full hover:bg-green-500 hover:text-white"
                >
                  {isRequesting ? "Submitting..." : "Request Document"}
                </button>
              </div>
            </form>

            {trackedDocument && (
              <div className="mt-4 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2">
                  Tracked Document Information
                </h2>
                <p>Document Name: {trackedDocument.documentName}</p>
                <p>Request Message: {trackedDocument.requestMessage}</p>
                {/* Display additional document details here */}
              </div>
            )}
          </div>
        </main>
      </div>
    </BaseLayout>
  );
};

export default DocumentRequester;
