import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Navbar from "@/Components/navbar";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = { id:props.myNews.id, title, desc, category };
        router.post("/news/update", data);
        setTitle("");
        setDesc("");
        setCategory("");
    };
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card bg-base-100 shadow-xl m-2">
                <div className="p-4 text-2xl">
                    EDIT BERITA
                </div>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="input input-bordered w-full m-2"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="input input-bordered w-full m-2"
                        onChange={(desc) => setDesc(desc.target.value)}
                        defaultValue={props.myNews.desc}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="input input-bordered w-full m-2"
                        onChange={(category) => setCategory(category.target.value)}
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
