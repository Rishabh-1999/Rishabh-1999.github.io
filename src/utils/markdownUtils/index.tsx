import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* Styles */
import "./githubMarkdown.scss";

function MarkdownUtils({ content }: { content: string }) {
    return (
        <div className="custom-markdown">
            <div className="p-8 markdown-body h-[500px] overflow-y-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
            </div>
        </div>
    );
}

export default MarkdownUtils;
