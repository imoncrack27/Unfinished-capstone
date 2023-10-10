import BaseLayout from "@/components/BaseLayout";
import Head from "next/head";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <BaseLayout>
        <Head>
          <title>LSU Registrar Operational System</title>
          <link rel="icon" href="/LOGO.jpg" />
        </Head>

        <main className="bg-gray-100 min-h-screen p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-semibold mb-4">
              About Document Tracking System
            </h1>

            <section className="mb-8">
              <p>
                The Document Tracking System is a web application designed to
                help users keep track of their important documents and monitor
                their status in real-time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {/* Individual team member cards */}
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <Image
                    src="/drexell.jpg"
                    alt="Team Member 1"
                    width={30}
                    height={50}
                    className="rounded-full h-16 w-16 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold">Drexell Mingo</h3>
                  <p className="text-gray-600">Programmer</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                  <Image
                    src="/profile1.jpg"
                    alt="Team Member 1"
                    width={30}
                    height={50}
                    className="rounded-full h-16 w-16 mx-auto mb-2"
                  />
                  <h3 className="text-lg font-semibold">Edric Pulgarinas</h3>
                  <p className="text-gray-600">Documentary</p>
                </div>

                {/* Add more team members */}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                Key features of our system include:
              </h2>
              <ul className="list-disc ml-6 text-2xl font-bold ">
                <li>Effortless document submission and tracking.</li>
                <li>Secure document storage and access control.</li>
                <li>Real-time updates on document status changes.</li>
                <li>Notifications for pending actions or updates.</li>
              </ul>

              <p className="text-gray-900">
                Whether you are a student, professional, or business owner, our
                Document Tracking System simplifies the process of managing and
                monitoring your documents, saving you time and ensuring that
                important paperwork is never lost or forgotten.
              </p>
            </section>
          </div>
        </main>
      </BaseLayout>
    </div>
  );
};

export default AboutUs;
