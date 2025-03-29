import React from "react";
import { Link } from "react-router-dom";


const articles = [
  { number: 1, title: "What is Redux Toolkit?", link: "https://www.geeksforgeeks.org/what-is-redux-toolkit/", description: "Learn about Redux Toolkit and its advantages." },
  { number: 2, title: "How to Convert an Array to a Vector in C++?", link: "https://www.geeksforgeeks.org/how-to-convert-an-array-to-a-vector-in-cpp/", description: "Learn the process of converting an array to a vector in C++." },
  { number: 3, title: "What is the React Context API?", link: "https://www.geeksforgeeks.org/what-is-the-react-context-api/", description: "Explore the React Context API in my article." },
  { number: 4, title: "Boyer Moore Algorithm for Pattern Searching in C", link: "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching-in-c/", description: "Understand the Boyer Moore algorithm for pattern searching." },
  { number: 5, title: "How to Teach Rounding Numbers?", link: "https://www.geeksforgeeks.org/how-to-teach-rounding-numbers/", description: "Explore methods to teach rounding numbers effectively." },
  { number: 6, title: "Installing a GNOME Desktop Extension in Ubuntu", link: "https://www.geeksforgeeks.org/installing-a-gnome-desktop-extension-in-ubuntu/", description: "Learn how to install GNOME desktop extensions in Ubuntu." },
  { number: 7, title: "How to Install Podman on Ubuntu?", link: "https://www.geeksforgeeks.org/how-to-install-podman-on-ubuntu/", description: "Step-by-step guide on installing Podman on Ubuntu." },
  { number: 8, title: "Class Decorators in TypeScript", link: "https://www.geeksforgeeks.org/class-decorators-in-typescript/", description: "Learn about class decorators in TypeScript." },
  { number: 9, title: "How to Change the Checkbox Background Color in CSS?", link: "https://www.geeksforgeeks.org/how-to-change-the-checkbox-background-color-in-css/", description: "Customize checkbox background color using CSS." },
  { number: 10, title: "How to Undo Git Commit Amend?", link: "https://www.geeksforgeeks.org/how-to-undo-git-commit-amend/", description: "Guide to undoing git commit --amend changes." },
  { number: 11, title: "How to Resolve Another Git Process Running?", link: "https://www.geeksforgeeks.org/how-to-resolve-another-git-process-seems-to-be-running-in-this-repository/", description: "Fix the 'Another Git process seems to be running' issue." },
  { number: 12, title: "How to Create Gradient Color for Progress Bar in CSS?", link: "https://www.geeksforgeeks.org/how-to-create-gradient-color-of-progress-bar-in-css/", description: "Guide to creating a gradient-colored progress bar in CSS." },
  { number: 13, title: "How to Fully Delete a Git Repository?", link: "https://www.geeksforgeeks.org/how-to-fully-delete-a-git-repository-created-with-init/", description: "Steps to completely delete a Git repository." },
  { number: 14, title: "Setting Up GitLab Runner in Ubuntu", link: "https://www.geeksforgeeks.org/setting-up-gitlab-runner-in-ubuntu/", description: "Guide to setting up GitLab Runner in Ubuntu." },
  { number: 15, title: "Install Grafana in Debian 11", link: "https://www.geeksforgeeks.org/install-grafana-in-debian-11/", description: "Steps to install and configure Grafana on Debian 11." },
  { number: 16, title: "Remove Large Files from Git Commit History", link: "https://www.geeksforgeeks.org/remove-large-files-from-commit-history-in-git/", description: "Guide to removing large files from Git history." },
  { number: 17, title: "How to Clear the NPM Cache?", link: "https://www.geeksforgeeks.org/how-to-clear-the-npm-cache-on-linux-macos-and-windows/", description: "Learn how to clear the NPM cache on different OS." },
  { number: 18, title: "How to Use NPM Scripts as a Build Tool?", link: "https://www.geeksforgeeks.org/how-to-use-npm-scripts-as-a-build-tool/", description: "Learn how to use NPM scripts for automation." },
  { number: 19, title: "Building a Carousel Component with React Hooks", link: "https://www.geeksforgeeks.org/building-a-carousel-component-with-react-hooks/", description: "Guide to creating a carousel component using React Hooks." },
  { number: 20, title: "Introduction to Angular Concepts", link: "https://www.geeksforgeeks.org/introduction-to-angular-concepts/", description: "Basic concepts of Angular for beginners." },
  { number: 21, title: "Describe Some Key Features of Redux Toolkit", link: "https://www.geeksforgeeks.org/describe-some-key-features-of-redux-toolkit/", description: "Key features and benefits of Redux Toolkit." },
  { number: 22, title: "JavaScript Program to Find Intersection of Unsorted Arrays", link: "https://www.geeksforgeeks.org/javascript-program-to-find-intersection-of-unsorted-arrays/", description: "Find intersection of unsorted arrays using JavaScript." },
  { number: 23, title: "How to Use ::before and ::after Elements in Tailwind CSS?", link: "https://www.geeksforgeeks.org/how-to-use-before-and-after-elements-in-tailwind-css/", description: "Discover the use of ::before and ::after elements in Tailwind CSS." },
  { number: 24, title: "How to Install Bootstrap 5?", link: "https://www.geeksforgeeks.org/how-to-install-bootstrap-5/", description: "Step-by-step guide on installing Bootstrap 5." },
  { number: 25, title: "Benefits of Using Hooks in React Redux", link: "https://www.geeksforgeeks.org/what-are-the-benefits-of-using-hooks-in-react-redux/", description: "Read about the benefits of using hooks in React Redux." },
  { number: 26, title: "How to Create and View Access Tokens in NPM?", link: "https://www.geeksforgeeks.org/how-to-create-and-view-access-tokens-in-npm/", description: "Guide on creating and viewing NPM access tokens." },
  
  // Improvement Articles
  { number: 27, title: "Median of Two Sorted Arrays of Different Sizes", link: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/", description: "Updated explanation for finding the median of two sorted arrays." },
  { number: 28, title: "Reverse Level Order Traversal", link: "https://www.geeksforgeeks.org/reverse-level-order-traversal/", description: "Updated article on reverse level order traversal in trees." },
  { number: 29, title: "Bubble Sort Algorithm in JavaScript", link: "https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/", description: "Improved explanation of Bubble Sort in JavaScript." },
  { number: 30, title: "How to Improve NPM Access Tokens Security?", link: "https://www.geeksforgeeks.org/how-to-create-and-view-access-tokens-in-npm/", description: "Updated security measures for NPM access tokens." }
];

const ContentWriter = () => {
  return (
    <div className="bg-dark-gray dark:bg-gray-100 flex flex-col justify-center items-center text-white py-8">
      <p className="dark:text-gray-800 w-3/4 text-gray-100 mx-2 sm:mb-4">
        Welcome to my corner of knowledge-sharing! As a part-time content
        writer, I've had the pleasure of delving into various topics and
        contributing articles to platforms like{" "}
        <Link
          to="https://www.geeksforgeeks.org/user/isandeep2183/contributions/"
          className="text-green-500 font-bold"
        >
          GeeksforGeeks
        </Link>{" "}
        and{" "}
        <Link
          to="https://www.medium.com/@amrahs02"
          className="text-black font-bold"
        >
          Medium
        </Link>
        . Below, you'll find a curated selection of my featured articles,
        covering a range of web development and technology subjects. Explore,
        learn, and enjoy the insights!
      </p>

      <div className="sm:w-4/5 w-full sm:grid sm:grid-cols-3 m-2 mx-4 container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            number={article.number}
            title={article.title}
            link={article.link}
            description={article.description}
          />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ title, link, description }) => {
  return (
    <div className="dark:bg-gray-300 m-4 dark:text-gray-700 text-gray-400 p-6 rounded-2xl bg-opacity-5 bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-gray-900 bg-opacity-5 bg-gray-900 text-white px-6 py-2 rounded-2xl hover:underline"
      >
        Read Article
      </a>
    </div>
  );
};

export default ContentWriter;
