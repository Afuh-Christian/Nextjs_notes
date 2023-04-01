import NewsPage from "./news";
import  Link  from "next/link"

function HomePage() {
    const a = "Hello new"
    return (<>
        Hello
        <Link href="/news">News page</Link>
        <Link href="/news/detail">Details</Link>
    </>);
}

export default HomePage;