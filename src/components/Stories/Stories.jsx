import React, { useEffect, useState } from "react";

const Stories = () => {
    let isLoading = true;

    let url = "https://hn.algolia.com/api/v1/search?query=react";
    const loadApiData = async (api) => {
        try {
            const res = await fetch(api);
            const data = await res.json();
            console.log(data);
            isLoading = false;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadApiData(url);
    }, []);

    if (isLoading) {
        return <div>
            <h2>Loading....</h2>
        </div>;
    }

    return (
        <div>
            <h1>Stories</h1>
        </div>
    );
};

export default Stories;
