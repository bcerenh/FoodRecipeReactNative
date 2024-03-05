import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
  new Category('c1', 'İtalyan', 'pink'),
  new Category('c2', 'Aperatif', 'darkpink'),
  new Category('c3', 'Hamburger', 'brown'),
  new Category('c4', 'Alman', 'yellow'),
  new Category('c5', 'Diyet', 'blue'),
  new Category('c6', 'Egzotik', 'green'),
  new Category('c7', 'Kahvaltı', 'lightblue'),
  new Category('c8', 'Hint', 'lightgreen'),
];

export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2'],
    'Domates soslu Spagetti',
    'normal kalorili',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    [
      '4 Domates',
      '1 Çay Kaşığı Zeytinyağı',
      '2 Soğan',
      '200g Spaghetti',
      'Baharatlar',
      'Peynir',
    ],
    ['Domateslerin kabuklarını soyup rendeliyoruz. Soğanı ve sarımsakları ince ince yemeklik doğruyoruz. Zeytinyağını sos tenceresine alıyoruz soğanı, ve sarımsakları ekleyerek orta ateşte soğanlar hafifçe pembeleşinceye kadar kavurun. Salçayı, domates püresini, tuz kimyon ve karabiberi tencereye ilave edin. Sos koyulaşıncaya kadar karıştırarak pişirin. Makarnayı 1, 5 litre suda tuzunu ekleyerek haşlayın. Haşlanan makarnayı süzüp hazırladığınız sos tenceresine aktarın ve karıştırın. İsterseniz üzerine bir demet maydanoz ya da kasar peyniri ile de servis yapabilirsiniz afiyet olsun :)']
  ),
  new Food(
    'm2',
    ['c2'],
    'Tost',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin'],
    ['İkişer tost ekmeğinin üzerine ikişer kaşar peyniri dilimini ve dörder sucuğu yerleştirin ve üstlerini kalan ekmeklerle kapatın. Önceden ısıtmaya başladığınız tost makinesine yerleştirin. Pişerken üzerine tereyağı sürün ve domatesle servis edin.']
  ),
  new Food(
    'm3',
    ['c3'],
    'Hamburger', 
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    [
      '150 gr et',
      '2 Dilim Domates',
      '1 Dilim Chedar Peyniri',
      '1 Dilim Soğan',
      'Ketçap',
      'Mayonez',
    ],
    ['Hamburger Ekmeğini ikiye bölün ve önce halka şeklinde doğradınız soğanları koyun, üzerine köfteleri yerleştirin, ben iki köfte kullandım cheddar peyniri daha çabuk erisin diye ,köftelerin arasına koyun.Daha sonra marul ketçap ve mayonezi ekleyip ekmeği kapatın.Ben malzemeler dökülüp bozulmasın diye bir çubuk batırdım.Yanına patates kızartması çok rahat bir akşam yemeği oldu,afiyet olsun 😊😊']
  ),
  new Food(
    'm4',
    ['c4'],
    'Tavuk Sote',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    [
      '200 gr Tavuk',
      'Domates',
      'Biber',
      'Fesleğen',
      'Limon',
      'Zeytinyağı',
      'Tuz',
    ],
    ['Tavuk etini kuşbaşı doğrayın.Soğanları yemeklik, biberleri julyen doğrayın, domatesleri de küp küp doğrayın.Kısık ateşte tavukları arada karıştırarak kavurun.Suyunu biraz çektikten sonra soğanları ve ince kesilmiş sarımsağı ekleyin.1-2 dk kavurduktan sonra biberleri ilave edin.Biberler de sotelenince domatesi, salçayı, baharatları ve tuzu ekleyip pişirmeye devam edin.Son olarak 1 bardak suyu ekleyin ve etler pişene kadar kapağı kapalı bir şekilde pişirin.']
  ),
  new Food(
    'm5',
    ['c2', 'c5'],
    'Balıklı Salata', 
    'az kalorili',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    [
      'Somon Balığı',
      'Domates',
      'Limon',
      'Salata Sosu',
      'Taze Soğan',
      'Hardal',
      'Zeytin Yağı',
      'Tuz',
    ],
    ['textxtxxt']
  ),
  new Food(
    'm6',
    ['c6'],
    'Portakallı Muhallebi',
    'çok kalorili',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    [
      'Portakal Suyu',
      '200gr Şeker',
      '100gr Yoğurt',
      '200g Krem Şanti',
      'Portakal Dilimleri',
    ],
    ['Portakal suyu nişasta ve tozşekeri tencereye alalım.Muhallebi kıvamına gelene kadar pişirelim (Kalıba önce soğuk su dökelim ve çalkalayalım. Suyu boşaltalım Bunu yapmamızın nedeni muhallebinin kalıptan kolayca çıkması yapışmaması için)Portakallı harcı kalıba dökelim. Soğuması için bir kenara alalım.Sütü tencereye alalım. Şeker nişasta un ilave edip çırpalım. Ocağa alalım. Kıvamı koyulaşınca kadar pişirelim. Vanilya ekleyip ocaktan alalım.Harcı portakallı kalıbın üzerine dökelim. Mümkünse 1 gece buzdolabında dinlendirelim.Kalıbı servis tabağına ters çevirelim. Üzerine çilek fıstık ile süsleyelim. Servis yapalım.Elinizin altında ne varsa o şekildede süsleyebilirsiniz. Deneyecek olanlara şimdiden afiyet olsun.']
  ),
  new Food(
    'm7',
    ['c7'],
    'Pankek',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    [
      '3 yemek kaşığı un',
      '1 Tatlı Kaşığı Tuz',
      '1 Tatlı Kaşığı Şeker',
      '2 bardak süt',
      '2 Yumurta',
      '2 Yemek Kaşığı Yağ',
    ],
    ['Pankek yapmak için öncelikle yumurtalar ve şekeri uygun bir karıştırma kabına alarak iyice çırpalım.Süt, un, kabartma tozu, vanilya ilave çırpma teli ile çırpalım. Siz dilerseniz mikser ile de çırpabilirsiniz. Kek kıvamından biraz daha koyu olacak şekilde hamur hazırlayalım.Teflon ya da yapışmaz bir tavaya az sıvı yağı dökelim, fırça yardımı ile her tarafına dağıtalım. Sıvı yağı az kullanmak pankek yapmanın püf noktalarındandır. Dilerseniz peçete ile de tavaya dağıtabilirsiniz.1 büyük kaşık hamur dökülerek hamurun kendi kendine yayılmasını bekleyelim.Üzeri göz göz olmaya başlayan pankeklerimizi spatula yardımı ile ters çevirelim. Diğer taraflarını da pişirelim. Her iki tarafı da pişen pankeklerimizi servis tabağına alalım Üzerine  pudra şekeri serpilerek zevkinize göre muz, kivi, çilek, çikolata, bal, sürülebilir çikolata, reçel ile servis edebilirsiniz. Afiyet olsun.']
  ),
  new Food(
    'm8',
    ['c8'],
    'Tavuklu Hint Yemeği',
    'normal kalorili',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    [
      '6 Tavuk Butu',
      '2 Soğan',
      '4 Diş Sarımsak',
      '1 Çay Kaşığı Zerdeçal',
      '1 litre Süt',
      'Yarım Litre Krem Şanti',
      'Tuz',
    ],
    ['textxtxxt']
  ),

  new Food(
    'm10',
    ['c2', 'c5'],
    'Çilekli Yaz Salatası',
    'az kalorili',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    ['Çilek', 'Domates', 'Salatalık', 'Tuz', 'Salata Sosu', 'Zeytin Yağı'],
    ['textxtxxt']
  ),
];
