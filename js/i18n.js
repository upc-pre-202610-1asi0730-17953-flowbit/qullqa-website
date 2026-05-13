/* ============================================================
   QULLQA — i18n (Internationalization)
   Languages: Español (es) | English (en)
   ============================================================ */

const i18n = (() => {
  const translations = {
    es: {
      /* ── Navbar ── */
      'nav.home':     'Inicio',
      'nav.features': 'Características',
      'nav.pricing':  'Precios',
      'nav.about':    'Nosotros',
      'nav.login':    'Iniciar sesión',
      'nav.cta':      'Comenzar gratis',

      /* ── Hero ── */
      'hero.badge':          'Ahora disponible en Perú · Flowbit',
      'hero.title.line1':    'Gestión inteligente para tu',
      'hero.title.highlight':'bodega o farmacia',
      'hero.desc':           'Qullqa digitaliza tu inventario, controla tus ventas y monitorea tus entregas con IoT en tiempo real. Todo en una plataforma simple y accesible.',
      'hero.cta.primary':    'Comenzar gratis',
      'hero.cta.secondary':  'Ver demo',
      'hero.stat1.val':      '535K+',
      'hero.stat1.lbl':      'Bodegas en Perú',
      'hero.stat2.val':      '−20%',
      'hero.stat2.lbl':      'Pérdidas por vencidos',
      'hero.stat3.val':      '<10s',
      'hero.stat3.lbl':      'Registro de venta',

      /* ── Stats bar ── */
      'stats.s1.val': '535K+',  'stats.s1.lbl': 'Bodegas en Perú',
      'stats.s2.val': '40%',    'stats.s2.lbl': 'MYPEs sin sistema digital',
      'stats.s3.val': '−20%',   'stats.s3.lbl': 'Pérdidas reducibles',
      'stats.s4.val': '<10s',   'stats.s4.lbl': 'Para registrar una venta',

      /* ── Segments ── */
      'seg.label':         '¿Para quién es Qullqa?',
      'seg.bodegas.name':  'Bodegueros independientes',
      'seg.bodegas.desc':  'Controla tu stock, registra ventas y conoce tus ganancias reales sin complicaciones técnicas.',
      'seg.farmacias.name':'Farmacias y boticas',
      'seg.farmacias.desc':'Alertas de vencimiento, control de lotes y trazabilidad para garantizar la seguridad de tus medicamentos.',

      /* ── Features (index) ── */
      'feat.tag':      'Servicios',
      'feat.title':    'Todo lo que necesita tu negocio',
      'feat.subtitle': 'Funcionalidades diseñadas para hacer tu día a día más eficiente, sin requerir conocimientos técnicos.',
      'feat.f1.name':  'Control de Inventario',
      'feat.f1.desc':  'Registra entradas y salidas de productos. Alertas automáticas cuando el stock está bajo.',
      'feat.f1.tag':   'Gestión de stock',
      'feat.f2.name':  'Alertas de Vencimiento',
      'feat.f2.desc':  'Notificaciones proactivas 30, 60 y 90 días antes de que un producto caduque.',
      'feat.f2.tag':   'Prevención de pérdidas',
      'feat.f3.name':  'Seguimiento IoT',
      'feat.f3.desc':  'Monitorea entregas en tiempo real con sensores. Mayor seguridad en tu cadena de suministro.',
      'feat.f3.tag':   'Tecnología conectada',
      'feat.f4.name':  'Venta POS',
      'feat.f4.desc':  'Registra ventas en menos de 10 segundos con nuestra interfaz táctil. Compatible con boletas.',
      'feat.f4.tag':   'Punto de venta rápido',
      'feat.f5.name':  'Reportes Financieros',
      'feat.f5.desc':  'Dashboards con gráficos automáticos de ingresos vs egresos mensuales para tomar mejores decisiones.',
      'feat.f5.tag':   'Inteligencia de negocio',
      'feat.f6.name':  'Gestión de Proveedores',
      'feat.f6.desc':  'Administra tus contactos de abastecimiento con datos de RUC, contacto y categorías.',
      'feat.f6.tag':   'Control de suministro',

      /* ── Portfolio ── */
      'port.tag':      'Portafolio',
      'port.title':    'La plataforma en acción',
      'port.subtitle': 'Explora las vistas principales de Qullqa. Diseñado para ser simple, rápido y de alto contraste.',
      'port.tab1':     'Todas las vistas',
      'port.tab2':     'Bodegas',
      'port.tab3':     'Farmacias',
      'port.p1.name':  'Dashboard principal',
      'port.p1.desc':  'Resumen visual de inventario, movimientos y alertas',
      'port.p2.name':  'Movimientos de Inventario',
      'port.p2.desc':  'Historial de entradas, salidas y ajustes en tiempo real',
      'port.p3.name':  'Gestión de Proveedores',
      'port.p3.desc':  'Administra contactos, categorías y datos de abastecimiento',
      'port.p4.name':  'Sistema de Alertas',
      'port.p4.desc':  'Notificaciones de stock bajo y vencimientos próximos',

      /* ── CTA Banner ── */
      'cta.title':    'Empieza hoy de forma gratuita',
      'cta.sub':      'Sin tarjeta de crédito. Prueba Qullqa con hasta 100 productos sin costo alguno.',
      'cta.btn1':     'Crear mi cuenta',
      'cta.btn2':     'Ver demo',

      /* ── Features page ── */
      'fp.tag':      'Características',
      'fp.title':    'Todo lo que necesitas, en un solo lugar',
      'fp.sub':      'No eres solo un número. Tu negocio merece un ecosistema completo de gestión.',
      'fp.f1.name':  'Control de Inventario con IA',
      'fp.f1.desc':  'Sistema inteligente que registra entradas y salidas, detecta patrones de consumo y predice cuándo necesitarás reponer stock antes de que se agote.',
      'fp.f1.tag':   'Machine Learning',
      'fp.f2.name':  'Dashboard de Métricas',
      'fp.f2.desc':  'Visualiza el rendimiento de tu negocio semana a semana. Compara periodos, analiza productos más vendidos y toma decisiones basadas en datos reales.',
      'fp.f2.tag':   'Seguimiento continuo',
      'fp.f3.name':  'Alertas Personalizadas',
      'fp.f3.desc':  'Vencimientos, stock bajo, proveedores pendientes. Tu sistema de alertas es único, adaptado al tipo de negocio que gestionas.',
      'fp.f3.tag':   'Hiperpersonalización',
      'fp.f4.name':  'Rastreo IoT de Entregas',
      'fp.f4.desc':  'Encuentra exactamente el estado de tus pedidos en tránsito. Sensores, estados y evidencia fotográfica para cada entrega de proveedor.',
      'fp.f4.tag':   'Ecosistema conectado',
      'fp.f5.name':  'Reportes para SUNAT y DIGEMID',
      'fp.f5.desc':  'Cuando el sistema detecta inconsistencias, genera automáticamente los reportes en el formato requerido por las autoridades peruanas.',
      'fp.f5.tag':   'Red de cumplimiento legal',
      'fp.f6.name':  'Recordatorios y Notificaciones',
      'fp.f6.desc':  'El hábito es el 90% del resultado. Qullqa te recuerda revisar tu inventario, renovar contratos con proveedores y completar tus reportes.',
      'fp.f6.tag':   'Adherencia + hábito',
      'how.tag':     'Cómo funciona',
      'how.title':   'Empieza en minutos',
      'how.sub':     'Sin instalaciones complicadas. Sin capacitación técnica. Solo regístrate y comienza.',
      'how.s1.title':'Crea tu cuenta',
      'how.s1.desc': 'Regístrate en 30 segundos. Elige tu tipo de negocio y plan.',
      'how.s2.title':'Registra tus productos',
      'how.s2.desc': 'Agrega tu inventario inicial. El sistema detecta patrones desde el primer día.',
      'how.s3.title':'Recibe alertas',
      'how.s3.desc': 'Qullqa te notifica sobre stock bajo, vencimientos y entregas automáticamente.',
      'how.s4.title':'Toma mejores decisiones',
      'how.s4.desc': 'Usa los dashboards y reportes para optimizar tu negocio con datos reales.',

      /* ── Pricing page ── */
      'pr.tag':       'Planes',
      'pr.title':     'Elige el plan que se adapta a tu negocio',
      'pr.sub':       'Desde funciones básicas gratuitas hasta herramientas avanzadas con IoT para crecer sin límites.',
      'pr.monthly':   'Mensual',
      'pr.annual':    'Anual',
      'pr.discount':  '30% descuento',
      'pr.p1.name':   'Gratuito',
      'pr.p1.price':  '0',
      'pr.p1.desc':   'Para bodegas que recién comienzan su digitalización.',
      'pr.p1.f1':     'Hasta 100 productos',
      'pr.p1.f2':     'Registro de ventas básico',
      'pr.p1.f3':     '1 usuario',
      'pr.p1.f4':     'Alertas de vencimiento',
      'pr.p1.f5':     'Módulo IoT',
      'pr.p1.f6':     'Reportes avanzados',
      'pr.p1.cta':    'Comenzar gratis',
      'pr.p2.name':   'Bodegas Pro',
      'pr.p2.price':  '29',
      'pr.p2.desc':   'Para bodegueros que quieren control total de su inventario.',
      'pr.p2.popular':'Más popular',
      'pr.p2.f1':     'Productos ilimitados',
      'pr.p2.f2':     'Venta POS completa',
      'pr.p2.f3':     'Hasta 5 usuarios',
      'pr.p2.f4':     'Alertas de vencimiento',
      'pr.p2.f5':     'Reportes financieros',
      'pr.p2.f6':     'Módulo IoT',
      'pr.p2.cta':    'Elegir plan',
      'pr.p3.name':   'Farmacias',
      'pr.p3.price':  '59',
      'pr.p3.desc':   'Control riguroso para farmacias con trazabilidad IoT.',
      'pr.p3.f1':     'Todo lo de Bodegas Pro',
      'pr.p3.f2':     'Control de lotes y series',
      'pr.p3.f3':     'Usuarios ilimitados',
      'pr.p3.f4':     'Integración IoT completa',
      'pr.p3.f5':     'Reportes SUNAT / DIGEMID',
      'pr.p3.f6':     'Soporte prioritario',
      'pr.p3.cta':    'Elegir plan',
      'pr.note':      'Sin tarjeta de crédito · Cancela cuando quieras · 14 días de garantía',
      'pr.faq.tag':   'FAQ',
      'pr.faq.title': 'Preguntas frecuentes',
      'pr.faq.q1':    '¿Puedo cambiar de plan en cualquier momento?',
      'pr.faq.a1':    'Sí. Puedes actualizar o degradar tu plan en cualquier momento desde la configuración de tu cuenta. Los cambios se aplican inmediatamente.',
      'pr.faq.q2':    '¿Qué pasa con mis datos si cancelo?',
      'pr.faq.a2':    'Tus datos se conservan durante 30 días después de la cancelación. Puedes exportar todo tu historial en cualquier momento.',
      'pr.faq.q3':    '¿El módulo IoT requiere hardware adicional?',
      'pr.faq.a3':    'El módulo IoT es compatible con sensores estándar de rastreo GPS. Te ayudamos a configurarlo en la primera semana de uso del plan Farmacias.',

      /* ── About page ── */
      'ab.hero.title': 'Transformando el comercio tradicional en Latinoamérica',
      'ab.hero.sub':   'Somos Flowbit, un equipo de estudiantes de Ingeniería de Software de la UPC comprometidos con la digitalización de bodegas y farmacias peruanas.',
      'ab.m1.title':   'Nuestra Misión',
      'ab.m1.text':    'Brindar soluciones tecnológicas accesibles e innovadoras que permitan a pequeños y medianos negocios optimizar sus procesos, mejorar su rentabilidad y tomar decisiones basadas en datos reales.',
      'ab.m2.title':   'Nuestra Visión',
      'ab.m2.text':    'Consolidarnos como la plataforma líder de gestión digital para MYPES en Latinoamérica, integrando IoT e inteligencia de datos para transformar sectores tradicionales.',
      'ab.val1':'Innovación','ab.val2':'Compromiso','ab.val3':'Accesibilidad',
      'ab.val4':'Responsabilidad','ab.val5':'Calidad',
      'ab.team.tag':   'Equipo',
      'ab.team.title': 'Los fundadores de Qullqa',
      'ab.team.sub':   'Cinco estudiantes de Ingeniería de Software unidos por un objetivo: digitalizar el comercio independiente peruano.',
      'ab.t1.name':    'Martin Asmat',
      'ab.t1.role':    'QA & Testing',
      'ab.t1.badge':   'u202416272',
      'ab.t2.name':    'Arturo Contreras',
      'ab.t2.role':    'Arquitectura & DDD',
      'ab.t2.badge':   'u202414802',
      'ab.t3.name':    'Fernando Güere',
      'ab.t3.role':    'IoT & Hardware',
      'ab.t3.badge':   'u202413169',
      'ab.t4.name':    'Aldo Huaman',
      'ab.t4.role':    'Frontend & UI/UX',
      'ab.t4.badge':   'u20231h067',
      'ab.t5.name':    'Adriana Ramos',
      'ab.t5.role':    'Backend & API',
      'ab.t5.badge':   'u202018427',
      'ab.s.tag':      'Startup',
      'ab.s.title':    'Sobre Flowbit',
      'ab.s.sub':      'Flowbit es una startup tecnológica enfocada en el desarrollo de soluciones digitales para optimizar la gestión de negocios tradicionales mediante software inteligente y tecnologías emergentes.',
      'ab.s.s1.val':   '535K+', 'ab.s.s1.lbl': 'Bodegas en Perú',
      'ab.s.s2.val':   '88%',   'ab.s.s2.lbl': 'Sin sistema digital',
      'ab.s.s3.val':   '2026',  'ab.s.s3.lbl': 'Año de fundación',
      'ab.s.s4.val':   'UPC',   'ab.s.s4.lbl': 'Universidad de origen',

      /* ── Contact ── */
      'ct.tag':     'Contacto',
      'ct.title':   '¿Tienes alguna pregunta?',
      'ct.sub':     'Estamos aquí para ayudarte a dar el primer paso hacia la digitalización de tu negocio.',
      'ct.loc.title':  'Ubicación',
      'ct.loc.val':    'Lima, Perú · Universidad Peruana de Ciencias Aplicadas (UPC)',
      'ct.mail.title': 'Correo electrónico',
      'ct.mail.val':   'contacto@qullqa.com',
      'ct.social.title':'Redes sociales',
      'ct.social.val': '@QullqaApp en TikTok · @flowbit en YouTube',
      'ct.demo.title': 'Demo disponible',
      'ct.demo.sub':   'Prueba Qullqa con datos reales antes de registrarte.',
      'ct.form.title': 'Envíanos un mensaje',
      'ct.form.name':  'Nombre completo',
      'ct.form.phone': 'Teléfono',
      'ct.form.email': 'Correo electrónico',
      'ct.form.type':  'Tipo de negocio',
      'ct.form.msg':   'Mensaje',
      'ct.form.ph.name':'Juan Pérez',
      'ct.form.ph.phone':'987 654 321',
      'ct.form.ph.email':'tu@correo.com',
      'ct.form.ph.msg':'¿Cómo podemos ayudarte?',
      'ct.form.submit':'Enviar mensaje',
      'ct.opt1':'Bodega / Minimarket',
      'ct.opt2':'Farmacia / Botica',
      'ct.opt3':'Otro',

      /* ── Footer ── */
      'ft.tagline':  'Gestión inteligente para negocios independientes en Perú.',
      'ft.product':  'Producto',
      'ft.company':  'Empresa',
      'ft.legal':    'Legal',
      'ft.terms':    'Términos',
      'ft.privacy':  'Privacidad',
      'ft.support':  'Soporte',
      'ft.copy':     '© 2026 Flowbit · UPC · Lima, Perú',
    },

    en: {
      /* ── Navbar ── */
      'nav.home':     'Home',
      'nav.features': 'Features',
      'nav.pricing':  'Pricing',
      'nav.about':    'About',
      'nav.login':    'Log in',
      'nav.cta':      'Start for free',

      /* ── Hero ── */
      'hero.badge':          'Now available in Peru · Flowbit',
      'hero.title.line1':    'Smart management for your',
      'hero.title.highlight':'store or pharmacy',
      'hero.desc':           'Qullqa digitizes your inventory, tracks your sales and monitors your deliveries with real-time IoT. All in one simple, accessible platform.',
      'hero.cta.primary':    'Start for free',
      'hero.cta.secondary':  'View demo',
      'hero.stat1.val':      '535K+',
      'hero.stat1.lbl':      'Stores in Peru',
      'hero.stat2.val':      '−20%',
      'hero.stat2.lbl':      'Reduction in expired losses',
      'hero.stat3.val':      '<10s',
      'hero.stat3.lbl':      'Sale registration',

      /* ── Stats bar ── */
      'stats.s1.val': '535K+',  'stats.s1.lbl': 'Stores in Peru',
      'stats.s2.val': '40%',    'stats.s2.lbl': 'MSMEs without digital systems',
      'stats.s3.val': '−20%',   'stats.s3.lbl': 'Reducible losses',
      'stats.s4.val': '<10s',   'stats.s4.lbl': 'To register a sale',

      /* ── Segments ── */
      'seg.label':         'Who is Qullqa for?',
      'seg.bodegas.name':  'Independent store owners',
      'seg.bodegas.desc':  'Control your stock, record sales and know your real earnings without technical complications.',
      'seg.farmacias.name':'Pharmacies & drugstores',
      'seg.farmacias.desc':'Expiration alerts, lot control and traceability to guarantee the safety of your medications.',

      /* ── Features (index) ── */
      'feat.tag':      'Services',
      'feat.title':    'Everything your business needs',
      'feat.subtitle': 'Features designed to make your daily operations more efficient, no technical knowledge required.',
      'feat.f1.name':  'Inventory Control',
      'feat.f1.desc':  'Record product entries and exits. Automatic alerts when stock is running low.',
      'feat.f1.tag':   'Stock management',
      'feat.f2.name':  'Expiration Alerts',
      'feat.f2.desc':  'Proactive notifications 30, 60 and 90 days before a product expires.',
      'feat.f2.tag':   'Loss prevention',
      'feat.f3.name':  'IoT Tracking',
      'feat.f3.desc':  'Monitor deliveries in real time with connected sensors. Greater supply chain security.',
      'feat.f3.tag':   'Connected technology',
      'feat.f4.name':  'POS Sales',
      'feat.f4.desc':  'Register sales in under 10 seconds with our touch interface. Receipt-compatible.',
      'feat.f4.tag':   'Fast point of sale',
      'feat.f5.name':  'Financial Reports',
      'feat.f5.desc':  'Dashboards with automatic income vs. expenses charts for better monthly decisions.',
      'feat.f5.tag':   'Business intelligence',
      'feat.f6.name':  'Supplier Management',
      'feat.f6.desc':  'Manage your supply contacts with tax ID, contact info and product categories.',
      'feat.f6.tag':   'Supply control',

      /* ── Portfolio ── */
      'port.tag':      'Portfolio',
      'port.title':    'The platform in action',
      'port.subtitle': 'Explore Qullqa\'s main views. Designed to be simple, fast and high-contrast.',
      'port.tab1':     'All views',
      'port.tab2':     'Stores',
      'port.tab3':     'Pharmacies',
      'port.p1.name':  'Main Dashboard',
      'port.p1.desc':  'Visual summary of inventory, movements and alerts',
      'port.p2.name':  'Inventory Movements',
      'port.p2.desc':  'Real-time history of entries, exits and adjustments',
      'port.p3.name':  'Supplier Management',
      'port.p3.desc':  'Manage contacts, categories and supply data',
      'port.p4.name':  'Alert System',
      'port.p4.desc':  'Low stock and upcoming expiration notifications',

      /* ── CTA Banner ── */
      'cta.title':    'Start today for free',
      'cta.sub':      'No credit card required. Try Qullqa with up to 100 products at no cost.',
      'cta.btn1':     'Create my account',
      'cta.btn2':     'View demo',

      /* ── Features page ── */
      'fp.tag':      'Features',
      'fp.title':    'Everything you need, in one place',
      'fp.sub':      'You are not just a number. Your business deserves a complete management ecosystem.',
      'fp.f1.name':  'AI-Powered Inventory Control',
      'fp.f1.desc':  'Smart system that records entries and exits, detects consumption patterns and predicts when you need to restock before running out.',
      'fp.f1.tag':   'Machine Learning',
      'fp.f2.name':  'Metrics Dashboard',
      'fp.f2.desc':  'Visualize your business performance week by week. Compare periods, analyze best sellers and make data-driven decisions.',
      'fp.f2.tag':   'Continuous tracking',
      'fp.f3.name':  'Custom Alerts',
      'fp.f3.desc':  'Expirations, low stock, pending suppliers. Your alert system is unique, adapted to the type of business you manage.',
      'fp.f3.tag':   'Hyper-personalization',
      'fp.f4.name':  'IoT Delivery Tracking',
      'fp.f4.desc':  'Find the exact status of your orders in transit. Sensors, statuses and photo evidence for every supplier delivery.',
      'fp.f4.tag':   'Connected ecosystem',
      'fp.f5.name':  'SUNAT & DIGEMID Reports',
      'fp.f5.desc':  'When the system detects inconsistencies, it automatically generates reports in the format required by Peruvian authorities.',
      'fp.f5.tag':   'Legal compliance network',
      'fp.f6.name':  'Reminders & Notifications',
      'fp.f6.desc':  'Habit is 90% of the result. Qullqa reminds you to review inventory, renew supplier contracts and complete your reports.',
      'fp.f6.tag':   'Adherence + habit',
      'how.tag':     'How it works',
      'how.title':   'Get started in minutes',
      'how.sub':     'No complicated installations. No technical training. Just sign up and start.',
      'how.s1.title':'Create your account',
      'how.s1.desc': 'Sign up in 30 seconds. Choose your business type and plan.',
      'how.s2.title':'Register your products',
      'how.s2.desc': 'Add your initial inventory. The system detects patterns from day one.',
      'how.s3.title':'Receive alerts',
      'how.s3.desc': 'Qullqa notifies you about low stock, expirations and deliveries automatically.',
      'how.s4.title':'Make better decisions',
      'how.s4.desc': 'Use dashboards and reports to optimize your business with real data.',

      /* ── Pricing page ── */
      'pr.tag':       'Pricing',
      'pr.title':     'Choose the plan that fits your business',
      'pr.sub':       'From free basic features to advanced IoT tools to grow without limits.',
      'pr.monthly':   'Monthly',
      'pr.annual':    'Annual',
      'pr.discount':  '30% off',
      'pr.p1.name':   'Free',
      'pr.p1.price':  '0',
      'pr.p1.desc':   'For stores just beginning their digital journey.',
      'pr.p1.f1':     'Up to 100 products',
      'pr.p1.f2':     'Basic sales recording',
      'pr.p1.f3':     '1 user',
      'pr.p1.f4':     'Expiration alerts',
      'pr.p1.f5':     'IoT module',
      'pr.p1.f6':     'Advanced reports',
      'pr.p1.cta':    'Start for free',
      'pr.p2.name':   'Stores Pro',
      'pr.p2.price':  '29',
      'pr.p2.desc':   'For store owners who want full inventory control.',
      'pr.p2.popular':'Most popular',
      'pr.p2.f1':     'Unlimited products',
      'pr.p2.f2':     'Full POS sales',
      'pr.p2.f3':     'Up to 5 users',
      'pr.p2.f4':     'Expiration alerts',
      'pr.p2.f5':     'Financial reports',
      'pr.p2.f6':     'IoT module',
      'pr.p2.cta':    'Choose plan',
      'pr.p3.name':   'Pharmacies',
      'pr.p3.price':  '59',
      'pr.p3.desc':   'Rigorous control for pharmacies with IoT traceability.',
      'pr.p3.f1':     'Everything in Stores Pro',
      'pr.p3.f2':     'Lot and serial control',
      'pr.p3.f3':     'Unlimited users',
      'pr.p3.f4':     'Full IoT integration',
      'pr.p3.f5':     'SUNAT / DIGEMID reports',
      'pr.p3.f6':     'Priority support',
      'pr.p3.cta':    'Choose plan',
      'pr.note':      'No credit card · Cancel anytime · 14-day guarantee',
      'pr.faq.tag':   'FAQ',
      'pr.faq.title': 'Frequently asked questions',
      'pr.faq.q1':    'Can I change plans at any time?',
      'pr.faq.a1':    'Yes. You can upgrade or downgrade your plan at any time from your account settings. Changes apply immediately.',
      'pr.faq.q2':    'What happens to my data if I cancel?',
      'pr.faq.a2':    'Your data is kept for 30 days after cancellation. You can export your entire history at any time.',
      'pr.faq.q3':    'Does the IoT module require additional hardware?',
      'pr.faq.a3':    'The IoT module is compatible with standard GPS tracking sensors. We help you set it up in the first week of using the Pharmacies plan.',

      /* ── About page ── */
      'ab.hero.title': 'Transforming traditional commerce in Latin America',
      'ab.hero.sub':   'We are Flowbit, a team of Software Engineering students from UPC committed to digitizing Peruvian stores and pharmacies.',
      'ab.m1.title':   'Our Mission',
      'ab.m1.text':    'To provide accessible, innovative technological solutions that allow small and medium businesses to optimize their processes, improve profitability and make data-driven decisions.',
      'ab.m2.title':   'Our Vision',
      'ab.m2.text':    'To become the leading digital management platform for MSMEs in Latin America, integrating IoT and data intelligence to transform traditional sectors.',
      'ab.val1':'Innovation','ab.val2':'Commitment','ab.val3':'Accessibility',
      'ab.val4':'Responsibility','ab.val5':'Quality',
      'ab.team.tag':   'Team',
      'ab.team.title': 'The founders of Qullqa',
      'ab.team.sub':   'Five Software Engineering students united by one goal: digitize independent Peruvian commerce.',
      'ab.t1.name':    'Martin Asmat',
      'ab.t1.role':    'QA & Testing',
      'ab.t1.badge':   'u202416272',
      'ab.t2.name':    'Arturo Contreras',
      'ab.t2.role':    'Architecture & DDD',
      'ab.t2.badge':   'u202414802',
      'ab.t3.name':    'Fernando Güere',
      'ab.t3.role':    'IoT & Hardware',
      'ab.t3.badge':   'u202413169',
      'ab.t4.name':    'Aldo Huaman',
      'ab.t4.role':    'Frontend & UI/UX',
      'ab.t4.badge':   'u20231h067',
      'ab.t5.name':    'Adriana Ramos',
      'ab.t5.role':    'Backend & API',
      'ab.t5.badge':   'u202018427',
      'ab.s.tag':      'Startup',
      'ab.s.title':    'About Flowbit',
      'ab.s.sub':      'Flowbit is a technology startup focused on developing digital solutions to optimize traditional business management through smart software and emerging technologies.',
      'ab.s.s1.val':   '535K+', 'ab.s.s1.lbl': 'Stores in Peru',
      'ab.s.s2.val':   '88%',   'ab.s.s2.lbl': 'Without digital systems',
      'ab.s.s3.val':   '2026',  'ab.s.s3.lbl': 'Founded',
      'ab.s.s4.val':   'UPC',   'ab.s.s4.lbl': 'University of origin',

      /* ── Contact ── */
      'ct.tag':     'Contact',
      'ct.title':   'Have a question?',
      'ct.sub':     'We are here to help you take the first step toward digitizing your business.',
      'ct.loc.title':  'Location',
      'ct.loc.val':    'Lima, Peru · Universidad Peruana de Ciencias Aplicadas (UPC)',
      'ct.mail.title': 'Email',
      'ct.mail.val':   'contacto@qullqa.com',
      'ct.social.title':'Social media',
      'ct.social.val': '@QullqaApp on TikTok · @flowbit on YouTube',
      'ct.demo.title': 'Demo available',
      'ct.demo.sub':   'Try Qullqa with real data before signing up.',
      'ct.form.title': 'Send us a message',
      'ct.form.name':  'Full name',
      'ct.form.phone': 'Phone',
      'ct.form.email': 'Email address',
      'ct.form.type':  'Business type',
      'ct.form.msg':   'Message',
      'ct.form.ph.name':'John Smith',
      'ct.form.ph.phone':'+51 987 654 321',
      'ct.form.ph.email':'you@email.com',
      'ct.form.ph.msg':'How can we help you?',
      'ct.form.submit':'Send message',
      'ct.opt1':'Store / Minimarket',
      'ct.opt2':'Pharmacy / Drugstore',
      'ct.opt3':'Other',

      /* ── Footer ── */
      'ft.tagline':  'Smart management for independent businesses in Peru.',
      'ft.product':  'Product',
      'ft.company':  'Company',
      'ft.legal':    'Legal',
      'ft.terms':    'Terms',
      'ft.privacy':  'Privacy',
      'ft.support':  'Support',
      'ft.copy':     '© 2026 Flowbit · UPC · Lima, Peru',
    }
  };

  let currentLang = localStorage.getItem('qullqa-lang') || 'es';

  function t(key) {
    return translations[currentLang][key] || translations['es'][key] || key;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = t(key);
    });
    document.documentElement.lang = currentLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('qullqa-lang', lang);
    applyTranslations();
  }

  function init() {
    applyTranslations();
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn) setLang(btn.getAttribute('data-lang'));
    });
  }

  return { t, setLang, init, get currentLang() { return currentLang; } };
})();

document.addEventListener('DOMContentLoaded', () => i18n.init());
