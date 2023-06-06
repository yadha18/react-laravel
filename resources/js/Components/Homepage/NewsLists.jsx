const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://i5.walmartimages.com/asr/4a5e028f-1b6c-49a8-b46f-fb751b6e4106_1.27bffd77b09c8192810881601f590027.jpeg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.desc}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div>Tidak ada berita tersedia</div>;
};

const NewsLists = ({ news }) => {
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
