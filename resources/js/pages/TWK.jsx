import React from 'react'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    FileQuestion,
    Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { twkThemes } from '../data/twkData'

export default function TWK() {
    return (
        <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

            {/* ================= BACKGROUND ================= */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
            </div>


            {/* ================= CONTENT ================= */}
            <section className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-12">


                {/* ================= BACK ================= */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                    >
                        <ArrowLeft size={18} />
                        Kembali ke Beranda
                    </Link>
                </motion.div>


                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-10 mb-10 md:mb-12"
                >

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-red-600 to-orange-400 shadow-lg shadow-red-500/20">
                        <span className="text-3xl">
                            🇮🇩
                        </span>
                    </div>


                    {/* Label */}
                    <div className="flex items-center gap-2 mt-6">

                        <Sparkles
                            size={16}
                            className="text-orange-400"
                        />

                        <span className="text-sm font-bold text-red-400 uppercase tracking-wider">
                            TWK • Tes Wawasan Kebangsaan
                        </span>

                    </div>


                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mt-2">
                        Pilih Tema
                        <span className="bg-linear-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                            {' '}TWK
                        </span>
                    </h1>


                    {/* Description */}
                    <p className="text-slate-400 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
                        Pelajari setiap tema secara bertahap melalui materi
                        pembelajaran, kemudian uji pemahamanmu dengan latihan
                        soal.
                    </p>


                    {/* Info */}
                    <div className="flex flex-wrap gap-3 mt-6">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                            <BookOpen
                                size={16}
                                className="text-red-400"
                            />
                            8 Tema Pembelajaran
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">
                            <FileQuestion
                                size={16}
                                className="text-orange-400"
                            />
                            Materi & Latihan Soal
                        </div>

                    </div>

                </motion.div>


                {/* ================= THEME GRID ================= */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">


                    {twkThemes.map((theme, index) => {

                        const Icon = theme.icon

                        return (

                            <motion.article
                                key={theme.id}

                                initial={{
                                    opacity: 0,
                                    y: 35,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.45,
                                }}

                                whileHover={{
                                    y: -8,
                                }}

                                className="group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-red-400/30 transition-colors duration-300"
                            >


                                {/* Top Gradient */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 via-orange-500 to-yellow-400" />


                                {/* Card Content */}
                                <div className="p-5 flex flex-col flex-1">


                                    {/* Icon + Number */}
                                    <div className="flex items-center justify-between">

                                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-red-600 to-orange-400 flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">

                                            <Icon size={27} />

                                        </div>


                                        <span className="text-xs font-black text-slate-600">
                                            0{theme.id}
                                        </span>

                                    </div>


                                    {/* Theme Info */}
                                    <div className="mt-6">

                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                                            Tema {theme.id}
                                        </span>


                                        <h2 className="text-xl font-bold mt-1 leading-snug">
                                            {theme.title}
                                        </h2>


                                        <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                                            {theme.description}
                                        </p>

                                    </div>


                                    {/* Buttons */}
                                    <div className="grid grid-cols-2 gap-3 mt-7">


                                        {/* MATERI */}
                                        <Link
                                            to={`/materi/${theme.id}`}
                                            className="group/button flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/5 hover:bg-white/15 hover:border-white/10 py-3 text-sm font-semibold transition-all"
                                        >

                                            <BookOpen
                                                size={16}
                                                className="text-slate-300"
                                            />

                                            <span>
                                                Materi
                                            </span>

                                        </Link>


                                        {/* TEST */}
                                        <Link
                                            to={`/test/${theme.id}`}
                                            className="group/button flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 py-3 text-sm font-semibold shadow-lg shadow-red-500/10 transition-all"
                                        >

                                            <FileQuestion size={16} />

                                            <span>
                                                Test
                                            </span>

                                        </Link>

                                    </div>

                                </div>


                                {/* Bottom Hover */}
                                <div className="h-0.5 w-0 group-hover:w-full bg-linear-to-r from-red-500 to-orange-400 transition-all duration-500" />

                            </motion.article>

                        )
                    })}

                </div>


                {/* ================= STUDY TIP ================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: 0.8,
                    }}

                    className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6"
                >

                    <div className="flex flex-col md:flex-row md:items-center gap-4">

                        <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-400/10 flex items-center justify-center">

                            <Sparkles
                                size={21}
                                className="text-orange-400"
                            />

                        </div>


                        <div className="flex-1">

                            <h3 className="font-bold">
                                Tips Belajar
                            </h3>

                            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                                Mulai dari Tema 1 dan pahami konsepnya terlebih
                                dahulu. Setelah selesai membaca materi, lanjutkan
                                dengan mengerjakan Test Soal untuk mengukur
                                pemahamanmu.
                            </p>

                        </div>


                        <ArrowRight
                            size={20}
                            className="hidden md:block text-slate-600"
                        />

                    </div>

                </motion.div>

            </section>

        </main>
    )
}