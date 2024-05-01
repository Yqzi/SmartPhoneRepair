const TitleAndContentComponent = ({
    title,
    content,
}: {
    title: string;
    content: string;
}) => {
    return (
        <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4 text-[#020140]">{title}</h2>
            <p className="text-lg text-gray-900 mb-4">{content}</p>
        </div>
    );
};

export function Blog({
    titles,
    contents,
}: {
    titles: string[];
    contents: string[];
}) {
    const listItems = titles.map((title, i) => (
        <TitleAndContentComponent
            key={i}
            title={title}
            content={contents[i]}
        ></TitleAndContentComponent>
    ));
    return <div className=" px-4">{listItems}</div>;
}
