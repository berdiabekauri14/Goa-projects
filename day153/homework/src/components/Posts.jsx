import React, { useEffect, useState } from "react"

export default React.memo(function Posts() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch("https://dummyjson.com/posts/1")
                const result = await api.json()
                
                setData(result)
            } catch(err) {
                console.error(err)
            }
        }

        fetchData()
    }, [])

    if (!data) {
        return <p>Loading data...</p>
    }    

    return (
        <div>
            <h1 className=" text-2xl">Posts</h1>
            <br />
            <div key={data.id}>
                <header>
                    <p>User {data.id}</p>
                    <br />
                    <h1>{data.title}</h1>
                    <br />
                    <p>{data.body}</p>
                </header>
                <br />
                <p>Likes: {data.reactions.likes}</p>
                <br />
                <p>Dislikes: {data.reactions.dislikes}</p>
                <br />
                <p>Views: {data.views}</p>
            </div>
        </div>
            
    )
})