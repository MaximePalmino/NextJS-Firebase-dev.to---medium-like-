
import Link from 'next/link';



interface Prop {
    title: string,
    content: string,
    id: string
}
const UserPosts : React.FC<Prop>= ({title, content, id}) => {


    return (
        <>
            <div className="box-center">
                <div className="card">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <Link href={`admin/singlePost?post=${id}`}>
                    <button>See the post</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UserPosts