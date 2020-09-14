/**
 * Blog
 * @route /blog
 * @description basic blog format for posts - likely to use a markdown CMS system 
 */
interface Blog {
    posts: Array<
        {
            title: string,
            date: string,
            author: string,
            tags: Array<string>,
            body: string,
            image: string
        }
    >
}