import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowLeft,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    Lightbulb,
    List,
    Sparkles,
} from 'lucide-react'

import { materi1 } from '../data/twkMateri1'
import { materi2 } from '../data/twkMateri2'
import { twkMateri3 } from '../data/twkMateri3'
import { twkMateri4 } from '../data/twkMateri4'
import { twkMateri5 } from '../data/twkMateri5'
import { twkMateri6 } from '../data/twkMateri6'
import { twkMateri7 } from '../data/twkMateri7'
import { twkMateri8 } from '../data/twkMateri8'

export default function Materi() {
    const { id } = useParams()

    // =========================
    // DAFTAR MATERI BERDASARKAN ID
    // =========================
    const materiMap = {
        '1': materi1,
        '2': materi2,
        '3': twkMateri3,
        '4': twkMateri4,
        '5': twkMateri5,
        '6': twkMateri6,
        '7': twkMateri7,
        '8': twkMateri8,
    }

    // Ambil materi berdasarkan ID URL
    const materi = materiMap[id]

    // Jika ID tidak ditemukan
    if (!materi) {
        return (
            <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-5">
                <div className="text-center">
                    <BookOpen
                        size={50}
                        className="mx-auto mb-4 text-red-400"
                    />

                    <h1 className="text-2xl font-bold mb-2">
                        Materi tidak ditemukan
                    </h1>

                    <p className="text-slate-400 mb-6">
                        Materi dengan ID "{id}" tidak tersedia.
                    </p>

                    <Link
                        to="/twk"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-red-600 to-orange-400 text-sm font-bold hover:scale-105 transition"
                    >
                        <ArrowLeft size={17} />
                        Kembali ke TWK
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white">

            {/* =========================
                BACKGROUND
            ========================== */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">

                <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

                <div className="absolute top-1/3 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

            </div>


            {/* =========================
                NAVBAR
            ========================== */}
            <header className="relative z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl sticky top-0">

                <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

                    {/* Kembali */}
                    <Link
                        to="/twk"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition"
                    >
                        <ArrowLeft size={18} />

                        <span className="hidden sm:inline">
                            Kembali ke TWK
                        </span>
                    </Link>


                    {/* Judul Navbar */}
                    <div className="flex items-center gap-2 text-sm">

                        <BookOpen
                            size={18}
                            className="text-red-400"
                        />

                        <span className="font-semibold">
                            Materi TWK
                        </span>

                    </div>

                </div>

            </header>


            {/* =========================
                MAIN CONTENT
            ========================== */}
            <div className="relative z-10 max-w-6xl mx-auto px-5 py-10">


                {/* =========================
                    HERO
                ========================== */}
                <motion.section
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-red-600/20 via-orange-500/10 to-slate-900 p-7 md:p-10 mb-8"
                >

                    {/* Glow */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl" />


                    <div className="relative">

                        {/* Subtitle */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-400/20 text-red-300 text-sm font-semibold mb-5">

                            <Sparkles size={15} />

                            {materi.subtitle}

                        </div>


                        {/* Tema */}
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight">

                            {materi.tema}

                        </h1>


                        {/* Deskripsi */}
                        <p className="mt-4 max-w-3xl text-slate-400 text-base md:text-lg leading-relaxed">

                            Pelajari materi {materi.tema} secara bertahap
                            untuk memahami konsep dan kata kunci penting
                            dalam persiapan menghadapi soal TWK.

                        </p>


                        {/* Informasi */}
                        <div className="flex flex-wrap gap-3 mt-7">

                            {/* Materi Pembelajaran */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">

                                <BookOpen
                                    size={16}
                                    className="text-red-400"
                                />

                                Materi Pembelajaran

                            </div>


                            {/* Jumlah Pokok Bahasan */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300">

                                <List
                                    size={16}
                                    className="text-orange-400"
                                />

                                {materi.sections.length} Pokok Bahasan

                            </div>

                        </div>

                    </div>

                </motion.section>



                {/* =========================
                    DAFTAR ISI
                ========================== */}
                <motion.section
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.1,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 mb-10"
                >

                    {/* Header Daftar Isi */}
                    <div className="flex items-center gap-3 mb-5">

                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">

                            <List
                                size={20}
                                className="text-red-400"
                            />

                        </div>


                        <div>

                            <h2 className="font-bold text-lg">
                                Daftar Isi
                            </h2>

                            <p className="text-sm text-slate-500">
                                Navigasi materi Tema {materi.id}
                            </p>

                        </div>

                    </div>


                    {/* Daftar Section */}
                    <div className="grid sm:grid-cols-2 gap-2">

                        {materi.sections.map((section) => (

                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                            >

                                {/* Nomor */}
                                <span className="text-xs font-bold text-red-400 w-7">

                                    {section.number}

                                </span>


                                {/* Judul */}
                                <span className="text-sm text-slate-300 group-hover:text-white transition">

                                    {section.title}

                                </span>


                                {/* Icon */}
                                <ChevronRight
                                    size={15}
                                    className="ml-auto text-slate-600 group-hover:text-red-400 transition"
                                />

                            </a>

                        ))}

                    </div>

                </motion.section>



                {/* =========================
                    ISI MATERI
                ========================== */}
                <div className="space-y-8">

                    {materi.sections.map((section) => (

                        <motion.section
                            key={section.id}
                            id={section.id}
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="scroll-mt-24"
                        >

                            {/* =========================
                                SECTION HEADER
                            ========================== */}
                            <div className="flex items-start gap-4 mb-5">

                                {/* Nomor Section */}
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-red-600 to-orange-400 flex items-center justify-center shadow-lg shadow-red-900/20">

                                    <span className="font-black text-sm">

                                        {section.number}

                                    </span>

                                </div>


                                {/* Judul */}
                                <div>

                                    <p className="text-xs font-bold uppercase tracking-widest text-red-400">

                                        Materi {section.number}

                                    </p>

                                    <h2 className="text-2xl md:text-3xl font-black mt-1">

                                        {section.title}

                                    </h2>

                                </div>

                            </div>



                            {/* =========================
                                PARAGRAPHS
                            ========================== */}
                            {section.paragraphs?.length > 0 && (

                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">

                                    {section.paragraphs.map(
                                        (paragraph, index) => (

                                            <p
                                                key={index}
                                                className="text-slate-300 leading-8 text-[15px] md:text-base"
                                            >

                                                {paragraph}

                                            </p>

                                        )
                                    )}

                                </div>

                            )}



                            {/* =========================
                                SUB SECTIONS
                            ========================== */}
                            {section.subSections?.length > 0 && (

                                <div className="mt-5 space-y-5">

                                    {section.subSections.map(
                                        (sub, index) => (

                                            <div
                                                key={index}
                                                className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
                                            >

                                                {/* Sub Title */}
                                                {sub.title && (

                                                    <h3 className="text-xl font-bold mb-5">

                                                        {sub.title}

                                                    </h3>

                                                )}



                                                {/* =====================
                                                    TYPE PARAGRAPHS
                                                ====================== */}
                                                {sub.type === 'paragraphs' && (

                                                    <div className="space-y-5">

                                                        {sub.items.map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => (

                                                                <p
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                    className="text-slate-300 leading-8 text-[15px] md:text-base"
                                                                >

                                                                    {item}

                                                                </p>

                                                            )
                                                        )}

                                                    </div>

                                                )}



                                                {/* =====================
                                                    TYPE NUMBERED
                                                ====================== */}
                                                {sub.type === 'numbered' && (

                                                    <div className="space-y-4">

                                                        {sub.items.map(
                                                            (
                                                                item,
                                                                itemIndex
                                                            ) => (

                                                                <div
                                                                    key={
                                                                        itemIndex
                                                                    }
                                                                    className="flex gap-4 p-4 rounded-2xl bg-black/10 border border-white/5"
                                                                >

                                                                    {/* Nomor */}
                                                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-sm">

                                                                        {itemIndex + 1}

                                                                    </div>


                                                                    {/* Isi */}
                                                                    <div>

                                                                        <h4 className="font-bold text-white">

                                                                            {
                                                                                item.title
                                                                            }

                                                                        </h4>

                                                                        <p className="mt-2 text-slate-400 leading-7 text-sm md:text-base">

                                                                            {
                                                                                item.text
                                                                            }

                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            )
                                                        )}

                                                    </div>

                                                )}

                                            </div>

                                        )
                                    )}

                                </div>

                            )}



                            {/* =========================
                                BUTIR PANCASILA
                            ========================== */}
                            {section.sila?.length > 0 && (

                                <div className="mt-5 space-y-5">

                                    {section.sila.map((sila) => (

                                        <div
                                            key={sila.number}
                                            className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
                                        >

                                            {/* Header Sila */}
                                            <div className="p-5 md:p-6 bg-linear-to-r from-red-600/10 to-orange-500/5 border-b border-white/10">

                                                <div className="flex items-center gap-4">

                                                    {/* Nomor */}
                                                    <div className="w-11 h-11 rounded-xl bg-linear-to-br from-red-600 to-orange-400 flex items-center justify-center font-black">

                                                        {sila.number}

                                                    </div>


                                                    {/* Judul */}
                                                    <h3 className="font-bold text-lg md:text-xl">

                                                        {sila.title}

                                                    </h3>

                                                </div>

                                            </div>


                                            {/* Points */}
                                            <div className="p-5 md:p-7 space-y-3">

                                                {sila.points.map(
                                                    (point, index) => (

                                                        <div
                                                            key={index}
                                                            className="flex gap-3"
                                                        >

                                                            <CheckCircle2
                                                                size={19}
                                                                className="shrink-0 mt-1 text-red-400"
                                                            />

                                                            <p className="text-slate-300 leading-7 text-sm md:text-base">

                                                                {point}

                                                            </p>

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}



                            {/* =========================
                                KATA KUNCI
                            ========================== */}
                            {section.keywords?.length > 0 && (

                                <div className="mt-5 space-y-5">

                                    {section.keywords.map((keyword) => (

                                        <div
                                            key={keyword.number}
                                            className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
                                        >

                                            {/* Keyword Header */}
                                            <div className="flex items-start gap-4 mb-6">

                                                {/* Nomor */}
                                                <div className="w-10 h-10 shrink-0 rounded-xl bg-linear-to-br from-red-600 to-orange-400 flex items-center justify-center font-black">

                                                    {keyword.number}

                                                </div>


                                                {/* Judul */}
                                                <h3 className="text-lg md:text-xl font-bold">

                                                    {keyword.title}

                                                </h3>

                                            </div>


                                            {/* Groups */}
                                            <div className="space-y-5">

                                                {keyword.groups.map(
                                                    (
                                                        group,
                                                        groupIndex
                                                    ) => (

                                                        <div
                                                            key={groupIndex}
                                                            className="rounded-2xl bg-black/10 border border-white/5 p-5"
                                                        >

                                                            {/* Group Title */}
                                                            <h4 className="font-semibold text-red-300 mb-4">

                                                                {
                                                                    group.title
                                                                }

                                                            </h4>


                                                            {/* Points */}
                                                            <ul className="space-y-3">

                                                                {group.points.map(
                                                                    (
                                                                        point,
                                                                        pointIndex
                                                                    ) => (

                                                                        <li
                                                                            key={
                                                                                pointIndex
                                                                            }
                                                                            className="flex gap-3 text-sm md:text-base text-slate-400 leading-7"
                                                                        >

                                                                            <span className="text-orange-400">

                                                                                •

                                                                            </span>

                                                                            <span>

                                                                                {
                                                                                    point
                                                                                }

                                                                            </span>

                                                                        </li>

                                                                    )
                                                                )}

                                                            </ul>

                                                        </div>

                                                    )
                                                )}

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            )}

                        </motion.section>

                    ))}

                </div>



                {/* =========================
                    CATATAN BELAJAR
                ========================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-12 rounded-3xl border border-orange-400/20 bg-linear-to-br from-orange-500/10 to-red-500/5 p-6 md:p-8"
                >

                    <div className="flex items-start gap-4">

                        {/* Icon */}
                        <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-400/10 flex items-center justify-center">

                            <Lightbulb
                                size={22}
                                className="text-orange-400"
                            />

                        </div>


                        {/* Isi */}
                        <div>

                            <h3 className="font-bold text-lg">

                                Tips Belajar TWK

                            </h3>

                            <p className="mt-2 text-slate-400 leading-7">

                                Fokus memahami{' '}

                                <strong className="text-white">
                                    kata kunci
                                </strong>

                                , hubungan antara materi dengan
                                penerapannya, serta contoh-contoh yang
                                berkaitan dengan kehidupan sehari-hari.
                                Setelah memahami materi, lanjutkan dengan
                                mengerjakan soal latihan.

                            </p>

                        </div>

                    </div>

                </motion.div>



                {/* =========================
                    BOTTOM NAVIGATION
                ========================== */}
                <div className="mt-10 flex justify-between items-center">

                    {/* Kembali */}
                    <Link
                        to="/twk"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold hover:bg-white/10 transition"
                    >

                        <ArrowLeft size={17} />

                        Kembali ke TWK

                    </Link>


                    {/* Lanjut Test */}
                    <Link
                        to={`/test/${id}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-red-600 to-orange-400 text-sm font-bold hover:scale-105 transition"
                    >

                        Lanjut Test

                        <ChevronRight size={17} />

                    </Link>

                </div>

            </div>

        </main>
    )
}