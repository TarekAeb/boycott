export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
  ru: { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr' },
};

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export const translations = {
  ar: {
    siteName: 'يقين للمقاطعة',
    siteSlogan: 'مقاطعة أخلاقية، نصرة لأخوتنا',
    menuTitle: 'القائمة',
    toggleLanguage: 'English',
    searchPlaceholder: 'ابحث عن منتج',
    productName: 'اسم المنتج',
    countryOfOrigin: 'بلد المنشأ',
    alternatives: 'البدائل',
    noAlternatives: 'لا توجد بدائل متاحة حاليًا',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ في تحميل البيانات',
    pageNotFound: 'عذرًا! الصفحة غير موجودة',
    backHome: 'العودة إلى الصفحة الرئيسية',
    introText: 'منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات الإسرائيلية والأمريكية.',
    copyright: 'يقين للمقاطعة. جميع الحقوق محفوظة.',
    whyBoycott: 'لماذا نقاطع؟',
    products: 'المنتجات',
    backToProducts: 'العودة إلى المنتجات',
    whyBoycottSubtitle1: 'لماذا نقاطع؟',
    whyBoycottParagraph1: 'المقاطعة هي وسيلة قوية لاستخدام قوتنا كمستهلكين لإجبار المؤسسات المسيئة على تغيير سياساتها.',
    whyBoycottSubtitle2: 'ما هو التأثير؟',
    whyBoycottParagraph2:
      'يمكن أن تؤثر المقاطعة الجماعية للمستهلكين على الصحة المالية للشركات وأن تحدث تغييرًا في سلوك الشركات.',
    whyBoycottSubtitle3: 'كيف تعمل المقاطعة؟',
    whyBoycottParagraph3: 'نحن نعبر عن قوتنا الاقتصادية من خلال عدم شراء منتجات وخدمات الشركات ودعم البدائل الأخلاقية.',
    whyBoycottSubtitle4: 'لماذا هذه المقاطعة؟',
    whyBoycottParagraph4:
      'من واجبنا الأخلاقي سحب الدعم الاقتصادي من أولئك الذين يساعدون في الظلم والقمع وانتهاكات حقوق الإنسان.',
    allCategories: 'جميع الفئات',
    productsCount: 'منتج',
  },
  bn: {
    siteName: 'ইয়াকীন বয়কট',
    siteSlogan: 'নৈতিক বয়কট, আমাদের ভাইদের সমর্থন',
    menuTitle: 'তালিকা',
    toggleLanguage: 'বাংলা',
    searchPlaceholder: 'একটি পণ্য খুঁজুন',
    productName: 'পণ্যের নাম',
    countryOfOrigin: 'উৎপত্তির দেশ',
    alternatives: 'বিকল্পসমূহ',
    noAlternatives: 'এখনো কোনো বিকল্প উপলব্ধ নেই',
    loading: 'লোড হচ্ছে...',
    error: 'ডেটা লোড করতে সমস্যা হয়েছে',
    pageNotFound: 'উপস! পেজটি পাওয়া যায়নি',
    backHome: 'হোমে ফিরুন',
    introText: 'ইসরায়েলি এবং আমেরিকান পণ্যের নৈতিক বিকল্প আবিষ্কারে সহায়তা করার জন্য একটি প্ল্যাটফর্ম।',
    copyright: 'ইয়াকীন বয়কট। সর্বস্বত্ব সংরক্ষিত।',
    whyBoycott: 'কেন বয়কট?',
    products: 'পণ্যসমূহ',
    backToProducts: 'পণ্যসমূহে ফিরে যান',
    whyBoycottSubtitle1: 'আমরা কেন বয়কট করি?',
    whyBoycottParagraph1:
      'বয়কট হল আমাদের ভোক্তা ক্ষমতা ব্যবহার করে অন্যায়কারী প্রতিষ্ঠানগুলিকে তাদের নীতি পরিবর্তন করতে বাধ্য করার একটি শক্তিশালী উপায়।',
    whyBoycottSubtitle2: 'এর প্রভাব কী?',
    whyBoycottParagraph2:
      'সম্মিলিত ক্রেতাদের বয়কট সংস্থাগুলির আর্থিক স্বাস্থ্যকে প্রভাবিত করতে পারে এবং কোম্পানির আচরণে পরিবর্তন আনতে পারে।',
    whyBoycottSubtitle3: 'কিভাবে বয়কট কাজ করে?',
    whyBoycottParagraph3:
      'আমরা কোম্পানিগুলির পণ্য ও পরিষেবা না কিনে এবং নৈতিক বিকল্পগুলিকে সমর্থন করে আমাদের অর্থনৈতিক ক্ষমতার কণ্ঠস্বর দেই।',
    whyBoycottSubtitle4: 'কেন এই বয়কট?',
    whyBoycottParagraph4:
      'যারা অন্যায়, নিপীড়ন এবং মানবাধিকার লঙ্ঘনে সহায়তা করে তাদের থেকে অর্থনৈতিক সমর্থন ফিরিয়ে নেওয়া আমাদের নৈতিক দায়িত্ব।',
    allCategories: 'সকল বিভাগ',
    productsCount: 'পণ্য',
  },
  en: {
    siteName: 'Yaqiin Boycott',
    siteSlogan: 'Ethical Boycott, Supporting Our Brothers',
    menuTitle: 'Menu',
    toggleLanguage: 'العربية',
    searchPlaceholder: 'Search for a product',
    productName: 'Product Name',
    countryOfOrigin: 'Country of Origin',
    alternatives: 'Alternatives',
    noAlternatives: 'No alternatives available yet',
    loading: 'Loading...',
    error: 'Error loading data',
    pageNotFound: 'Oops! Page not found',
    backHome: 'Back Home',
    introText: 'A platform to help you discover ethical alternatives to Israeli and US products.',
    copyright: 'Yaqiin Boycott. All rights reserved.',
    whyBoycott: 'Why Boycott?',
    products: 'Products',
    backToProducts: 'Back to Products',
    whyBoycottSubtitle1: 'Why Do We Boycott?',
    whyBoycottParagraph1:
      'Boycotting is a powerful way to use our consumer power to force abusive institutions to change their policies.',
    whyBoycottSubtitle2: 'What is the Impact?',
    whyBoycottParagraph2:
      'Collective consumer boycotts can affect the financial health of corporations and bring about change in corporate behavior.',
    whyBoycottSubtitle3: 'How Does Boycotting Work?',
    whyBoycottParagraph3:
      "We exercise our economic power by not purchasing companies' products and services and supporting ethical alternatives.",
    whyBoycottSubtitle4: 'Why This Boycott?',
    whyBoycottParagraph4:
      'It is our moral duty to withdraw economic support from those who aid injustice, oppression, and human rights violations.',
    allCategories: 'All Categories',
    productsCount: 'products',
  },
  es: {
    siteName: 'Yaqiin Boicot',
    siteSlogan: 'Boicot Ético, Apoyando a Nuestros Hermanos',
    menuTitle: 'Menú',
    toggleLanguage: 'Cambiar Idioma',
    searchPlaceholder: 'Buscar un producto',
    productName: 'Nombre del Producto',
    countryOfOrigin: 'País de Origen',
    alternatives: 'Alternativas',
    noAlternatives: 'No hay alternativas disponibles aún',
    loading: 'Cargando...',
    error: 'Error al cargar datos',
    pageNotFound: '¡Ups! Página no encontrada',
    backHome: 'Volver al Inicio',
    introText: 'Una plataforma para ayudarte a descubrir alternativas éticas a productos israelíes y estadounidenses.',
    copyright: 'Yaqiin Boicot. Todos los derechos reservados.',
    whyBoycott: '¿Por qué Boicotear?',
    products: 'Productos',
    backToProducts: 'Volver a Productos',
    whyBoycottSubtitle1: '¿Por Qué Boicoteamos?',
    whyBoycottParagraph1:
      'El boicot es una forma poderosa de usar nuestro poder como consumidores para obligar a las instituciones abusivas a cambiar sus políticas.',
    whyBoycottSubtitle2: '¿Cuál es el Impacto?',
    whyBoycottParagraph2:
      'Los boicots colectivos de consumidores pueden afectar la salud financiera de las corporaciones y provocar cambios en el comportamiento corporativo.',
    whyBoycottSubtitle3: '¿Cómo Funciona el Boicot?',
    whyBoycottParagraph3:
      'Ejercemos nuestro poder económico al no comprar productos y servicios de empresas y apoyar alternativas éticas.',
    whyBoycottSubtitle4: '¿Por Qué Este Boicot?',
    whyBoycottParagraph4:
      'Es nuestro deber moral retirar el apoyo económico de aquellos que ayudan a la injusticia, la opresión y las violaciones de derechos humanos.',
    allCategories: 'Todas las Categorías',
    productsCount: 'productos',
  },
  fr: {
    siteName: 'Yaqiin Boycott',
    siteSlogan: 'Boycott Éthique, Soutenir Nos Frères',
    menuTitle: 'Menu',
    toggleLanguage: 'Changer de langue',
    searchPlaceholder: 'Rechercher un produit',
    productName: 'Nom du Produit',
    countryOfOrigin: "Pays d'Origine",
    alternatives: 'Alternatives',
    noAlternatives: 'Aucune alternative disponible pour le moment',
    loading: 'Chargement...',
    error: 'Erreur lors du chargement des données',
    pageNotFound: 'Oups ! Page non trouvée',
    backHome: "Retour à l'Accueil",
    introText:
      'Une plateforme pour vous aider à découvrir des alternatives éthiques aux produits israéliens et américains.',
    copyright: 'Yaqiin Boycott. Tous droits réservés.',
    whyBoycott: 'Pourquoi Boycotter?',
    products: 'Produits',
    backToProducts: 'Retour aux Produits',
    whyBoycottSubtitle1: 'Pourquoi Boycottons-nous?',
    whyBoycottParagraph1:
      "Le boycott est un moyen puissant d'utiliser notre pouvoir de consommateurs pour forcer les institutions abusives à changer leurs politiques.",
    whyBoycottSubtitle2: "Quel est l'Impact?",
    whyBoycottParagraph2:
      'Les boycotts collectifs de consommateurs peuvent affecter la santé financière des entreprises et entraîner un changement dans le comportement des entreprises.',
    whyBoycottSubtitle3: 'Comment Fonctionne le Boycott?',
    whyBoycottParagraph3:
      "Nous exerçons notre pouvoir économique en n'achetant pas les produits et services des entreprises et en soutenant des alternatives éthiques.",
    whyBoycottSubtitle4: 'Pourquoi Ce Boycott?',
    whyBoycottParagraph4:
      "Il est de notre devoir moral de retirer le soutien économique à ceux qui aident l'injustice, l'oppression et les violations des droits humains.",
    allCategories: 'Toutes les Catégories',
    productsCount: 'produits',
  },
  id: {
    siteName: 'Yaqiin Boikot',
    siteSlogan: 'Boikot Etis, Mendukung Saudara-saudara Kita',
    menuTitle: 'Menu',
    toggleLanguage: 'Bahasa Indonesia',
    searchPlaceholder: 'Cari produk',
    productName: 'Nama Produk',
    countryOfOrigin: 'Negara Asal',
    alternatives: 'Alternatif',
    noAlternatives: 'Belum ada alternatif tersedia',
    loading: 'Memuat...',
    error: 'Kesalahan memuat data',
    pageNotFound: 'Ups! Halaman tidak ditemukan',
    backHome: 'Kembali ke Beranda',
    introText: 'Platform untuk membantu Anda menemukan alternatif etis untuk produk Israel dan AS.',
    copyright: 'Yaqiin Boikot. Hak cipta dilindungi.',
    whyBoycott: 'Mengapa Boikot?',
    products: 'Produk',
    backToProducts: 'Kembali ke Produk',
    whyBoycottSubtitle1: 'Mengapa Kita Boikot?',
    whyBoycottParagraph1:
      'Boikot adalah cara yang kuat untuk menggunakan kekuatan konsumen kita untuk memaksa institusi yang melakukan penyalahgunaan untuk mengubah kebijakan mereka.',
    whyBoycottSubtitle2: 'Apa Dampaknya?',
    whyBoycottParagraph2:
      'Boikot konsumen kolektif dapat mempengaruhi kesehatan keuangan perusahaan dan membawa perubahan dalam perilaku perusahaan.',
    whyBoycottSubtitle3: 'Bagaimana Boikot Bekerja?',
    whyBoycottParagraph3:
      'Kita menggunakan kekuatan ekonomi kita dengan tidak membeli produk dan layanan perusahaan dan mendukung alternatif etis.',
    whyBoycottSubtitle4: 'Mengapa Boikot Ini?',
    whyBoycottParagraph4:
      'Adalah kewajiban moral kita untuk menarik dukungan ekonomi dari mereka yang membantu ketidakadilan, penindasan, dan pelanggaran hak asasi manusia.',
    allCategories: 'Semua Kategori',
    productsCount: 'produk',
  },
  tr: {
    siteName: 'Yaqiin Boykot',
    siteSlogan: 'Etik Boykot, Kardeşlerimize Destek',
    menuTitle: 'Menü',
    toggleLanguage: 'Türkçe',
    searchPlaceholder: 'Bir ürün ara',
    productName: 'Ürün Adı',
    countryOfOrigin: 'Menşe Ülke',
    alternatives: 'Alternatifler',
    noAlternatives: 'Henüz alternatif bulunmamaktadır',
    loading: 'Yükleniyor...',
    error: 'Veri yüklenirken hata oluştu',
    pageNotFound: 'Ups! Sayfa bulunamadı',
    backHome: 'Ana Sayfaya Dön',
    introText: 'İsrail ve Amerikan ürünlerine etik alternatifler bulmanıza yardımcı olacak bir platform.',
    copyright: 'Yaqiin Boykot. Tüm hakları saklıdır.',
    whyBoycott: 'Neden Boykot?',
    products: 'Ürünler',
    backToProducts: 'Ürünlere Dön',
    whyBoycottSubtitle1: 'Neden Boykot Ediyoruz?',
    whyBoycottParagraph1:
      'Boykot, tüketici gücümüzü kullanarak istismarcı kurumları politikalarını değiştirmeye zorlamanın güçlü bir yoludur.',
    whyBoycottSubtitle2: 'Etkisi Nedir?',
    whyBoycottParagraph2:
      'Toplu tüketici boykotları, şirketlerin mali sağlığını etkileyebilir ve kurumsal davranışta değişiklik getirebilir.',
    whyBoycottSubtitle3: 'Boykot Nasıl Çalışır?',
    whyBoycottParagraph3:
      'Şirketlerin ürün ve hizmetlerini satın almayarak ve etik alternatifleri destekleyerek ekonomik gücümüzü kullanırız.',
    whyBoycottSubtitle4: 'Neden Bu Boykot?',
    whyBoycottParagraph4:
      'Adaletsizlik, baskı ve insan hakları ihlallerine yardım edenlere ekonomik destek vermemek ahlaki görevimizdir.',
    allCategories: 'Tüm Kategoriler',
    productsCount: 'ürün',
  },
  ur: {
    siteName: 'یقین بائیکاٹ',
    siteSlogan: 'اخلاقی بائیکاٹ، ہمارے بھائیوں کی حمایت',
    menuTitle: 'فہرست',
    toggleLanguage: 'اردو',
    searchPlaceholder: 'مصنوعات تلاش کریں',
    productName: 'مصنوعات کا نام',
    countryOfOrigin: 'اصل ملک',
    alternatives: 'متبادلات',
    noAlternatives: 'ابھی تک کوئی متبادل دستیاب نہیں',
    loading: 'لوڈ ہو رہا ہے...',
    error: 'ڈیٹا لوڈ کرنے میں خرابی',
    pageNotFound: 'افسوس! صفحہ نہیں ملا',
    backHome: 'واپس ہوم پیج',
    introText: 'اسرائیلی اور امریکی مصنوعات کے اخلاقی متبادل تلاش کرنے میں مدد کے لیے ایک پلیٹ فارم۔',
    copyright: 'یقین بائیکاٹ۔ جملہ حقوق محفوظ ہیں۔',
    whyBoycott: 'بائیکاٹ کیوں؟',
    products: 'مصنوعات',
    backToProducts: 'مصنوعات پر واپس جائیں',
    whyBoycottSubtitle1: 'ہم بائیکاٹ کیوں کرتے ہیں؟',
    whyBoycottParagraph1:
      'بائیکاٹ ہماری صارفین کی طاقت کا استعمال کرکے ظالم اداروں کو اپنی پالیسیاں تبدیل کرنے پر مجبور کرنے کا ایک طاقتور طریقہ ہے۔',
    whyBoycottSubtitle2: 'اس کا کیا اثر ہے؟',
    whyBoycottParagraph2:
      'صارفین کے اجتماعی بائیکاٹ کارپوریشنوں کی مالی صحت کو متاثر کر سکتے ہیں اور کارپوریٹ رویے میں تبدیلی لا سکتے ہیں۔',
    whyBoycottSubtitle3: 'بائیکاٹ کیسے کام کرتا ہے؟',
    whyBoycottParagraph3:
      'ہم کمپنیوں کی مصنوعات اور خدمات نہ خرید کر اور اخلاقی متبادلات کی حمایت کرکے اپنی اقتصادی طاقت کا استعمال کرتے ہیں۔',
    whyBoycottSubtitle4: 'یہ بائیکاٹ کیوں؟',
    whyBoycottParagraph4:
      'ان لوگوں سے اقتصادی حمایت واپس لینا ہماری اخلاقی ذمہ داری ہے جو ظلم، استحصال، اور انسانی حقوق کی خلاف ورزیوں میں مدد کرتے ہیں۔',
    allCategories: 'تمام زمرے',
    productsCount: 'مصنوعات',
  },
  ru: {
    siteName: 'Якин Бойкот',
    siteSlogan: 'Этический бойкот, поддержка наших братьев',
    menuTitle: 'Меню',
    toggleLanguage: 'Русский',
    searchPlaceholder: 'Поиск продукта',
    productName: 'Название продукта',
    countryOfOrigin: 'Страна происхождения',
    alternatives: 'Альтернативы',
    noAlternatives: 'Пока нет доступных альтернатив',
    loading: 'Загрузка...',
    error: 'Ошибка загрузки данных',
    pageNotFound: 'Упс! Страница не найдена',
    backHome: 'Вернуться на главную',
    introText: 'Платформа, помогающая вам находить этические альтернативы израильским и американским продуктам.',
    copyright: 'Якин Бойкот. Все права защищены.',
    whyBoycott: 'Почему бойкот?',
    products: 'Продукты',
    backToProducts: 'Назад к продуктам',
    whyBoycottSubtitle1: 'Почему мы бойкотируем?',
    whyBoycottParagraph1:
      'Бойкот — это мощный способ использовать нашу потребительскую силу, чтобы заставить злоупотребляющие организации менять свою политику.',
    whyBoycottSubtitle2: 'Какой эффект?',
    whyBoycottParagraph2:
      'Коллективный бойкот потребителей может повлиять на финансовое состояние компаний и изменить их поведение.',
    whyBoycottSubtitle3: 'Как работает бойкот?',
    whyBoycottParagraph3:
      'Мы проявляем нашу экономическую силу, не покупая товары и услуги компаний и поддерживая этические альтернативы.',
    whyBoycottSubtitle4: 'Почему этот бойкот?',
    whyBoycottParagraph4:
      'Наш моральный долг — лишить экономической поддержки тех, кто способствует несправедливости, угнетению и нарушению прав человека.',
    allCategories: 'Все категории',
    productsCount: 'продуктов',
  },
  zh: {
    siteName: 'Yaqiin 抵制',
    siteSlogan: '道德抵制，支持我们的兄弟',
    menuTitle: '菜单',
    toggleLanguage: '中文',
    searchPlaceholder: '搜索产品',
    productName: '产品名称',
    countryOfOrigin: '原产国',
    alternatives: '替代品',
    noAlternatives: '暂无可用替代品',
    loading: '加载中...',
    error: '数据加载出错',
    pageNotFound: '哎呀！页面未找到',
    backHome: '返回首页',
    introText: '一个帮助您发现以色列和美国产品道德替代品的平台。',
    copyright: 'Yaqiin 抵制。保留所有权利。',
    whyBoycott: '为什么抵制？',
    products: '产品',
    backToProducts: '返回产品',
    whyBoycottSubtitle1: '我们为什么要抵制？',
    whyBoycottParagraph1:
      '抵制是一种强有力的方式，利用我们的消费者力量迫使滥用权力的机构改变其政策。',
    whyBoycottSubtitle2: '有什么影响？',
    whyBoycottParagraph2:
      '集体消费者抵制可以影响公司的财务状况，并改变企业行为。',
    whyBoycottSubtitle3: '抵制如何运作？',
    whyBoycottParagraph3:
      '我们通过不购买公司的产品和服务并支持道德替代品来行使我们的经济力量。',
    whyBoycottSubtitle4: '为什么要发起这个抵制？',
    whyBoycottParagraph4:
      '道义上我们有责任撤回对助长不公、压迫和侵犯人权者的经济支持。',
    allCategories: '所有类别',
    productsCount: '产品',
  },
};

export type TranslationKey = keyof (typeof translations)['ar'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  isLoading: boolean;
}
