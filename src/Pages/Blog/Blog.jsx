import CategoryBanner from '../../utilities/shared/CategoryBanner/CategoryBanner';

const Blog = () => {
  return (
    <>
      <div className=''>
        <CategoryBanner>blog</CategoryBanner>

        <div className='mt-4  px-16 py-4 flex flex-col gap-6'>
          <div className='mx-auto'>
            <div className='block w-full p-6 md:flex bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
              <div className='md:w-1/4 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?...?
                </h5>
              </div>
              <div className='md:w-3/4'>
                <p className='mb-2 text-gray-800 font-lg dark:text-gray-800'>
                  To token are commonly used in authentication and authorization
                  systems. {"Here's"} an overview of what they are and how they
                  work, for Example....
                  <ol className='list-decimal mt-5'>
                    <li>
                      An access token is a credential that is used to access
                      protected resources in an application or API. It is
                      typically short-lived and contains information about the
                      {"user's"} identity and permissions.
                    </li>
                    <li className='mt-5'>
                      A refresh token is a credential that is used to obtain a
                      new access token when the current access token expires.
                      Unlike access tokens, refresh tokens are typically
                      long-lived and are used to obtain new access token,
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='block w-full p-6 md:flex bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
              <div className='md:w-1/4 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Compare SQL and NoSQL databases?....?
                </h5>
              </div>
              <div className='md:w-3/4'>
                <p className='mb-2 text-gray-800 font-lg dark:text-gray-800'>
                  SQL (Structured Query Language) and NoSQL (Not Only SQL) are
                  two different types of database management systems. {"Here's"}{' '}
                  a comparison of SQL and NoSQL databases
                  <ol className='list-decimal mt-5'>
                    <li>
                      SQL databases use a structured data model based on tables
                      with predefined schemas. They enforce strict data
                      consistency and rely on relational integrity.
                    </li>
                    <li className='mt-5'>
                      NoSQL databases use various data models, such as
                      key-value, document, columnar, or graph-based models. They
                      provide more flexibility in data organization and allow
                      for schema-less or dynamic schemas.
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='block w-full p-6 md:flex bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
              <div className='md:w-1/4 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  What is express js? What is Nest JS ?.....?
                </h5>
              </div>
              <div className='md:w-3/4'>
                <p className='mb-2 text-gray-800 font-lg dark:text-gray-800'>
                  Here are some of the key differences between the two:
                  <ol className='list-decimal mt-5'>
                    <li>
                      Express.js is a minimalistic and flexible web application
                      framework for Node.js. It provides a set of features and
                      utilities for building web applications and APIs.
                      Express.js is known for its simplicity, lightweight
                      nature, and ease of use. It allows developers to handle
                      HTTP requests, define routes,
                    </li>
                    <li className='mt-5'>
                      NestJS, on the other hand, is a TypeScript-based
                      progressive web application framework for building
                      scalable and efficient server-side applications. It is
                      built with a focus on modularity, testability, and
                      extensibility.
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='block w-full p-6 md:flex bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
              <div className='md:w-1/4 '>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  What is MongoDB aggregate and how does it work?
                </h5>
              </div>
              <div className='md:w-3/4'>
                <p className='mb-2 text-gray-800 font-lg dark:text-gray-800'>
                  In MongoDB, the aggregate framework is a powerful feature that
                  allows you to perform advanced data processing and analysis
                  operations on the data stored in your MongoDB collections. It
                  provides a flexible and efficient way to query and manipulate
                  data by applying a sequence of operations called stages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
