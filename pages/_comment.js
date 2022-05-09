import Giscus from "@giscus/react";

const Comment = () => {
    const projectRepo = process.env.REACT_APP_GISCUS_PROJECT_REPO;
    const projectRepoId = process.env.REACT_APP_GISCUS_PROJECT_REPO_ID;
    const discussionCategoryId =
        process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_ID;
    const discussionCategoryName =
        process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_NAME;

    return (
        <>
            <Giscus
                id="comment-id"
                repo={projectRepo}
                repoId={projectRepoId}
                category={discussionCategoryName}
                categoryId={discussionCategoryId}
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
};

export default Comment;
