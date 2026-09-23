import { Link } from 'react-router-dom'
import { ArrowLeft, Heart } from 'lucide-react'

export default function TKP() {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-6 py-10">

            <div className="max-w-7xl mx-auto">

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                    <ArrowLeft size={18} />
                    Kembali ke Home
                </Link>

                <div className="mt-10">

                    <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-purple-600 to-pink-400 flex items-center justify-center">
                        <Heart size={32} />
                    </div>

                    <p className="text-purple-400 font-bold mt-6">
                        TKP
                    </p>

                    <h1 className="text-4xl font-black mt-1">
                        Tes Karakteristik Pribadi
                    </h1>

                    <p className="text-slate-400 mt-4 max-w-2xl">
                        Halaman materi Tes Karakteristik Pribadi.
                    </p>

                </div>

            </div>

        </main>
    )
}