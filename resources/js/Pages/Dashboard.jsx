import { Head, router, Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = { title, desc, category };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDesc("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }
        console.log(props);
        return;
    }, []);

    return (
        <Authenticated
            user={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                                {isNotif && (
                                    <div className="alert alert-success">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                )}
                            </div>
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered w-full m-2"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                            <input
                                type="text"
                                placeholder="Deskripsi"
                                className="input input-bordered w-full m-2"
                                onChange={(desc) => setDesc(desc.target.value)}
                                value={desc}
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="input input-bordered w-full m-2"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                value={category}
                            />
                            <button
                                className="btn btn-primary m-2"
                                onClick={() => handleSubmit()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="py-4 w-full">
                        {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
                            return (
                                <div key={i} className="card bg-base-100 shadow-xl m-2">
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {news.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>
                                        <p>{news.desc}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">
                                                {news.category}
                                            </div>
                                            <div className="badge badge-inline">
                                                <Link href={route('edit.news')} method="get" data={{ id:news.id }} as="button">
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-inline">
                                            <Link href={route('delete.news')} method="post" data={{ id:news.id }} as="button">
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : <p>Belum meiliki berita!</p>}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
