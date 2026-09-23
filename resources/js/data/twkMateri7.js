// src/data/twkMateri7.js

export const twkMateri7 = {
    id: 7,

    tema: 'GAGASAN UTAMA',

    subtitle: 'Memahami gagasan utama, jenis paragraf, dan kesimpulan',

    sections: [
        // =====================================================
        // 1. PARAGRAF
        // =====================================================
        {
            id: 'paragraf',
            number: '01',
            title: 'PARAGRAF',

            paragraphs: [
                'Paragraf adalah bagian penting dari sebuah wacana atau teks yang memuat satu ide pokok. Ide pokok ini menjadi inti pembahasan dalam paragraf tersebut dan biasanya berkaitan erat dengan keseluruhan isi wacana.',

                'Paragraf membantu menyusun informasi agar lebih terstruktur dan memudahkan pembaca memahami isi tulisan. Agar sebuah paragraf efektif, diperlukan beberapa unsur yang saling mendukung.',

                'Berikut adalah unsur-unsur utama dalam paragraf beserta penjelasannya:',
            ],

            subSections: [
                {
                    title: 'Unsur-Unsur Utama dalam Paragraf',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Ide Pokok',
                            text: 'Ide pokok merupakan inti atau gagasan utama yang menjadi dasar pembahasan dalam sebuah paragraf. Ide pokok biasanya terletak dalam satu kalimat utama, yang bisa berada di awal, tengah, akhir, atau bahkan tersirat di seluruh paragraf.',
                        },

                        {
                            title: 'Kalimat Utama',
                            text: 'Kalimat utama adalah kalimat yang memuat ide pokok paragraf. Kalimat ini biasanya bersifat umum dan mencakup seluruh isi paragraf. Kalimat utama dapat ditemukan di berbagai posisi tergantung pola pengembangan paragraf, seperti deduktif, induktif, ineratif, atau tersirat.',
                        },

                        {
                            title: 'Kalimat Penjelas',
                            text: 'Kalimat penjelas berfungsi mendukung, memperinci, atau menjelaskan ide pokok yang ada dalam kalimat utama. Kalimat penjelas sering kali memuat fakta, data, contoh, atau deskripsi.',
                        },
                    ],
                },
            ],
        },

        // =====================================================
        // 2. CIRI-CIRI GAGASAN UTAMA
        // =====================================================
        {
            id: 'ciri-gagasan-utama',
            number: '02',
            title: 'CIRI-CIRI GAGASAN UTAMA',

            paragraphs: [
                'Untuk mengenali gagasan utama, terdapat beberapa ciri khas yang membedakannya dari kalimat lain dalam paragraf.',
            ],

            subSections: [
                {
                    title: 'Ciri-Ciri Gagasan Utama',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Merupakan Kalimat Umum',
                            text: 'Gagasan utama sering kali berupa kalimat yang cakupannya luas, tidak memuat rincian atau contoh spesifik, dan memberikan gambaran keseluruhan isi paragraf.',
                        },

                        {
                            title: 'Didukung oleh Kalimat Penjelas',
                            text: 'Kalimat-kalimat lain dalam paragraf bertugas mendukung atau menjelaskan gagasan utama melalui rincian, contoh, atau data.',
                        },

                        {
                            title: 'Hanya Ada Satu dalam Paragraf',
                            text: 'Setiap paragraf hanya memiliki satu gagasan utama yang menjadi inti dari paragraf tersebut.',
                        },

                        {
                            title: 'Menjawab Pertanyaan "Tentang Apa Paragraf Ini?"',
                            text: 'Gagasan utama memberikan jawaban langsung jika pembaca bertanya apa topik utama atau inti dari paragraf tersebut.',
                        },
                    ],
                },
            ],
        },

        // =====================================================
        // 3. JENIS PARAGRAF
        // =====================================================
        {
            id: 'jenis-paragraf',
            number: '03',
            title: 'JENIS PARAGRAF BERDASARKAN POSISI KALIMAT UTAMA',

            paragraphs: [
                'Jenis paragraf dapat dikelompokkan berdasarkan posisi kalimat utama yang memuat gagasan utama pada paragraf. Posisi kalimat utama ini memengaruhi cara paragraf dikembangkan dan pola penyampaian informasi kepada pembaca.',
            ],

            subSections: [
                // -------------------------------------------------
                // DEDUKTIF
                // -------------------------------------------------
                {
                    title: 'Paragraf Deduktif',
                    type: 'paragraphs',

                    items: [
                        'Paragraf deduktif adalah jenis paragraf yang menempatkan kalimat utama di awal paragraf. Kalimat utama ini mengandung ide pokok yang bersifat umum dan menjadi dasar pengembangan paragraf. Setelah itu, paragraf dilanjutkan dengan kalimat-kalimat penjelas yang mendukung atau menjelaskan ide pokok tersebut secara lebih spesifik.',

                        'Contoh:',

                        'Perubahan iklim memiliki dampak serius bagi kehidupan manusia. Meningkatnya suhu bumi mengakibatkan es di kutub mencair dan permukaan air laut naik. Selain itu, perubahan pola cuaca menyebabkan bencana alam seperti banjir dan kekeringan lebih sering terjadi. Dampak-dampak ini mempengaruhi ekosistem, perekonomian, dan kesehatan masyarakat di seluruh dunia.',

                        'Kalimat utama: Perubahan iklim memiliki dampak serius bagi kehidupan manusia.',

                        'Gagasan utama: Dampak serius perubahan iklim.',
                    ],
                },

                // -------------------------------------------------
                // INDUKTIF
                // -------------------------------------------------
                {
                    title: 'Paragraf Induktif',
                    type: 'paragraphs',

                    items: [
                        'Paragraf induktif adalah paragraf yang dimulai dengan penyampaian fakta, contoh, atau pernyataan yang bersifat khusus, kemudian diakhiri dengan kalimat utama yang bersifat umum. Dalam paragraf induktif, ide pokok atau gagasan utama terletak di akhir paragraf sebagai simpulan dari penjelasan sebelumnya. Paragraf ini mengikuti pola khusus ke umum.',

                        'Contoh:',

                        'Banyak siswa yang mengeluh sulit memahami pelajaran tanpa panduan dari guru. Di sisi lain, beberapa guru mengaku kesulitan menggunakan teknologi pembelajaran daring. Selain itu, akses internet yang tidak merata juga menjadi kendala besar bagi banyak siswa. Oleh karena itu, pembelajaran daring memerlukan dukungan yang lebih baik dari segi pelatihan guru, infrastruktur, dan aksesibilitas.',

                        'Kalimat utama: Oleh karena itu, pembelajaran daring memerlukan dukungan yang lebih baik dari segi pelatihan guru, infrastruktur, dan aksesibilitas.',

                        'Gagasan utama: Pembelajaran daring memerlukan dukungan dari segi pelatihan, infrastruktur, dan aksesibilitas.',
                    ],
                },

                // -------------------------------------------------
                // INERATIF
                // -------------------------------------------------
                {
                    title: 'Paragraf Ineratif',
                    type: 'paragraphs',

                    items: [
                        'Paragraf ineratif adalah jenis paragraf yang memiliki ciri khas pada penempatan kalimat utamanya di bagian tengah paragraf. Kalimat utama berada di antara kalimat-kalimat penjelas yang berada sebelum dan sesudahnya.',

                        'Contoh:',

                        'Musibah gempa bumi dan tsunami terjadi di sebagian besar wilayah Aceh. Di samping itu, gempa berkekuatan besar turut dialami sebagian wilayah D.I. Yogyakarta dan beberapa daerah lainnya. Indonesia memang sedang ditimpa beragam bencana dan musibah. Kota Jakarta direndam banjir. Beberapa kapal dikabarkan tenggelam dan hilang di laut dalam. Banyak dari bencana telah memakan korban jiwa tidak sedikit. Datangnya wabah penyakit turut memperparah musibah yang terjadi.',

                        'Kalimat utama: Indonesia memang sedang ditimpa beragam bencana dan musibah.',

                        'Gagasan utama: Bencana dan musibah yang terjadi di Indonesia.',
                    ],
                },
            ],
        },

        // =====================================================
        // 4. CONTOH SOAL GAGASAN UTAMA
        // =====================================================
        {
            id: 'contoh-gagasan-utama',
            number: '04',
            title: 'CONTOH SOAL GAGASAN UTAMA',

            paragraphs: [
                'Bekerja sebagai pedagang di coffee shop memberikan banyak keuntungan. Kamu akan menguasai berbagai teknik penyajian kopi, mulai dari metode manual hingga menggunakan mesin espresso. Selain itu, kamu akan bertemu dengan berbagai pelanggan setiap hari, yang akan meningkatkan kemampuan komunikasi dan interaksi sosialmu. Pengalaman ini juga akan membantu memperluas jaringan sosial, karena kamu akan berkenalan dengan orang-orang dari berbagai latar belakang. Lebih dari itu, bekerja di lingkungan coffee shop yang dinamis dan kreatif dapat meningkatkan keterampilan manajemen waktu dan multitasking.',

                'Pertanyaan: Gagasan utama dari bacaan di atas adalah ...',

                'A. Menguasai berbagai teknik penyajian kopi.',

                'B. Bertemu dengan berbagai pelanggan setiap hari.',

                'C. Manfaat bekerja sebagai pedagang di coffee shop.',

                'D. Meningkatkan keterampilan manajemen waktu dan multitasking.',

                'E. Perluasan jaringan sosial di lingkungan kerja.',

                'Jawaban: C. Manfaat bekerja sebagai pedagang di coffee shop.',

                'Pembahasan: Gagasan utama adalah inti dari paragraf yang mencakup keseluruhan informasi yang disampaikan. Pada paragraf di atas, kalimat pertama menyebutkan bahwa bekerja sebagai pedagang di coffee shop memberikan banyak keuntungan, yang kemudian dijelaskan melalui manfaat-manfaat spesifik dalam kalimat berikutnya, seperti menguasai teknik penyajian kopi, bertemu dengan berbagai pelanggan, memperluas jaringan sosial, dan meningkatkan keterampilan manajemen waktu.',
            ],
        },

        // =====================================================
        // 5. CONTOH SOAL POKOK PIKIRAN
        // =====================================================
        {
            id: 'contoh-pokok-pikiran',
            number: '05',
            title: 'CONTOH SOAL POKOK PIKIRAN',

            paragraphs: [
                'Rendang, misalnya, terkenal dengan bumbunya yang kaya rempah dan proses memasaknya yang memakan waktu lama, menghasilkan cita rasa yang mendalam. Selain itu, ada juga sate yang disajikan dengan saus kacang khas yang lezat. Tidak ketinggalan, gado-gado yang merupakan campuran sayuran segar dengan bumbu kacang yang nikmat. Makanan-makanan ini tidak hanya enak, tetapi juga mencerminkan kekayaan budaya dan tradisi Indonesia. Makanan tradisional Indonesia memiliki keunikan tersendiri yang tidak dimiliki oleh makanan dari negara lain.',

                'Pertanyaan: Pokok pikiran paragraf di atas adalah ...',

                'A. Proses memasak rendang yang memakan waktu lama.',

                'B. Sate dengan saus kacang yang lezat.',

                'C. Gado-gado sebagai campuran sayuran segar.',

                'D. Keunikan makanan tradisional Indonesia.',

                'E. Kekayaan budaya dan tradisi Indonesia melalui makanan.',

                'Jawaban: D. Keunikan makanan tradisional Indonesia.',

                'Pembahasan: Pokok pikiran paragraf adalah inti dari seluruh isi paragraf yang mencakup keseluruhan pembahasan. Pada paragraf di atas, penulis menyebutkan beberapa contoh makanan tradisional Indonesia seperti rendang, sate, dan gado-gado untuk mendukung ide bahwa makanan tradisional Indonesia memiliki keunikan yang khas.',
            ],
        },

        // =====================================================
        // 6. KESIMPULAN
        // =====================================================
        {
            id: 'kesimpulan',
            number: '06',
            title: 'KESIMPULAN',

            paragraphs: [
                'Kesimpulan adalah pernyataan akhir yang merangkum inti atau makna dari sebuah teks atau informasi. Kesimpulan dapat berbentuk eksplisit (tersurat) atau implisit (tersirat), bergantung pada cara informasi disampaikan.',

                'Dalam proses menemukan kesimpulan, terdapat dua keterampilan penting.',
            ],

            subSections: [
                {
                    title: 'Keterampilan dalam Menemukan Kesimpulan',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Interpretasi',
                            text: 'Interpretasi adalah penafsiran terhadap informasi untuk memahami inti dari teks, termasuk hubungan sebab-akibat atau makna tersirat dalam kalimat-kalimatnya.',
                        },

                        {
                            title: 'Integrasi',
                            text: 'Integrasi adalah penggabungan ide-ide pokok atau informasi penting untuk menciptakan pemahaman yang menyeluruh dan padu.',
                        },
                    ],
                },

                {
                    title: 'Hubungan Interpretasi dan Integrasi',
                    type: 'paragraphs',

                    items: [
                        'Kedua keterampilan ini saling melengkapi dalam menghasilkan kesimpulan yang baik. Interpretasi memungkinkan pembaca memahami setiap bagian informasi, sedangkan integrasi menghubungkan bagian-bagian tersebut untuk membentuk gambaran yang utuh.',

                        'Keterampilan ini tidak hanya penting dalam membaca, tetapi juga mengasah kemampuan berpikir kritis dan analitis.',
                    ],
                },
            ],
        },

        // =====================================================
        // 7. CIRI-CIRI KESIMPULAN YANG BAIK
        // =====================================================
        {
            id: 'ciri-kesimpulan',
            number: '07',
            title: 'CIRI-CIRI KESIMPULAN YANG BAIK',

            paragraphs: [
                'Kesimpulan yang baik harus mampu merangkum isi teks secara singkat tetapi tetap mencakup informasi penting.',
            ],

            subSections: [
                {
                    title: 'Ciri-Ciri Kesimpulan',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Ringkas',
                            text: 'Merangkum isi teks dalam beberapa kata atau kalimat.',
                        },

                        {
                            title: 'Mengandung Intisari',
                            text: 'Mencakup gagasan utama atau informasi penting yang terdapat dalam teks.',
                        },

                        {
                            title: 'Tidak Mengulang Detail',
                            text: 'Tidak harus memuat semua detail, tetapi fokus pada ide pokok yang menyeluruh.',
                        },
                    ],
                },
            ],
        },

        // =====================================================
        // 8. LANGKAH-LANGKAH MENEMUKAN KESIMPULAN
        // =====================================================
        {
            id: 'langkah-kesimpulan',
            number: '08',
            title: 'LANGKAH-LANGKAH MENEMUKAN KESIMPULAN',

            paragraphs: [
                'Salah satu tipe soal yang sering muncul dalam ujian yaitu soal kesimpulan, baik yang tersirat (implisit) maupun tersurat (eksplisit). Untuk menemukan kesimpulan dalam sebuah soal bacaan, dapat dilakukan dengan beberapa cara berikut:',
            ],

            subSections: [
                {
                    title: 'Langkah-Langkah',
                    type: 'numbered',

                    items: [
                        {
                            title: 'Baca teks dengan teliti dan temukan ide pokoknya.',
                            text: 'Setelah membaca soal, baca teks dengan cermat untuk menemukan ide pokok di tiap-tiap paragraf.',
                        },

                        {
                            title: 'Integrasikan atau kumpulkan setiap ide pokok yang didapat.',
                            text: 'Setelah mendapat ide pokok dari tiap-tiap paragraf, kumpulkan semua ide pokok hingga menjadi suatu kesimpulan yang utuh dan bulat.',
                        },

                        {
                            title: 'Cobalah menarik kesimpulan yang padu.',
                            text: 'Setelah seluruh ide pokok dikumpulkan menjadi satu, tarik pernyataan sederhana yang memuat keseluruhan informasi dari sekumpulan ide pokok yang telah dipadukan.',
                        },
                    ],
                },
            ],
        },

        // =====================================================
        // 9. RANGKUMAN
        // =====================================================
        {
            id: 'rangkuman',
            number: '09',
            title: 'RANGKUMAN TEMA 7',

            paragraphs: [
                'Gagasan utama merupakan inti pembahasan dalam sebuah paragraf. Untuk menemukannya, perhatikan kalimat utama dan kalimat-kalimat penjelas yang mendukungnya.',

                'Kalimat utama dapat berada di awal, akhir, atau tengah paragraf. Berdasarkan posisi tersebut, paragraf dapat berupa paragraf deduktif, induktif, dan ineratif.',

                'Selain gagasan utama, kemampuan menemukan kesimpulan juga penting dalam memahami bacaan. Kesimpulan merupakan pernyataan yang merangkum inti atau makna keseluruhan teks.',

                'Untuk menemukan kesimpulan, pembaca perlu membaca teks dengan teliti, menemukan ide pokok setiap paragraf, mengintegrasikan informasi penting, kemudian menyusun kesimpulan yang ringkas, padu, dan mencakup keseluruhan isi bacaan.',
            ],
        },
    ],
}