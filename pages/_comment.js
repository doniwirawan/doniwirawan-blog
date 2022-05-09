import Giscus from "@giscus/react"

const Comment = () => {
    return (
        <div className='container prose prose-sm md:prose dark:prose-dark center'>
            <Giscus className={`comment`}
                id="comment-id"
                repo="doniwirawan/doniwirawan-blog"
                repoId="R_kgDOHRIlkw"
                category="General"
                categoryId="DIC_kwDOHRIlk84CPAde"
                mapping="pathname"
                reactionsEnabled="0"
                emitMetadata="0"
                inputPosition="top"
                theme="dark"
                lang="en"
                loading="lazy"
            />
        </div>
    )
}

export default Comment
