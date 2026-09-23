import React from 'react'
import { motion } from 'framer-motion'
import {
    Flag,
    Brain,
    Heart,
    ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const subjects = [
    {
        title: 'Tes Wawasan Kebangsaan',
        short: 'TWK',
        description:
            'Uji pemahamanmu tentang nasionalisme, Pancasila, UUD 1945 dan nilai kebangsaan.',
        icon: Flag,
        path: '/twk',
        gradient: 'from-red-600 via-red-500 to-orange-400',
    },
    {
        title: 'Tes Intelegensi Umum',
        short: 'TIU',
        description:
            'Latih kemampuan verbal, numerik, logika dan analisis untuk menghadapi ujian.',
        icon: Brain,
        path: '/tiu',
        gradient: 'from-blue-600 via-blue-500 to-cyan-400',
    },
    {
        title: 'Tes Karakteristik Pribadi',
        short: 'TKP',
        description:
            'Kenali dan latih kemampuan menghadapi berbagai situasi dalam dunia kerja.',
        icon: Heart,
        path: '/tkp',
        gradient: 'from-purple-600 via-purple-500 to-pink-400',
    },
]

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-slate-300">
                            Platform Belajar & Tryout
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                        Tryout{' '}
                        <span className="bg-linear-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            CEL'S
                        </span>
                    </h1>

                    <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-lg">
                        Belajar lebih terarah, latihan lebih banyak,
                        dan persiapkan dirimu menghadapi ujian.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-7">
                    {subjects.map((subject, index) => {
                        const Icon = subject.icon

                        return (
                            <motion.div
                                key={subject.short}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                <Link
                                    to={subject.path}
                                    className="group block"
                                >
                                    <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-7 shadow-2xl">

                                        <div
                                            className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${subject.gradient}`}
                                        />

                                        <div
                                            className={`w-16 h-16 rounded-2xl bg-linear-to-r ${subject.gradient} flex items-center justify-center shadow-lg mb-7 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon size={32} />
                                        </div>

                                        <span className="text-sm font-bold text-slate-400">
                                            {subject.short}
                                        </span>

                                        <h2 className="text-2xl font-bold mt-2">
                                            {subject.title}
                                        </h2>

                                        <p className="text-slate-400 mt-4 leading-relaxed">
                                            {subject.description}
                                        </p>

                                        <div className="flex items-center gap-2 mt-7 text-sm font-semibold">
                                            Mulai Belajar
                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-2 transition-transform"
                                            />
                                        </div>

                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

            </section>
        </main>
    )
}