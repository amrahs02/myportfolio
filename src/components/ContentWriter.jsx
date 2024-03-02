// src/components/ContentWriter.jsx
import React from 'react';
import Breadcrumb from './BreadCrumb';

const ContentWriter = () => {
    return (
        <>
            <div className=" bg-dark-gray dark:bg-gray-100 flex justify-center items-center text-white py-12">
                <div className=" sm:w-1/2 m-4  container">
                    <p className="text-gray-800 mb-4">
                        As a part-time content writer, I enjoy creating articles on various topics. Below are some of my featured articles published on <span className='text-green-500' >GeeksforGeeks</span> :
                    </p>
                    <ArticleCard
                        title="Benefits of Using Hooks in React Redux"
                        link="https://www.geeksforgeeks.org/what-are-the-benefits-of-using-hooks-in-react-redux/"
                        description="Read my article on the benefits of using hooks in React Redux."
                    />

                    <ArticleCard
                        title="What is the React Context API?"
                        link="https://www.geeksforgeeks.org/what-is-the-react-context-api/"
                        description="Explore the React Context API in my article."
                    />

                    {/* Add more ArticleCards for additional articles */}
                </div>
            </div>
        </>
    );
};

const ArticleCard = ({ title, link, description }) => {
    return (
        <div className="bg-dark-gray my-4 dark:text-gray-700 dark:bg-gray-100 text-gray-400 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 mb-4">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read Article
            </a>
        </div>
    );
};

export default ContentWriter;
