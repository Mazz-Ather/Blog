import { fullBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity"
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug : string)
{
    const query = `*[_type == 'blog' && slug.current == '${slug}']{
  'currentslug':slug.current,
    title,
    content,
    titleImage
}[0]`
const data = await client.fetch(query)
return data;
}

export default async function BlogArticle({params}:{params : {slug: string}}){
    const data:fullBlogCard = await getData(params.slug)
// console.log(data)
    return(
        <div className="mt-9 max-w-screen-lg p-9 mx-auto">
            <h1 className="block mt-2  text-7xl text-center leading-8 text-primary font-bold">{data.title}</h1>
           <Image src={urlFor(data.titleImage).url()} alt="" height={400} width={900}
           priority
           className="flex mx-auto m-9 rounded-lg mt-11"
           />
           <div className="prose lg:prose-xl dark:prose-invert max-w-screen-lg p-9 mx-auto prose-li:marker:text-primary ">
            <PortableText 
            value={data.content}
            />
           </div>
        </div>
    )
}