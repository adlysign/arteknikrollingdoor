import { RollingDoorProduct, PortfolioItem, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'AR Teknik Rolling Door',
  shortName: 'AR Teknik',
  legalName: 'CV. AR Teknik Presisi Pratama',
  phone: '+6285647985924',
  whatsapp: '6285647985924',
  whatsappSecondary: '085647985924',
  email: 'info@arteknikrollingdoor.id',
  address: 'Jl. Daan Mogot KM 14 No. 45, Kalideres, Jakarta Barat 11840',
  workshopAddress: 'Kawasan Pergudangan Era Prima Blok D3, Batuceper, Kota Tangerang',
  operationalHours: 'Senin - Sabtu: 08.00 - 18.00 WIB',
  emergencyService: 'Layanan Servis Darurat & Panggilan 24 Jam Nonstop',
  stats: [
    { value: '15+', label: 'Tahun Pengalaman', detail: 'Sejak 2011 di industri mekanikal pintu gulung' },
    { value: '4.800+', label: 'Unit Terpasang', detail: 'Pabrik, mall, gudang & ruko di seluruh Indonesia' },
    { value: '100% SNI', label: 'Material Standar', detail: 'Plat baja galvalum & aluminium bersertifikat' },
    { value: '3 Tahun', label: 'Garansi Mesin Motor', detail: 'Garansi resmi motor elektrik & mekanikal' },
  ]
};

export const PRODUCTS: RollingDoorProduct[] = [
  {
    id: 'rolling-door-otomatis-industri',
    name: 'Rolling Door Otomatis Industri Heavy Duty',
    category: 'otomatis',
    tagline: 'Dirancang khusus untuk gudang logistik, pabrik, dan hanggar berdimensi besar',
    pricePerMeter: 1250000,
    priceDisplay: 'Mulai Rp 1.250.000 / m²',
    image: '/src/assets/images/hero_rolling_door_industrial_1791349852425.jpg',
    description: 'Sistem pintu gulung bermotor otomatis berkekuatan tinggi dengan ketahanan angin kencang (Wind-Lock Guide Rail). Menggunakan motor elektrik Shinsei Seiki / Eastman dengan fitur manual override saat pemadaman listrik.',
    bestFor: 'Pabrik manufaktur, gudang logistik, pusat distribusi, hanggar pesawat & dermaga',
    thicknessOptions: ['0.8 mm', '1.0 mm', '1.2 mm', '1.4 mm Heavy Duty'],
    specs: {
      material: 'Baja Galvanis / Zincalume Anti Karat (Coated)',
      thickness: '0.8 mm s/d 1.4 mm',
      maxDimension: 'Lebar s/d 12.0 m x Tinggi s/d 8.0 m',
      motorOptions: 'Shinsei Seiki 400kg - 1000kg (Made in Japan) / Eastman 600kg',
      lockingSystem: 'Elektrik Brake Lock + Manual Push Button + 2x Remote Wireless',
      warranty: 'Garansi Mesin 3 Tahun, Garansi Daun Pintu 1 Tahun',
      finishColor: 'Silver Galvanis, Putih Powder Coating, Abu-abu Industrial, Custom RAL'
    },
    features: [
      'Dilengkapi Wind-Lock Slat agar tidak terlepas saat diterpa angin badai',
      'Rantai manual (manual chain hoist) untuk operasional saat listrik padam',
      'Safety brake interlock mencegah daun pintu anjlok tiba-tiba',
      'Kecepatan buka tutup konstan 15-20 cm/detik dengan peredam getaran'
    ]
  },
  {
    id: 'rolling-door-one-sheet-ruko',
    name: 'Rolling Door One Sheet Solid (Tanpa Sambungan)',
    category: 'onesheet',
    tagline: 'Modern, elegan, dan senyap tanpa bunyi berisik saat dioperasikan',
    pricePerMeter: 550000,
    priceDisplay: 'Mulai Rp 550.000 / m²',
    image: '/src/assets/images/rolling_door_onesheet_ruko_1791349868080.jpg',
    description: 'Pintu rolling door one sheet diproduksi dari satu lembar plat utuh tanpa sambungan slat horizontal. Dilengkapi nylon silencer belt di sisi samping sehingga suara buka tutup sangat hening (soundless).',
    bestFor: 'Ruko modern, perkantoran, perumahan elit, toko retail jalan protokol',
    thicknessOptions: ['0.45 mm', '0.55 mm', '0.65 mm'],
    specs: {
      material: 'Zincalume / Galvalum Bluescope Steel Anti Korosi',
      thickness: '0.45 mm s/d 0.65 mm',
      maxDimension: 'Lebar s/d 4.5 m x Tinggi s/d 3.5 m',
      motorOptions: 'Manual Ringan Spring Torsi / Opsional Motor Tubular Somfy',
      lockingSystem: 'Kunci Tanam Silinder Kuningan (Grendel Tengah & Samping)',
      warranty: 'Garansi Daun & Per Spring 1 Tahun',
      finishColor: 'Putih Glossy, Cream Ivory, Abu-abu Minimalis'
    },
    features: [
      'Nylon Silencer Strip di kedua sisi peredam bising hingga 90%',
      'Tampilan rata minimalis tanpa bilah-bilah sambungan slat',
      'Sistem per torsi baja khusus membuat buka-tutup manual sangat enteng',
      'Cat Oven Powder Coating tahan gores dan cuaca ekstrem'
    ]
  },
  {
    id: 'rolling-door-perforated-mall',
    name: 'Rolling Door One Sheet Full / Semi Perforated',
    category: 'perforated',
    tagline: 'Tembus pandang estetis untuk etalase mall dengan keamanan maksimal',
    pricePerMeter: 680000,
    priceDisplay: 'Mulai Rp 680.000 / m²',
    image: '/src/assets/images/rolling_door_perforated_mall_1791349883778.jpg',
    description: 'Rolling door berlubang-lubang mikro presisi yang dirancang khusus untuk tenant pusat perbelanjaan, outlet mall, dan showroom. Memberikan ventilasi udara lancar dan visual produk tetap terlihat jelas dari luar saat toko tutup.',
    bestFor: 'Outlet Mall, Butik Fashion, Food Court, Showroom Mobil & Perhiasan',
    thicknessOptions: ['0.5 mm', '0.6 mm', '0.7 mm'],
    specs: {
      material: 'Baja Galvalum Perforated CNC Punching Hole',
      thickness: '0.5 mm s/d 0.7 mm',
      maxDimension: 'Lebar s/d 5.0 m x Tinggi s/d 4.0 m',
      motorOptions: 'Manual Spring / Motor Shigeru 400kg / Motor Tubular',
      lockingSystem: 'Bottom Rail Lock Kunci Ganda Standar Mall Safety',
      warranty: 'Garansi Material & Mekanisme 1 Tahun',
      finishColor: 'White Glossy, Hitam Doff, Silver Metallic, Custom'
    },
    features: [
      'Lubang perforasi presisi 3mm x 3mm memberikan 45% transparansi visual',
      'Memenuhi standar regulasi pengelola mall (sirkulasi udara & sensor asap)',
      'Estetika mewah berpadu dengan ketahanan material baja anti jebol',
      'Tersedia opsi kombinasi (Bawah solid 1 meter, atas perforated)'
    ]
  },
  {
    id: 'rolling-door-aluminium-premium',
    name: 'Rolling Door Slat Aluminium Anti Karat',
    category: 'aluminium',
    tagline: 'Bobot sangat ringan, tahan air laut & udara lembap seumur hidup',
    pricePerMeter: 750000,
    priceDisplay: 'Mulai Rp 750.000 / m²',
    image: '/src/assets/images/rolling_door_onesheet_ruko_1791349868080.jpg',
    description: 'Pintu rolling door yang terbuat dari bilah slat aluminium ekstrusi murni. Memiliki ketahanan korosi alami terbaik, cocok untuk kawasan pesisir pantai, ruangan pendingin (cold storage), atau garasi rumah tinggal mewah.',
    bestFor: 'Garasi hunian mewah, gudang farmasi, area pesisir pantai, pabrik kimia',
    thicknessOptions: ['0.8 mm', '1.0 mm', '1.2 mm'],
    specs: {
      material: 'Aluminium Ekstrusi Alloy 6063-T5',
      thickness: '0.8 mm s/d 1.2 mm',
      maxDimension: 'Lebar s/d 5.5 m x Tinggi s/d 4.0 m',
      motorOptions: 'Manual Spring Heavy Duty / Motor Elektrik 400kg',
      lockingSystem: 'Kunci Hook Aluminium Silinder dengan anak kunci komputer',
      warranty: 'Garansi Anti Karat 10 Tahun, Garansi Mekanikal 1 Tahun',
      finishColor: 'Anodized Silver, Anodized Brown, Dark Grey, Putih'
    },
    features: [
      '100% Bebas karat selamanya, bahkan di lingkungan bersuhu lembap',
      'Bobot 50% lebih ringan dari besi, sangat menghemat beban struktur',
      'Finishing anodized mewah yang tidak pudar terik sinar matahari',
      'Dapat dikombinasikan dengan jendela akrilik transparan'
    ]
  },
  {
    id: 'servis-rolling-door-24jam',
    name: 'Jasa Servis, Perbaikan & Sparepart Rolling Door',
    category: 'servis',
    tagline: 'Teknisi siaga 24 jam untuk penanganan darurat macet, anjlok, atau motor mati',
    pricePerMeter: 350000,
    priceDisplay: 'Biaya Cek & Servis Mulai Rp 350.000',
    image: '/src/assets/images/rolling_door_technician_service_1791349898660.jpg',
    description: 'Layanan servis komprehensif untuk semua jenis merk rolling door (manual maupun elektrik). Melayani penggantian per spring putus, slat penyok tertabrak forklift, rantai macet, motor terbakar, penggantian remote, hingga kalibrasi limit switch.',
    bestFor: 'Semua pabrik, gudang, ruko, kantor yang mengalami kendala operasional pintu gulung',
    thicknessOptions: ['Semua Ketebalan & Tipe'],
    specs: {
      material: 'Suku Cadang Asli (Shinsei Seiki, Eastman, Bearing Koyo, Plat Baja)',
      thickness: 'Sesuai spesifikasi pintu terpasang',
      maxDimension: 'Semua ukuran pintu',
      motorOptions: 'Penggantian motor baru / servis rewinding motor',
      lockingSystem: 'Penggantian silinder kunci macet / patah',
      warranty: 'Garansi Servis & Sparepart 3 Bulan',
      finishColor: 'Penyelarasan cat slat yang diganti'
    },
    features: [
      'Respon cepat estimasi tiba di lokasi Jabodetabek dalam 60 - 90 menit',
      'Membawa sparepart lengkap di armada teknisi untuk perbaikan di tempat',
      'Diagnosa transparan dengan estimasi biaya di awal sebelum pengerjaan',
      'Tersedia kontrak servis berkala B2B per bulan / per kuartal untuk industri'
    ]
  }
];

export const SERVICES = [
  {
    number: '01',
    title: 'Pabrikasi & Pemasangan Unit Baru',
    summary: 'Pembuatan custom ukuran presisi milimeter untuk skala ritel hingga proyek industri raksasa.',
    details: [
      'Survey dan pengukuran langsung ke lokasi tanpa dipungut biaya',
      'Pilihan bahan lengkap: Galvalum, Zincalume, Aluminium, Stainless Steel',
      'Pengerjaan cepat pabrikasi 2-4 hari kerja dengan quality control ketat',
      'Pemasangan rapi dan kokoh oleh teknisi bersertifikat k3 konstruksi'
    ]
  },
  {
    number: '02',
    title: 'Servis & Perbaikan Darurat 24 Jam',
    summary: 'Bantuan darurat saat pintu anjlok, per putus, rantai macet, atau tertabrak kendaraan.',
    details: [
      'Layanan panggilan cepat siap meluncur siang maupun malam',
      'Penanganan cepat agar operasional logistik atau toko Anda tidak terganggu',
      'Penyediaan slat pengganti yang presisi sesuai profil lama',
      'Pengecekan menyeluruh rel pemandu, bearing, dan as pipa penggulung'
    ]
  },
  {
    number: '03',
    title: 'Upgrade Manual ke Sistem Otomatis Elektrik',
    summary: 'Modernisasi pintu manual lama menjadi elektrik remote control tanpa ganti seluruh pintu.',
    details: [
      'Pemasangan motor industri Shinsei Seiki / Eastman / Shigeru',
      'Integrasi 2 unit remote control wireless jangkauan hingga 30 meter',
      'Penambahan push button switch di dinding pos keamanan atau kantor',
      'Instalasi rantai manual override saat terjadi pemadaman listrik PLN'
    ]
  },
  {
    number: '04',
    title: 'Maintenance Berkala Gedung & Gudang (B2B)',
    summary: 'Kontrak perawatan preventif untuk meminimalkan downtime fasilitas logistik & ritel.',
    details: [
      'Pemeriksaan rutin ketegangan per torsi dan pelumasan bearing',
      'Uji coba sensor keamanan photocell anti-jepit & safety edge',
      'Kalibrasi ulang limit switch posisi henti atas dan henti bawah',
      'Laporan teknis berkala dan prioritas respon panggilan darurat VIP'
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Instalasi 12 Unit Rolling Door Otomatis Gudang Logistik',
    client: 'PT. Mitra Ekspedisi Nusantara',
    sector: 'gudang',
    location: 'Cikarang Dry Port, Jawa Barat',
    type: 'Rolling Door Otomatis Heavy Duty 1.2 mm + Motor Shinsei Seiki 800kg',
    dimension: 'Lebar 6.5 m x Tinggi 5.0 m (12 Unit)',
    motorType: 'Shinsei Seiki US-800 Japan',
    completionTime: '8 Hari Kerja',
    image: '/src/assets/images/hero_rolling_door_industrial_1791349852425.jpg',
    description: 'Proyek instalasi pintu gulung loading dock gudang logistik berstandar modern dengan fitur wind-lock heavy duty dan sensor otomatis photocell.'
  },
  {
    id: 'proj-2',
    title: 'Rolling Door One Sheet Solid Deretan Ruko Komersial',
    client: 'Kawasan Niaga Citra Grand',
    sector: 'ruko',
    location: 'BSD City, Tangerang',
    type: 'Rolling Door One Sheet Solid Silencer Strip',
    dimension: 'Lebar 3.8 m x Tinggi 3.2 m (18 Unit Ruko)',
    motorType: 'Sistem Manual Ringan Spring Baja Torsi',
    completionTime: '6 Hari Kerja',
    image: '/src/assets/images/rolling_door_onesheet_ruko_1791349868080.jpg',
    description: 'Penggantian pintu ruko lama menjadi one sheet modern berwarna cream ivory dengan peredam nylon samping agar hening dan rapi saat dibuka.'
  },
  {
    id: 'proj-3',
    title: 'Rolling Door Perforated Butik Fashion Mewah',
    client: 'Fashion Flagship Store',
    sector: 'mall',
    location: 'Plaza Senayan & Pondok Indah Mall, Jakarta',
    type: 'Rolling Door Full Perforated Powder Coating White',
    dimension: 'Lebar 4.2 m x Tinggi 3.5 m',
    motorType: 'Tubular Motor Somfy Silent Operation',
    completionTime: '2 Hari Kerja',
    image: '/src/assets/images/rolling_door_perforated_mall_1791349883778.jpg',
    description: 'Pintu gerai retail dengan lubang ventilasi estetis 3mm yang memungkinkan produk etalase tetap terlihat elegan saat toko tutup malam hari.'
  },
  {
    id: 'proj-4',
    title: 'Perbaikan Darurat & Penggantian Motor 1000kg Pabrik Baja',
    client: 'PT. Perkasa Baja Mandiri',
    sector: 'gudang',
    location: 'Kawasan Industri KIIC, Karawang',
    type: 'Servis Darurat Motor Terbakar & Kalibrasi As Pipa 8 Inci',
    dimension: 'Lebar 8.0 m x Tinggi 6.5 m',
    motorType: 'Shinsei Seiki 1000kg 3 Phase',
    completionTime: '6 Jam (Emergency Response)',
    image: '/src/assets/images/rolling_door_technician_service_1791349898660.jpg',
    description: 'Tim teknisi AR Teknik merespon panggilan darurat pintu akses truk trailer pabrik yang macet total. Selesai diperbaiki dalam waktu 6 jam sehingga jalur produksi kembali berjalan.'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'harga',
    question: 'Berapa kisaran harga rolling door per meter di AR Teknik?',
    answer: 'Harga sangat bergantung pada jenis bahan dan ketebalan plat. Rolling Door One Sheet berkisar Rp 550.000 - Rp 680.000 / m², Rolling Door Aluminium Rp 750.000 - Rp 950.000 / m², dan Rolling Door Otomatis Industri Rp 1.250.000 - Rp 1.850.000 / m². Biaya motor industri Shinsei Seiki / Eastman dihitung terpisah tergantung kapasitas angkat (400kg - 1000kg). Kami selalu memberikan rincian transparan sebelum pengerjaan.'
  },
  {
    category: 'teknis',
    question: 'Apakah survey lokasi dan pengukuran dikenakan biaya?',
    answer: 'Survey lokasi, konsultasi teknis, dan pengukuran awal di seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) adalah 100% GRATIS tanpa kewajiban pemesanan. Teknisi kami akan membawa sampel potongan material fisik agar Anda dapat melihat ketebalannya secara langsung.'
  },
  {
    category: 'teknis',
    question: 'Bagaimana jika listrik PLN padam saat memakai rolling door otomatis?',
    answer: 'Semua unit rolling door otomatis industri dari AR Teknik dilengkapi dengan Manual Chain Block (rantai derek manual). Anda cukup menarik rantai derek tersebut dari bawah dengan sangat ringan untuk membuka atau menutup pintu darurat. Kami juga menyediakan opsi Uninterruptible Power Supply (UPS cadangan baterai) jika diperlukan.'
  },
  {
    category: 'servis',
    question: 'Bisakah rolling door manual saya yang sudah ada diubah menjadi otomatis remote?',
    answer: 'Bisa! Kami memiliki layanan konversi (upgrade) mekanikal. Jika kondisi daun pintu dan pipa as masih layak, kami hanya perlu memasang braket motor elektrik, rantai transmisi, motor industri, dan control box remote wireless tanpa harus mengganti seluruh daun pintu Anda. Ini jauh lebih hemat biaya.'
  },
  {
    category: 'garansi',
    question: 'Berapa lama masa garansi yang diberikan AR Teknik?',
    answer: 'Kami memberikan garansi resmi tertulis: Garansi Mesin Motor Elektrik hingga 3 Tahun, Garansi Daun Pintu & Mekanisme Spring 1 Tahun, dan Garansi Servis Perbaikan 3 Bulan. Selama masa garansi, perbaikan atau penggantian suku cadang yang bermasalah bebas biaya.'
  },
  {
    category: 'servis',
    question: 'Berapa lama respon waktu untuk panggilan servis darurat?',
    answer: 'Untuk area Jabodetabek, tim teknisi tanggap darurat kami meluncur dalam waktu 60 hingga 90 menit setelah laporan diterima via WhatsApp atau telepon hotline. Armada kami dilengkapi peralatan las, perkakas hidrolik, dan sparepart cadangan lengkap.'
  }
];

export const COVERAGE_CITIES = [
  'Jakarta Barat', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Utara',
  'Kota Tangerang', 'Tangerang Selatan', 'BSD City', 'Karawaci', 'Balaraja',
  'Kota Bekasi', 'Kabupaten Bekasi', 'Cikarang', 'Kawasan MM2100', 'Jababeka',
  'Depok', 'Cibinong', 'Kota Bogor', 'Sentul',
  'Karawang KIIC & Suryacipta', 'Cilegon', 'Serang', 'Bandung & Sekitarnya'
];
