import React from 'react';
import Breadcrumb from './BreadCrumb';

const ContentWriter = () => {
    return (
        <>
            <div className="bg-dark-gray dark:bg-gray-100 flex justify-center items-center text-white py-8">
                <div className="sm:w-1/2 mx-4 container">
                    <p className=" dark:text-gray-800  text-gray-100 mx-2 sm:mb-4">
                        Welcome to my corner of knowledge-sharing! As a part-time content writer, I've had the pleasure of delving into various topics and contributing articles to platforms like{' '}
                        <span className="text-green-500">GeeksforGeeks</span>. Below, you'll find a curated selection of my featured articles, covering a range of web development and technology subjects. Explore, learn, and enjoy the insights!
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
                    <ArticleCard
                        title="What is Redux Toolkit?"
                        link="https://www.geeksforgeeks.org/what-is-redux-toolkit/"
                        description="Learn about Redux Toolkit and its advantages."
                    />

                    <ArticleCard
                        title="How to use ::before and ::after elements in Tailwind CSS?"
                        link="https://www.geeksforgeeks.org/how-to-use-before-and-after-elements-in-tailwind-css/"
                        description="Discover the use of ::before and ::after elements in Tailwind CSS."
                    />

                    <ArticleCard
                        title="How to install Bootstrap 5?"
                        link="https://www.geeksforgeeks.org/how-to-install-bootstrap-5/                                                                                                                                                                                                                     "
                        description="Step-by-step guide on installing Bootstrap 5."
                    />
                    {/* Add remaining articles here */}
                    <ArticleCard
                        title="JavaScript Program to find Intersection of Unsorted Arrays"
                        link="https://www.geeksforgeeks.org/javascript-program-to-find-intersection-of-unsorted-arrays/"
                        description="Learn how to find the intersection of unsorted arrays using JavaScript."
                    />

                    <ArticleCard
                        title="How to Convert an Array to a Vector in C++?"
                        link="https://www.geeksforgeeks.org/how-to-convert-an-array-to-a-vector-in-cpp/"
                        description="Learn the process of converting an array to a vector in C++."
                    />

                    <ArticleCard
                        title="How to Create and View Access Tokens in NPM?"
                        link="https://www.geeksforgeeks.org/how-to-create-and-view-access-tokens-in-npm/"
                        description="Explore the steps to create and view access tokens in NPM."
                    />
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
            <a href={link} target="_blank" rel="noopener noreferrer" className=" dark:text-gray-800 border border-gray-500 text-white px-6 py-2 rounded-xl hover:underline">
                Read Article
            </a>
        </div>
    );
};

export default ContentWriter;
