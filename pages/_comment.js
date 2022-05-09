import Giscus from "@giscus/react";
import { useRouter } from 'next/router'


const Comment = () => {
    const projectRepo = process.env.REACT_APP_GISCUS_PROJECT_REPO;
    const projectRepoId = process.env.REACT_APP_GISCUS_PROJECT_REPO_ID;
    const discussionCategoryId =
        process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_ID;
    const discussionCategoryName =
        process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_NAME;

    const router = useRouter()
    if (router.pathname === '/' && router.pathname === '/posts') {
        return (
            <>
                <h2>Tidak jalan</h2>
                {console.log(router.pathname)}
            </>
        );
    } else {
        return (
            <>
                <Giscus
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
            </>
        );
    }

};

export default Comment;
