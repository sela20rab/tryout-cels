// src/data/twkMateri8.js

export const twkMateri8 = {
    id: 8,

    tema: 'KALIMAT EFEKTIF',

    subtitle:
        'Memahami prinsip kalimat efektif, penggunaan konjungsi, kata baku, tanda baca, dan struktur kalimat yang tepat agar pesan dapat disampaikan secara jelas, logis, dan mudah dipahami.',

    sections: [
        // =========================================================
        // 1. KALIMAT EFEKTIF
        // =========================================================
        {
            id: 'twk8-kalimat-efektif',
            number: '1',
            title: 'Kalimat Efektif',

            paragraphs: [
                'Kalimat efektif adalah bentuk komunikasi tertulis atau lisan yang mampu menyampaikan pesan atau ide dengan jelas, tepat, dan singkat, sehingga mudah dipahami oleh pembaca atau pendengar.',

                'Kalimat efektif tidak bersifat rumit atau berbelit-belit, menggunakan pilihan kata yang sesuai, serta mengikuti kaidah tata bahasa yang benar.',

                'Agar sebuah kalimat dapat dikategorikan efektif, ada sejumlah prinsip yang perlu dipenuhi.'
            ],

            subSections: [
                {
                    title: 'A. Keberadaan Subjek dan Predikat',
                    type: 'paragraphs',

                    items: [
                        'Setiap kalimat, baik berupa kalimat tunggal maupun kalimat majemuk, harus memiliki unsur utama berupa subjek dan predikat.',

                        'Jika salah satu unsur tersebut, yaitu subjek atau predikat, tidak ada, kalimat akan menjadi tidak efektif dan sulit dipahami.',

                        'Kata-kata yang diawali oleh kata depan (preposisi) seperti di, ke, dari, buat, bagi, untuk, kepada, dan sebagainya, serta kata hubung (konjungsi) seperti meskipun, karena, jika, walaupun, tidak dapat berfungsi sebagai subjek dalam sebuah kalimat.',

                        'Subjek tidak boleh diawali oleh kata depan atau kata hubung. Subjek harus berupa kata atau frasa yang menunjukkan pelaku, hal, atau sesuatu yang dibicarakan dalam kalimat.'
                    ],

                    examples: [
                        {
                            label: 'Tidak efektif',
                            text: 'Untuk belajar dengan giat adalah harapan orang tua.',
                            explanation:
                                'Kalimat ini tidak efektif karena "Untuk belajar dengan giat" diawali oleh kata depan "untuk" sehingga tidak dapat berfungsi sebagai subjek.'
                        },
                        {
                            label: 'Efektif',
                            text: 'Belajar dengan giat adalah harapan orang tua.',
                            explanation:
                                'Kalimat menjadi efektif karena terdapat subjek yang dapat berfungsi dengan tepat.'
                        }
                    ]
                },

                {
                    title: 'B. Kesejajaran',
                    type: 'paragraphs',

                    items: [
                        'Kesejajaran atau paralelisme dalam kalimat efektif adalah penerapan pola atau struktur yang serupa pada kata, frasa, atau klausa yang dihubungkan oleh kata sambung (konjungsi).',

                        'Prinsip ini bertujuan untuk menciptakan harmoni dalam kalimat, sehingga elemen-elemen yang saling berhubungan memiliki bentuk yang konsisten.',

                        'Dengan pola yang serupa, kalimat menjadi lebih mudah dipahami, alurnya terasa lebih logis, dan pesan yang disampaikan lebih jelas.'
                    ],

                    examples: [
                        {
                            label: 'Tidak sejajar',
                            text: 'Dia suka membaca buku, mendengarkan musik, dan untuk menulis puisi.',
                            explanation:
                                'Dua elemen pertama berupa frasa kerja, yaitu "membaca buku" dan "mendengarkan musik", sedangkan elemen terakhir menggunakan pola berbeda, yaitu "untuk menulis puisi".'
                        },
                        {
                            label: 'Sejajar',
                            text: 'Dia suka membaca buku, mendengarkan musik, dan menulis puisi.',
                            explanation:
                                'Ketiga unsur menggunakan pola frasa kerja yang sejajar.'
                        },
                        {
                            label: 'Tidak sejajar',
                            text: 'Dalam presentasi tersebut, dia berbicara tentang strategi pemasaran, inovasi teknologi, dan bagaimana timnya bekerja.',
                            explanation:
                                'Dua elemen pertama berupa frasa benda, sedangkan elemen terakhir berupa klausa.'
                        },
                        {
                            label: 'Sejajar',
                            text: 'Dalam presentasi tersebut, dia berbicara tentang strategi pemasaran, inovasi teknologi, dan dinamika kerja timnya.',
                            explanation:
                                'Semua elemen menggunakan frasa benda yang sejajar.'
                        }
                    ]
                },

                {
                    title: 'C. Kehematan',
                    type: 'paragraphs',

                    items: [
                        'Kehematan dalam kalimat efektif mengacu pada penggunaan kata-kata secara efisien dan tepat, tanpa menambahkan elemen yang tidak diperlukan.',

                        'Prinsip ini bertujuan untuk memastikan bahwa pesan yang ingin disampaikan tetap jelas dan mudah dipahami, tetapi tidak bertele-tele atau menyertakan informasi yang tidak relevan.',

                        'Dengan menerapkan kehematan, sebuah kalimat akan terasa lebih lugas, menarik, dan langsung pada inti pembahasan.'
                    ],

                    subSections: [
                        {
                            title: 'a. Menghindari Pengulangan',
                            type: 'paragraphs',

                            items: [
                                'Penggunaan kata atau frasa yang berulang-ulang sebaiknya dihindari untuk menjaga alur kalimat tetap ringkas.'
                            ],

                            examples: [
                                {
                                    label: 'Tidak hemat',
                                    text: 'Dia mengatakan bahwa ia akan pergi, dan dia juga mengatakan bahwa ia akan kembali.'
                                },
                                {
                                    label: 'Hemat',
                                    text: 'Dia mengatakan bahwa ia akan pergi dan kembali.'
                                }
                            ]
                        },

                        {
                            title: 'b. Menghindari Kata yang Redundan',
                            type: 'paragraphs',

                            items: [
                                'Kata-kata yang memiliki makna sama atau sudah tercakup dalam kata lain sebaiknya tidak digunakan secara bersamaan.'
                            ],

                            examples: [
                                {
                                    label: 'Tidak hemat',
                                    text: 'Dia memulai awal ceritanya dari bagian pertama.'
                                },
                                {
                                    label: 'Hemat',
                                    text: 'Dia memulai ceritanya dari bagian pertama.'
                                }
                            ]
                        },

                        {
                            title: 'c. Mengutamakan Kata yang Relevan',
                            type: 'paragraphs',

                            items: [
                                'Hanya gunakan kata-kata yang relevan dengan konteks pembahasan. Kalimat efektif tidak memuat informasi yang tidak diperlukan.'
                            ],

                            examples: [
                                {
                                    label: 'Tidak hemat',
                                    text: 'Karena hujan deras yang turun dari pagi hingga malam, acara tersebut ditunda sampai waktu yang akan diumumkan nanti.'
                                },
                                {
                                    label: 'Hemat',
                                    text: 'Karena hujan deras, acara tersebut ditunda hingga waktu yang akan diumumkan.'
                                }
                            ]
                        },

                        {
                            title: 'd. Menggunakan Struktur Kalimat Sederhana',
                            type: 'paragraphs',

                            items: [
                                'Kalimat yang terlalu panjang atau rumit dapat dipecah menjadi beberapa kalimat pendek untuk meningkatkan kejelasan.'
                            ],

                            examples: [
                                {
                                    label: 'Tidak hemat',
                                    text: 'Ia memutuskan untuk segera pulang ke rumahnya yang berada di pinggiran kota karena merasa tidak enak badan sejak pagi.'
                                },
                                {
                                    label: 'Hemat',
                                    text: 'Ia memutuskan pulang ke rumahnya di pinggiran kota karena merasa tidak enak badan.'
                                }
                            ]
                        }
                    ]
                },

                {
                    title: 'D. Kelogisan',
                    type: 'paragraphs',

                    items: [
                        'Kelogisan adalah prinsip yang menekankan bahwa struktur dan pilihan kata dalam sebuah kalimat harus disusun dengan cara yang dapat diterima akal sehat dan mengikuti kaidah tata bahasa yang benar.',

                        'Hal ini memastikan bahwa kalimat mudah dipahami dan pesan yang ingin disampaikan dapat diterima oleh pembaca atau pendengar tanpa kebingungan.'
                    ],

                    examples: [
                        {
                            label: 'Tidak logis',
                            text: 'Saya akan ke pasar, karena beberapa kendaraan mogok karena macet terlalu lama di jalan.'
                        },
                        {
                            label: 'Logis',
                            text: 'Saya akan ke pasar untuk membeli sayur. Beberapa kendaraan berhenti karena terjadi kemacetan di jalan.'
                        }
                    ]
                },

                {
                    title: 'E. Kecermatan Penulisan',
                    type: 'paragraphs',

                    items: [
                        'Sebuah kalimat mungkin sudah memenuhi syarat dari segi struktur dan logika, tetapi belum tentu dianggap efektif jika tidak mematuhi aturan Ejaan Yang Disempurnakan (EYD) dengan benar.',

                        'Penerapan EYD yang tepat merupakan elemen penting untuk memastikan bahwa sebuah kalimat tidak hanya benar secara tata bahasa dan logika, tetapi juga sesuai dengan standar penulisan yang berlaku.',

                        'Dengan mengikuti kaidah EYD, pesan dalam kalimat menjadi lebih jelas, profesional, dan mudah dipahami.'
                    ],

                    subSections: [
                        {
                            title: 'a. Kejelasan dan Kepahaman Pesan',
                            type: 'paragraphs',

                            items: [
                                'Penerapan EYD memastikan setiap kalimat tersusun secara jelas sehingga pesan dapat diterima tanpa ambigu.',

                                'Ketidaktepatan dalam penggunaan tanda baca atau ejaan dapat memengaruhi makna kalimat secara signifikan.'
                            ],

                            examples: [
                                {
                                    label: 'Makna dapat berubah',
                                    text: 'Mari makan, anak-anak.',
                                    explanation:
                                        'Penggunaan koma setelah kata "makan" dapat menghasilkan makna yang berbeda.'
                                },
                                {
                                    label: 'Ajakan',
                                    text: 'Mari makan, anak-anak!',
                                    explanation:
                                        'Tanda baca membantu memperjelas bahwa kalimat tersebut merupakan ajakan kepada anak-anak untuk makan.'
                                }
                            ]
                        },

                        {
                            title: 'b. Penggunaan Tanda Baca yang Benar',
                            type: 'paragraphs',

                            items: [
                                'EYD memberikan panduan penggunaan tanda baca untuk menciptakan keteraturan dalam kalimat.',

                                'Tanda baca yang salah atau tidak tepat dapat memengaruhi alur kalimat, bahkan membuat pembaca kehilangan konteks.'
                            ],

                            examples: [
                                {
                                    label: 'Salah',
                                    text: 'Dia berkata "Besok saya akan pergi".',
                                    explanation:
                                        'Penggunaan tanda baca pada kalimat langsung tidak tepat.'
                                },
                                {
                                    label: 'Benar',
                                    text: 'Dia berkata, "Besok saya akan pergi."',
                                    explanation:
                                        'Koma digunakan setelah kata pengiring, kemudian kalimat langsung ditulis di dalam tanda petik dengan tanda titik sebelum tanda petik penutup.'
                                }
                            ]
                        },

                        {
                            title: 'c. Penggunaan Kata Baku',
                            type: 'paragraphs',

                            items: [
                                'EYD mengacu pada Kamus Besar Bahasa Indonesia (KBBI) sebagai pedoman utama dalam menentukan kata baku.',

                                'Kata-kata yang tidak baku sering kali membingungkan pembaca, terutama dalam dokumen formal.'
                            ],

                            examples: [
                                {
                                    label: 'Kata baku',
                                    text: 'Atlet tersebut memenangkan perlombaan.'
                                },
                                {
                                    label: 'Tidak baku',
                                    text: 'Atlit tersebut memenangkan perlombaan.'
                                }
                            ]
                        },

                        {
                            title: 'd. Kaidah Penulisan Huruf',
                            type: 'paragraphs',

                            items: [
                                'EYD menetapkan aturan penggunaan huruf kapital dan huruf kecil sesuai dengan konteks, misalnya pada nama tempat, institusi, atau awal kalimat.',

                                'Ketidakpatuhan terhadap aturan ini dapat mengurangi kredibilitas tulisan.'
                            ],

                            examples: [
                                {
                                    label: 'Salah',
                                    text: 'Universitas Lampung memiliki Fakultas Kedokteran.'
                                },
                                {
                                    label: 'Benar',
                                    text: 'Universitas Lampung memiliki fakultas Kedokteran.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // =========================================================
        // 2. KONJUNGSI
        // =========================================================
        {
            id: 'twk8-konjungsi',
            number: '2',
            title: 'Konjungsi',

            paragraphs: [
                'Konjungsi adalah jenis kata yang berfungsi untuk menghubungkan atau memperluas hubungan antara dua atau lebih klausa dalam sebuah kalimat.',

                'Kata-kata ini berperan penting dalam membentuk struktur kalimat yang logis dan koheren, sehingga pesan yang disampaikan menjadi lebih jelas.',

                'Dalam penulisan, terdapat aturan tertentu yang harus diperhatikan agar penggunaan konjungsi sesuai dengan tata bahasa dan mudah dipahami.'
            ],

            subSections: [
                {
                    title: 'A. Konjungsi Korelatif',
                    type: 'paragraphs',

                    items: [
                        'Konjungsi korelatif adalah jenis kata hubung yang digunakan secara berpasangan untuk menghubungkan elemen-elemen dalam sebuah kalimat.',

                        'Pasangan kata dalam konjungsi korelatif telah ditentukan secara khusus dan tidak dapat dipertukarkan dengan kata lain.',

                        'Jenis konjungsi ini berfungsi untuk menekankan hubungan timbal balik atau kesejajaran antara dua elemen yang dihubungkan.'
                    ],

                    table: [
                        {
                            label: 'Baik ... maupun ...',
                            example:
                                'Baik aku maupun dia setuju dengan hasil sidang tersebut.'
                        },
                        {
                            label: 'Tidak hanya ... tetapi juga ...',
                            example:
                                'Tidak hanya dia cantik, tetapi juga siswa pintar di kelasnya.'
                        },
                        {
                            label: 'Jangankan ... pun ...',
                            example:
                                'Jangankan pedagang, pejalan kaki pun merasa terganggu.'
                        },
                        {
                            label: 'Demikian ... sehingga ...',
                            example:
                                'Pelari itu berlari demikian cepat sehingga sulit dikejar.'
                        }
                    ]
                },

                {
                    title: 'B. Konjungsi Koordinatif',
                    type: 'paragraphs',

                    items: [
                        'Konjungsi koordinatif adalah jenis kata hubung yang digunakan untuk menghubungkan dua atau lebih klausa, frasa, atau kata yang memiliki kedudukan setara dalam sebuah kalimat.',

                        'Elemen-elemen yang dihubungkan oleh konjungsi koordinatif memiliki kedudukan yang sama atau setara.'
                    ],

                    table: [
                        {
                            label: 'Dan',
                            example:
                                'Budi mencuci baju dan adiknya bermain di lapangan.'
                        },
                        {
                            label: 'Serta',
                            example:
                                'Siswa Al-Faiz mempersiapkan ujian serta mencoba TryOut UTBK 2025.'
                        },
                        {
                            label: 'Lagi',
                            example:
                                'Dia adalah siswa yang rajin lagi periang.'
                        },
                        {
                            label: 'Kemudian',
                            example:
                                'Gedung yang baru jadi itu dicat biru kemudian disewakan ke para pedagang.'
                        },
                        {
                            label: 'Lalu',
                            example:
                                'Para pengungsi telah diberikan bantuan lalu direncanakan untuk dipulangkan.'
                        },
                        {
                            label: 'Sedangkan',
                            example:
                                'Aku mengerjakan PR di kamar, sedangkan temanku mengerjakan PR di dapur.'
                        },
                        {
                            label: 'Tetapi',
                            example:
                                'Pemuda itu pintar, tetapi dia malas.'
                        },
                        {
                            label: 'Melainkan',
                            example:
                                'Kue itu bukan dibuat menggunakan tepung, melainkan menggunakan jagung.'
                        },
                        {
                            label: 'Atau',
                            example:
                                'Kami diminta untuk membawa motor atau mobil.'
                        }
                    ]
                },

                {
                    title: 'C. Konjungsi Subordinatif',
                    type: 'paragraphs',

                    items: [
                        'Konjungsi subordinatif berfungsi menghubungkan klausa-klausa yang memiliki hubungan bertingkat, yaitu antara induk kalimat dan anak kalimat.',

                        'Berdasarkan hubungan yang dibentuk, konjungsi subordinatif dapat menunjukkan hubungan syarat, sebab, tujuan, waktu, dan hubungan lainnya.'
                    ],

                    subSections: [
                        {
                            title: 'Konjungsi Intrakalimat',
                            type: 'paragraphs',

                            items: [
                                'Konjungsi intrakalimat digunakan untuk menghubungkan klausa induk dengan klausa anak dalam sebuah kalimat.',

                                'Hubungan ini menunjukkan keterkaitan ide antara dua klausa yang memiliki peran berbeda, biasanya berupa hubungan syarat, sebab, tujuan, atau waktu.'
                            ],

                            table: [
                                {
                                    label: 'Walaupun',
                                    example:
                                        'Anak-anak kecil tersebut tetap bermain di lapangan walaupun hujan deras.'
                                },
                                {
                                    label: 'Meskipun',
                                    example:
                                        'Siswa itu tetap sekolah meskipun sedang sakit.'
                                },
                                {
                                    label: 'Jika',
                                    example:
                                        'Aku akan membeli buah semangka jika ujian nanti mendapat nilai sempurna.'
                                },
                                {
                                    label: 'Kalau',
                                    example:
                                        'Ikan di kolam itu akan mati kalau tidak segera dibersihkan.'
                                },
                                {
                                    label: 'Agar',
                                    example:
                                        'Siswa belajar di Al-Faiz agar lulus CPNS 2024.'
                                },
                                {
                                    label: 'Karena',
                                    example:
                                        'Fulan tidak masuk sekolah karena dia sedang sakit.'
                                },
                                {
                                    label: 'Ketika',
                                    example:
                                        'Pembangunan itu diberhentikan ketika perusahaan mengalami kerugian besar.'
                                }
                            ]
                        },

                        {
                            title: 'Konjungsi Antarkalimat',
                            type: 'paragraphs',

                            items: [
                                'Konjungsi antarkalimat digunakan untuk menghubungkan dua kalimat yang berbeda.',

                                'Konjungsi antarkalimat selalu terletak di awal kalimat dan biasanya diikuti tanda koma.',

                                'Hubungan yang dibentuk dapat berupa tambahan, sebab-akibat, pertentangan, atau hubungan lainnya.'
                            ],

                            table: [
                                {
                                    label: 'Selanjutnya',
                                    example:
                                        'Panaskan air hingga mendidih. Selanjutnya, masukkan ayam ke dalamnya.'
                                },
                                {
                                    label: 'Oleh karena itu',
                                    example:
                                        'Persaingan bisnis semakin ketat. Oleh karena itu, para penjual harus kreatif.'
                                },
                                {
                                    label: 'Namun',
                                    example:
                                        'Anak itu sangat pintar. Namun, dia sangat malas.'
                                },
                                {
                                    label: 'Bahkan',
                                    example:
                                        'Pamanku seorang petani andal. Bahkan, dia telah mendapatkan penghargaan.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        // =========================================================
        // 3. CONTOH SOAL KALIMAT EFEKTIF
        // =========================================================
        {
            id: 'twk8-contoh-soal',
            number: '3',
            title: 'Contoh Soal Kalimat Efektif',

            paragraphs: [
                'Penggunaan gadget yang berlebihan di kalangan anak muda dapat menimbulkan berbagai dampak negatif. Salah satu bahaya utama adalah penurunan kualitas tidur karena waktu yang dihabiskan di depan layar mengganggu pola tidur mereka. Selain itu, terlalu sering menggunakan gadget dapat menyebabkan masalah kesehatan, seperti gangguan penglihatan dan postur tubuh yang buruk. Banyak anak muda tidak menyadari dampak-dampak ini, mereka terus menggunakan gadget tanpa henti. Kecanduan gadget juga bisa mempengaruhi interaksi sosial, membuat anak muda lebih cenderung menarik diri dari pergaulan nyata. Oleh karena itu, penting bagi orang tua untuk mengawasi dan membatasi penggunaan gadget agar anak tetap sehat secara fisik dan mental.'
            ],

            subSections: [
                {
                    title: 'Soal 1',
                    type: 'paragraphs',

                    items: [
                        'Paragraf di atas memiliki penggunaan tanda baca yang salah, yaitu ...'
                    ],

                    options: [
                        'A. Oleh karena itu, penting bagi orang tua untuk mengawasi dan membatasi penggunaan gadget.',
                        'B. Kecanduan gadget juga bisa mempengaruhi interaksi sosial, membuat anak muda lebih cenderung menarik diri dari pergaulan nyata.',
                        'C. Banyak anak muda tidak menyadari dampak-dampak ini, mereka terus menggunakan gadget tanpa henti.',
                        'D. Selain itu, terlalu sering menggunakan gadget dapat menyebabkan masalah kesehatan, seperti gangguan penglihatan dan postur tubuh yang buruk.',
                        'E. Salah satu bahaya utama adalah penurunan kualitas tidur karena waktu yang dihabiskan di depan layar mengganggu pola tidur mereka.'
                    ],

                    answer: 'C',

                    explanation:
                        'Kalimat pada opsi C mengandung kesalahan tanda baca. Setelah frasa "dampak-dampak ini", seharusnya digunakan tanda titik (.) bukan koma (,). Kalimat tersebut sebaiknya dipisahkan menjadi dua kalimat agar lebih jelas dan sesuai dengan aturan tanda baca.'
                },

                {
                    title: 'Soal 2',
                    type: 'paragraphs',

                    items: [
                        '[1] Polusi udara adalah salah satu masalah lingkungan yang serius di banyak kota besar. [2] Banyak sumber polusi udara berasal dari kendaraan bermotor dan industri yang menghasilkan emisi gas berbahaya. [3] Asap kendaraan dan pabrik yang memenuhi langit kota. [4] Akibat dari polusi udara ini, kualitas udara menurun drastis dan membahayakan kesehatan masyarakat. [5] Oleh karena itu, penting untuk melakukan upaya bersama dalam mengurangi emisi dan menjaga kebersihan udara di sekitar kita.',

                        'Kalimat yang tidak efektif pada paragraf di atas terdapat di ...'
                    ],

                    options: [
                        'A. Kalimat 3',
                        'B. Kalimat 1',
                        'C. Kalimat 5',
                        'D. Kalimat 4',
                        'E. Kalimat 2'
                    ],

                    answer: 'A',

                    explanation:
                        'Kalimat yang tidak efektif adalah kalimat [3] karena hanya memiliki subjek tanpa predikat. Perbaikan yang tepat dapat dilakukan dengan menghilangkan kata "yang" sehingga menjadi "Asap kendaraan dan pabrik memenuhi langit kota."'
                },

                {
                    title: 'Soal 3',
                    type: 'paragraphs',

                    items: [
                        '"Pembangunan sekolah itu belum dapat dilaksanakan. Karena dana yang diajukan masih belum disetujui."',

                        'Kalimat di atas dapat diperbaiki dengan ...'
                    ],

                    options: [
                        'A. Menghilangkan kata yang.',
                        'B. Menghilangkan tanda titik setelah dilaksanakan.',
                        'C. Menghilangkan kata karena.',
                        'D. Menghilangkan kata belum.',
                        'E. Hilangkan semua kata.'
                    ],

                    answer: 'B',

                    explanation:
                        'Kata "karena" merupakan konjungsi subordinatif yang menghubungkan anak kalimat dengan induk kalimat. Penggunaan tanda titik setelah kata "dilaksanakan" memisahkan dua bagian yang seharusnya menjadi satu kesatuan kalimat. Oleh karena itu, tanda titik tersebut perlu dihilangkan.'
                }
            ]
        },

        // =========================================================
        // 4. RINGKASAN
        // =========================================================
        {
            id: 'twk8-ringkasan',
            number: '4',
            title: 'Ringkasan Materi',

            paragraphs: [
                'Kalimat efektif merupakan kalimat yang mampu menyampaikan gagasan secara jelas, tepat, singkat, dan mudah dipahami.',

                'Dalam menyusun kalimat efektif, perhatikan keberadaan subjek dan predikat, kesejajaran, kehematan, kelogisan, serta kecermatan penulisan.',

                'Keberadaan subjek dan predikat merupakan unsur utama dalam sebuah kalimat. Subjek tidak dapat diawali oleh kata depan atau kata hubung.',

                'Kesejajaran berarti unsur-unsur yang dihubungkan harus memiliki bentuk atau pola yang konsisten.',

                'Kehematan berarti menghindari pengulangan, kata redundan, informasi yang tidak relevan, serta struktur kalimat yang terlalu rumit.',

                'Kelogisan berarti struktur dan pilihan kata harus dapat diterima oleh akal sehat serta sesuai dengan hubungan makna yang ingin disampaikan.',

                'Kecermatan penulisan berkaitan dengan penggunaan ejaan, tanda baca, kata baku, serta kaidah penulisan huruf yang tepat.',

                'Konjungsi digunakan untuk menghubungkan kata, frasa, klausa, atau kalimat. Jenis yang perlu dipahami antara lain konjungsi korelatif, koordinatif, subordinatif intrakalimat, dan antarkalimat.'
            ],

            subSections: [
                {
                    title: 'Poin Penting untuk Diingat',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Subjek dan Predikat',
                            text: 'Setiap kalimat harus memiliki struktur utama yang jelas, terutama subjek dan predikat.'
                        },
                        {
                            title: 'Kesejajaran',
                            text: 'Unsur yang sederajat harus menggunakan bentuk atau pola yang sejajar.'
                        },
                        {
                            title: 'Kehematan',
                            text: 'Hindari kata yang berulang, redundan, dan tidak relevan.'
                        },
                        {
                            title: 'Kelogisan',
                            text: 'Pastikan hubungan antargagasan dapat diterima secara logis.'
                        },
                        {
                            title: 'Kecermatan',
                            text: 'Perhatikan EYD, tanda baca, kata baku, dan penggunaan huruf.'
                        },
                        {
                            title: 'Konjungsi Korelatif',
                            text: 'Digunakan secara berpasangan, seperti baik... maupun..., tidak hanya... tetapi juga....'
                        },
                        {
                            title: 'Konjungsi Koordinatif',
                            text: 'Menghubungkan unsur-unsur yang memiliki kedudukan setara.'
                        },
                        {
                            title: 'Konjungsi Subordinatif',
                            text: 'Menghubungkan induk kalimat dengan anak kalimat atau menunjukkan hubungan antarklausa.'
                        },
                        {
                            title: 'Konjungsi Antarkalimat',
                            text: 'Menghubungkan kalimat yang berbeda dan biasanya berada di awal kalimat serta diikuti tanda koma.'
                        }
                    ]
                }
            ]
        }
    ]
}