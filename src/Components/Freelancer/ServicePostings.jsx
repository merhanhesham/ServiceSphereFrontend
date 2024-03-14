import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./ProjectPostings/projectPostings.css";
export default function ServicePostings() {
    const [posts, setPosts] = useState([]);

    //function to get all posts
    const fetchPosts = async () => {
      try {
        const Projectsresponse = await axios.get(
          `https://localhost:7157/api/Posting/GetAllServicePostings`
        );
        console.log(Projectsresponse.data);
        setPosts(Projectsresponse.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    useEffect(() => {
      try {
        fetchPosts();
      } catch (error) {
        console.log("failed to fetch");
      }
    }, []);
  
    //function to handle category:
    function HandleCategory(Id) {
      // Define a mapping of category IDs to category names
      const categoryMap = {
        1: "Construction & Renovation",
        2: "Event Planning",
        3: "Education",
        // Add more categories as needed
      };
  
      // Return the category name based on the category ID
      return categoryMap[Id] || "Unknown Category";
    }
  
    return (
      <div className="mainpage" id="projectposting">
        <div className="container">
          <div className="AboveBlock"></div>
        </div>
        <div className="container">
          <div className="BelowBlock border rounded rounded-3 p-4">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post border rounded rounded-5 p-3 ">
                  {/* Post content */}
                  {/*<img className="post-image" src={post.image || 'default-image.jpg'} alt="Client" />*/}
                  <div className="post-content">
                    <div id="flag" className="post-title mb-4">{post.title}</div>
                    <div className="post-info">
                      <div className="row">
                        <div className="item">
                          <strong>Description:</strong> {post.description}
                        </div>
                        <hr />
                        <div className="item">
                          <strong>Budget:</strong>{" "}
                          {post.budget
                            ? `$${post.budget.toFixed(2)}`
                            : "Not specified"}
                        </div>
                        <hr />
  
                      </div>
                      <div className="">
                        <div className="item">
                          <strong>Duration:</strong> {post.duration?post.duration:"Not specified"}
                        </div>
                        <hr />
  
                        <div className="item">
                          <strong>Deadline:</strong> {post.deadline?post.deadline:"Not specified"}
                        </div>
                        <hr />
  
                      </div>
                      <div className="">
                        <div className="col-sm-12">
                          <strong>Category:</strong>{" "}
                          {HandleCategory(post.categoryId)}
                        </div>
                        <hr />
  
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <button className="btn btn-dark">Apply</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts found.</p>
            )}
          </div>
        </div>
      </div>
    );
}
