
interface PropsFeeds {
    title: string,
    content: string
}



const Feed: React.FC<PropsFeeds> = ({title, content}) => {


    console.log('from feed')

    return(
        <>
            <div className="box-center">
                <div className="card">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <button>See the post</button>
                </div>
            </div>       
         </>
    )
}

export default Feed