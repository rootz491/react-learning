import React from 'react';

export default function Card() {
    return (
        <div className="md:flex space-x-2 px-4 py-2 border rounded-md shadow-lg lg:w-1/3 sm:w-1/2 md:m-auto mx-2">
            <img className="md:w-28 h-auto rounded-sm" src={window.location.origin + "/img.jpg"} alt="skill" />
            <div className="flex-1">
                <h1 className="text-primary text-center">rootz491</h1>
                <p className="text-xs text-justify">I'm doing some side-projects in hope that i'll learn something from it!</p>
                <button className="text-xs border border-primary px-2 text-primary hover:text-white hover:bg-primary rounded-sm">let's go</button>
            </div>
        </div>
    )
}
