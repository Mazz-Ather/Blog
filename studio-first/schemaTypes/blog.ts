import { title } from "process";

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'blog title',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'title of slug for blog',
            options:{
                source:'title'
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'title image',
        },
        {
            name: 'smalldescription',
            type: 'text',
            title: 'smalldescription',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content description',
            of:[
                {
                    type:'block'
                }
            ]
        }
    ]
   
}