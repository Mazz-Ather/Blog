import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
async function getData(){
    const query = `
    *[_type == 'blog'] |order(_createdAt desc) {
  title,
    smalldescription,
    'currentSlug':slug.current,
    titleImage
}`;
const data = await client.fetch(query);
return data;
}
const Blog = async () => {
    const data:simpleBlogCard[] = await getData()
    // console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-14">
      {data.map((post , idx)=>(
        <Card key={idx}>
            <Image src={urlFor(post.titleImage).url()} alt="img" 
            height={90}
            width={950}
            />
            <CardContent className="mt-5">
                <h3 className="text-2xl line-clamp-2">{post.title}</h3>
<p className="brightness-75 line-clamp-3 text-sm mt-3">{post.smalldescription}</p>
<Button asChild className="w-full mt-7">
<Link href={`/blog/${post.currentSlug}`}>Read more</Link>
</Button>
            </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Blog
