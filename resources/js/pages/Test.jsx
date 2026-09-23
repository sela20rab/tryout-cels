// src/pages/Test.jsx

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ChevronLeft,
    CircleHelp,
    RotateCcw,
    XCircle,
} from 'lucide-react'

import { twkThemes } from '../data/twkData'
import { twkTest1 } from '../data/twkTest1'
import { twkTest2 } from '../data/twkTest2'
import { twkTest3 } from '../data/twkTest3'
import { twkTest4 } from '../data/twkTest4'
import { twkTest5 } from '../data/twkTest5'
import { twkTest6 } from '../data/twkTest6'
import { twkTest7 } from '../data/twkTest7'
import { twkTest8 } from '../data/twkTest8'

const optionLetters = ['A', 'B', 'C', 'D', 'E']

export default function Test() {
    const { id } = useParams()
    const materialId = Number(id)

    /*
    |--------------------------------------------------------------------------
    | DATA TEST
    |--------------------------------------------------------------------------
    */

    const testData = {
        1: twkTest1,
        2: twkTest2,
        3: twkTest3,
        4: twkTest4,
        5: twkTest5,
        6: twkTest6,
        7: twkTest7,
        8: twkTest8,
    }

    const questions =testData[materialId] || []

    const theme = twkThemes.find(
        (item) => item.id === materialId
    )

    /*
    |--------------------------------------------------------------------------
    | RANDOM URUTAN SOAL
    |--------------------------------------------------------------------------
    |
    | Hanya soal yang diacak.
    |
    | Pilihan A, B, C, D, E tetap sesuai urutan
    | pada file twkTest1.js - twkTest4.js
    |
    |--------------------------------------------------------------------------
    */

    const shuffleQuestions = (questionList) => {
        const shuffled = [...questionList]

        for (let i = shuffled.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(
                Math.random() * (i + 1)
            )

            ;[shuffled[i], shuffled[randomIndex]] = [
                shuffled[randomIndex],
                shuffled[i],
            ]
        }

        return shuffled
    }

    /*
    |--------------------------------------------------------------------------
    | STATE URUTAN SOAL
    |--------------------------------------------------------------------------
    */

    const [shuffledQuestions, setShuffledQuestions] =
        useState(() => shuffleQuestions(questions))

    const [currentQuestion, setCurrentQuestion] =
        useState(0)

    const [selectedAnswers, setSelectedAnswers] =
        useState({})

    /*
    |--------------------------------------------------------------------------
    | JIKA MATERI BERUBAH
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        setShuffledQuestions(
            shuffleQuestions(questions)
        )

        setCurrentQuestion(0)
        setSelectedAnswers({})

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [materialId])

    /*
    |--------------------------------------------------------------------------
    | DATA TIDAK TERSEDIA
    |--------------------------------------------------------------------------
    */

    if (shuffledQuestions.length === 0) {
        return (
            <main className="min-h-screen bg-slate-950 text-white">
                <div className="max-w-4xl mx-auto px-6 py-10">

                    <Link
                        to="/twk"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                    >
                        <ArrowLeft size={18} />
                        Kembali ke TWK
                    </Link>

                    <div className="mt-16 text-center">

                        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 flex items-center justify-center shadow-lg shadow-red-500/20">
                            <BookOpen size={30} />
                        </div>

                        <p className="text-red-400 font-bold text-sm mt-6 uppercase tracking-wider">
                            MATERI {materialId}
                        </p>

                        <h1 className="text-3xl md:text-4xl font-black mt-2">
                            {theme?.title || 'Materi TWK'}
                        </h1>

                        <p className="text-slate-400 mt-4 max-w-lg mx-auto leading-7">
                            Soal untuk materi ini belum tersedia.
                            Silakan kembali lagi setelah soal
                            berhasil ditambahkan.
                        </p>

                        <Link
                            to="/twk"
                            className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-500 font-semibold hover:opacity-90 transition"
                        >
                            <ArrowLeft size={18} />
                            Kembali ke Daftar Materi
                        </Link>

                    </div>
                </div>
            </main>
        )
    }

    /*
    |--------------------------------------------------------------------------
    | DATA SOAL SAAT INI
    |--------------------------------------------------------------------------
    */

    const question =
        shuffledQuestions[currentQuestion]

    /*
    |--------------------------------------------------------------------------
    | JAWABAN
    |--------------------------------------------------------------------------
    */

    const selectedAnswer =
        selectedAnswers[question.id] ?? null

    const isAnswered =
        selectedAnswer !== null

    const isCorrect =
        selectedAnswer === question.answer

    /*
    |--------------------------------------------------------------------------
    | PROGRESS
    |--------------------------------------------------------------------------
    */

    const progress =
        ((currentQuestion + 1) /
            shuffledQuestions.length) *
        100

    /*
    |--------------------------------------------------------------------------
    | PILIH JAWABAN
    |--------------------------------------------------------------------------
    */

    function handleAnswer(index) {
        // Jawaban tidak dapat diubah
        // setelah pengguna memilih
        if (isAnswered) {
            return
        }

        setSelectedAnswers((previous) => ({
            ...previous,
            [question.id]: index,
        }))
    }

    /*
    |--------------------------------------------------------------------------
    | BERIKUTNYA
    |--------------------------------------------------------------------------
    */

    function handleNext() {
        if (!isAnswered) {
            return
        }

        if (
            currentQuestion <
            shuffledQuestions.length - 1
        ) {
            setCurrentQuestion(
                (previous) => previous + 1
            )

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    /*
    |--------------------------------------------------------------------------
    | SEBELUMNYA
    |--------------------------------------------------------------------------
    */

    function handlePrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(
                (previous) => previous - 1
            )

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    /*
    |--------------------------------------------------------------------------
    | ULANGI TEST
    |--------------------------------------------------------------------------
    |
    | 1. Soal diacak ulang
    | 2. Jawaban dihapus
    | 3. Kembali ke soal pertama
    |
    |--------------------------------------------------------------------------
    */

    function restartTest() {
        setShuffledQuestions(
            shuffleQuestions(questions)
        )

        setCurrentQuestion(0)
        setSelectedAnswers({})

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            <div className="fixed inset-0 pointer-events-none">

                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-500/10 blur-3xl" />

                <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-red-600/5 blur-3xl" />

            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

                {/* =====================================================
                    TOP NAVIGATION
                ===================================================== */}

                <div className="flex items-center justify-between gap-4 mb-8">

                    <Link
                        to="/twk"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                    >
                        <ArrowLeft size={18} />

                        <span className="hidden sm:inline">
                            Kembali ke TWK
                        </span>

                        <span className="sm:hidden">
                            Kembali
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={restartTest}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:text-white transition"
                    >
                        <RotateCcw size={16} />

                        <span className="hidden sm:inline">
                            Ulangi Test
                        </span>
                    </button>

                </div>

                {/* =====================================================
                    HEADER
                ===================================================== */}

                <div className="mb-7">

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-orange-400 flex items-center justify-center shadow-lg shadow-red-500/20">
                            <CircleHelp size={25} />
                        </div>

                        <div>

                            <p className="text-xs sm:text-sm text-red-400 font-bold uppercase tracking-wider">
                                TWK • Materi {materialId}
                            </p>

                            <h1 className="text-xl sm:text-2xl md:text-3xl font-black">
                                {theme?.title || 'Test TWK'}
                            </h1>

                        </div>

                    </div>

                </div>

                {/* =====================================================
                    PROGRESS
                ===================================================== */}

                <div className="mb-7">

                    <div className="flex justify-between items-center text-sm mb-2">

                        <span className="text-slate-400">
                            Soal {currentQuestion + 1} dari{' '}
                            {shuffledQuestions.length}
                        </span>

                        <span className="text-red-400 font-bold">
                            {Math.round(progress)}%
                        </span>

                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                        <div
                            className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-500"
                            style={{
                                width: `${progress}%`,
                            }}
                        />

                    </div>

                </div>

                {/* =====================================================
                    QUESTION CARD
                ===================================================== */}

                <section className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">

                    {/* HEADER */}

                    <div className="px-5 sm:px-7 md:px-9 py-5 border-b border-white/10">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-2 text-sm text-red-400 font-bold">

                                <span className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    {currentQuestion + 1}
                                </span>

                                <span>
                                    Pertanyaan
                                </span>

                            </div>

                            {/* NOMOR ASLI SOAL */}

                            <span className="text-xs text-slate-500">
                                Soal asli #{question.id}
                            </span>

                        </div>

                    </div>

                    {/* CONTENT */}

                    <div className="px-5 sm:px-7 md:px-9 py-7 sm:py-9">

                        {/* =================================================
                            QUESTION
                        ================================================= */}

                        <p className="text-base sm:text-lg md:text-xl font-semibold leading-8 text-slate-100 whitespace-pre-line">
                            {question.question}
                        </p>

                        {/* =================================================
                            OPTIONS
                        ================================================= */}

                        <div className="mt-8 space-y-3">

                            {question.options.map(
                                (option, index) => {

                                    const isSelected =
                                        selectedAnswer === index

                                    const isCorrectAnswer =
                                        question.answer === index

                                    let optionClass =
                                        'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'

                                    let letterClass =
                                        'bg-white/10 text-slate-300'

                                    let textClass =
                                        'text-slate-200'

                                    /*
                                    -----------------------------------------
                                    JAWABAN BENAR
                                    -----------------------------------------
                                    */

                                    if (
                                        isAnswered &&
                                        isCorrectAnswer
                                    ) {
                                        optionClass =
                                            'bg-green-500/10 border-green-500/60 ring-1 ring-green-500/30'

                                        letterClass =
                                            'bg-green-500 text-white'

                                        textClass =
                                            'text-green-300'
                                    }

                                    /*
                                    -----------------------------------------
                                    JAWABAN SALAH YANG DIPILIH
                                    -----------------------------------------
                                    */

                                    if (
                                        isAnswered &&
                                        isSelected &&
                                        !isCorrectAnswer
                                    ) {
                                        optionClass =
                                            'bg-red-500/10 border-red-500/60 ring-1 ring-red-500/30'

                                        letterClass =
                                            'bg-red-500 text-white'

                                        textClass =
                                            'text-red-300'
                                    }

                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() =>
                                                handleAnswer(index)
                                            }
                                            disabled={
                                                isAnswered
                                            }
                                            className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-200 ${optionClass} ${
                                                isAnswered
                                                    ? 'cursor-default'
                                                    : 'cursor-pointer'
                                            }`}
                                        >

                                            <div className="flex items-start gap-4">

                                                {/* LETTER */}

                                                <div
                                                    className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${letterClass}`}
                                                >
                                                    {isAnswered &&
                                                    isCorrectAnswer ? (
                                                        <CheckCircle2
                                                            size={19}
                                                        />
                                                    ) : isAnswered &&
                                                      isSelected ? (
                                                        <XCircle
                                                            size={19}
                                                        />
                                                    ) : (
                                                        optionLetters[
                                                            index
                                                        ]
                                                    )}
                                                </div>

                                                {/* TEXT */}

                                                <p
                                                    className={`flex-1 text-sm sm:text-base leading-7 ${textClass}`}
                                                >
                                                    {option}
                                                </p>

                                            </div>

                                        </button>
                                    )
                                }
                            )}

                        </div>

                        {/* =================================================
                            RESULT
                        ================================================= */}

                        {isAnswered && (
                            <div
                                className={`mt-7 rounded-2xl border p-5 ${
                                    isCorrect
                                        ? 'bg-green-500/10 border-green-500/20'
                                        : 'bg-red-500/10 border-red-500/20'
                                }`}
                            >

                                <div className="flex items-start gap-3">

                                    {isCorrect ? (
                                        <CheckCircle2
                                            size={23}
                                            className="text-green-400 shrink-0"
                                        />
                                    ) : (
                                        <XCircle
                                            size={23}
                                            className="text-red-400 shrink-0"
                                        />
                                    )}

                                    <div>

                                        <h3
                                            className={`font-bold ${
                                                isCorrect
                                                    ? 'text-green-400'
                                                    : 'text-red-400'
                                            }`}
                                        >
                                            {isCorrect
                                                ? 'Jawaban Benar!'
                                                : 'Jawaban Salah'}
                                        </h3>

                                        <p className="text-sm text-slate-400 mt-1 leading-6">
                                            {isCorrect
                                                ? 'Jawaban kamu tepat. Silakan baca pembahasan untuk memperkuat pemahaman.'
                                                : 'Jawaban kamu belum tepat. Pilihan berwarna hijau menunjukkan jawaban yang benar.'}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}

                        {/* =================================================
                            PEMBAHASAN
                        ================================================= */}

                        {isAnswered && (
                            <div className="mt-5 rounded-2xl bg-slate-900/80 border border-white/10 overflow-hidden">

                                {/* HEADER PEMBAHASAN */}

                                <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">

                                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                                        <BookOpen size={19} />
                                    </div>

                                    <div>

                                        <h3 className="font-bold">
                                            Pembahasan
                                        </h3>

                                        <p className="text-xs text-slate-500">
                                            Penjelasan jawaban
                                        </p>

                                    </div>

                                </div>

                                {/* ISI PEMBAHASAN */}

                                <div className="px-5 py-5">

                                    <p className="text-sm sm:text-base text-slate-300 leading-8">
                                        {question.explanation}
                                    </p>

                                    {/* KUNCI */}

                                    <div className="mt-5 pt-4 border-t border-white/10">

                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                                            Kunci Jawaban
                                        </p>

                                        <p className="mt-1 text-green-400 font-bold">
                                            {
                                                optionLetters[
                                                    question.answer
                                                ]
                                            }
                                            .{' '}
                                            {
                                                question.options[
                                                    question.answer
                                                ]
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>
                        )}

                    </div>

                </section>

                {/* =========================================================
                    NAVIGATION
                ========================================================= */}

                <div className="flex items-center justify-between gap-3 mt-6">

                    {/* SEBELUMNYA */}

                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border text-sm font-semibold transition ${
                            currentQuestion === 0
                                ? 'border-white/5 text-slate-700 cursor-not-allowed'
                                : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                        }`}
                    >

                        <ChevronLeft size={18} />

                        <span className="hidden sm:inline">
                            Sebelumnya
                        </span>

                    </button>

                    {/* STATUS */}

                    <div className="text-xs sm:text-sm text-slate-500 text-center">

                        {isAnswered
                            ? 'Jawaban tersimpan'
                            : 'Pilih jawaban'}

                    </div>

                    {/* BERIKUTNYA / SELESAI */}

                    {currentQuestion <
                    shuffledQuestions.length - 1 ? (

                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={!isAnswered}
                            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-sm font-semibold transition ${
                                !isAnswered
                                    ? 'bg-white/5 text-slate-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:opacity-90 shadow-lg shadow-red-500/20'
                            }`}
                        >

                            <span className="hidden sm:inline">
                                Berikutnya
                            </span>

                            <ArrowRight size={18} />

                        </button>

                    ) : (

                        <Link
                            to="/twk"
                            className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-semibold hover:opacity-90 transition"
                        >
                            Selesai

                            <CheckCircle2 size={18} />

                        </Link>

                    )}

                </div>

            </div>

        </main>
    )
}