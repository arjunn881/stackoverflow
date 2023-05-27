import React from "react";

export const WidgetTags = () => {
  const tags = [
    "c",
    "html",
    "css",
    "javascript",
    "jquery",
    "reactjs",
    "mongodb",
    "firebase",
    "express",
    "mysql",
    "nodejs",
    "java",
    "python",
    "php",
    "angular",
    "nextjs",
    "nestjs",
    "c++",
    "dsa",
    "laravel",
  ];
  return (
    <div className="widget-tags">
        <h4>Watched Tags</h4>

        <div className="widget-tags-div">
            {
                tags.map((tag)=>(
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  );
};
