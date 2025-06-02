document.getElementById('menuToggle').addEventListener('click', function () {
    document.getElementById('menuList').classList.toggle('hidden');
});
$(function () {
    const images = [
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Modern%20MD271UL-915x420.jpg",
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20RTX%205070%20Ti-915x420.jpg",
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Printer-915x420.jpg",
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20Camera-915x420.jpg",
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20MSI%20Prestige%2016%20AI+-915x420.jpg",
      "https://www.goldonecomputer.com/image/cache/catalog/Banner%20and%20Slide/250221%20TUF%20Gaming%20A14-915x420.jpg"
    ];
    let index = 0;
  
    function showImage(i) {
      $('#sliderImage').fadeOut(200, function () {
        $(this).attr('src', images[i]).fadeIn(200);
      });
    }
  
    $('#next').click(() => {
      index = (index + 1) % images.length;
      showImage(index);
    });
  
    $('#prev').click(() => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });
  
    setInterval(() => $('#next').click(), 4000);
  });

const Products_Line = [
    {
        "products": [
            { "image": "https://www.goldonecomputer.com/image/catalog/Side%20Bar/250223%20ORICO%204%20ports.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 Samsung 990 Pro.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/FeatureLaptop_1.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 APC Back UPS.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250222 ACER Aspire Lite AL14.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250222 ACER Nitro V15.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250222 LENOVO LOQ 15IAX9.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250222 ROG Strix G16 G614JU.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/FeatureProduct_1.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 MSI PRO MP275Q.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 Razer DeathAdder.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 UBIQUITI UniFi.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 Razer DeathAdder.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 UBIQUITI UniFi.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 Razer DeathAdder.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 UBIQUITI UniFi.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 Razer DeathAdder.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 UBIQUITI UniFi.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 Razer DeathAdder.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AMD Ryzen 7 7800X 3D.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 UBIQUITI UniFi.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 ONIKUMA G55.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250227 AOC AGON AG276QZD2.jpg" },
            { "image": "https://www.goldonecomputer.com/image/catalog/Side Bar/250223 HP LASERJET PRO.jpg" }
        ]
    }
]
function FEATURE_PRODUCT_LINE() {
    const data_line = document.getElementById('data-line');
    Products_Line[0].products.forEach(product => {
        data_line.innerHTML += `
            <li class="flex items-center justify-between border-b pb-2 hover:scale-105 transition-all duration-300">
                <img src="${product.image}" alt="">
            </li>
        `;
    });
}

const Products_Form = [
    {
        "posts": [
            {
                "title": "[VIDEO] WiFi 6 Router Review",
                "date": "29 Mar 2025",
                "image": "https://www.goldonecomputer.com/image/cache/catalog/Blogs/Router-Cover%E2%80%8B%E2%80%8B%20Website-914x510.jpg"
            },
            {
                "title": "[VIDEO] Laptop OLED 3K Review",
                "date": "22 Mar 2025",
                "image": "https://www.goldonecomputer.com/image/cache/catalog/Blogs/Cover%20Website-914x510.jpg"
            },
            {
                "title": "[VIDEO] Should you upgrade RTX5070?",
                "date": "13 Mar 2025",
                "image": "https://www.goldonecomputer.com/image/cache/catalog/Blogs/250313%20RTX%205070-914x510.jpg"
            }
        ]
    }
];

function FROM_THE_BLOG() {
    const form_blog = document.getElementById('form-blog');
    if (form_blog) {
        form_blog.innerHTML = Products_Form[0].posts.map(product => `
            <div class="bg-white shadow-lg rounded-lg p-3 hover:scale-105 transition-all duration-300">
                <img src="${product.image}" alt="Blog Post" class="w-full rounded-md">
                <p class="text-xs text-yellow-500 mt-2">${product.date}</p>
                <p class="text-sm font-semibold mt-1">${product.title}</p>
            </div>
        `).join('');
    }
}

const brands = [
    { name: "Hikvision", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/221219%20Logo%20Hikvision-130x110.png" },
    { name: "Acegeek", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/240214%20Logo%20Acegeek-130x110.png" },
    { name: "Microlab", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/240214%20Logo%20Microlab-130x110.png" },
    { name: "Prolink", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/240214%20Logo%20Prolink-130x110.png" },
    { name: "Epson", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%2017-130x110.png" },
    { name: "DeepCool", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%2020-130x110.png" },
    { name: "APC", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%202-130x110.png" },
    { name: "Onikuma", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/240214%20Logo%20Onikuma-130x110.png" },
    { name: "Aigo", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/240214%20Logo%20aigo-130x110.png" },
    { name: "Darkflash", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/221219%20Logo%20Darkflash-130x110.png" },
    { name: "Artboard 16", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%2016-130x110.png" },
    { name: "Artboard 24", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%2024-130x110.png" },
    { name: "Artboard 37", image: "https://www.goldonecomputer.com/image/cache/catalog/Icon%20and%20Logo/Artboard%2037-130x110.jpg" }
];

function BRAND() {
    const Brands_Name = document.getElementById('Brands-Name');
    if (Brands_Name) {
        Brands_Name.innerHTML = brands.map(brand => `
            <img src="${brand.image}" alt="${brand.name}" class="h-12 object-contain">
        `).join('');
    }
}

const Products_Computer = [
    {
        "category": "DESKTOP",
        "harf" : "DESKTOP",
        "products": [
            { "name": "Asus NUC i3 1315U", "spec": "8GB / SSD 256GB", "price": "449.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/ASUS/NUC/RNUC13VYKI50006-1-200x200.jpg" },
            { "name": "Asus NUC i7 1260P", "spec": "16GB / SSD 512GB", "price": "719.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/ASUS/NUC/RNUC12WSHI70000-1-200x200.jpg" },
            { "name": "Dell OptiPlex i5 14500", "spec": "8GB / SSD 512GB", "price": "599.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/Dell/Desktop/Dell-OptiPlex-7020SFF-1-200x200.jpg" },
            { "name": "Asus NUC 11ATKPE0000", "spec": "8GB / SSD 256GB", "price": "269.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/ASUS/NUC/BNUC11ATKPE0000-1-200x200.jpg" }
        ]
    },
    {   
        "category": "MACBOOK & LAPTOP",
        "harf" : "MACBOOK",
        "products": [
            { "name": "MacBook Air 15", "spec": "M4 Chip / 16GB / SSD 512GB /15.2", "price": "1559.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/APPLE/Air/Mac-air-M4-15-Sky-Blue-1-200x200.jpg" },
            { "name": "MacBook Air 15", "spec": "M3 Chip / 16GB / SSD 256GB / 15", "price": "1359.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/APPLE%20LAPTOP/2023/Mac%20air%20/MacBook-Air-15-Space-Grey-200x200.jpg" },
            { "name": "MacBook Air 13", "spec": "M4 Chip / 16GB / SSD 256GB /13.6", "price": "1159.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/APPLE/Air/Mac-air-M4-13-Midnight-1-200x200.jpg" },
            { "name": "Lenovo ThinkPad T14 Gen 5", "spec": "Ultra 7 155U / 16GB", "price": "1159.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/GOC%20SR/2025/LENOVO/Notebook%20/ThinkPad-T14-Gen-5-1-200x200.jpg" }
        ]
    },
    {
        "category": "LATEST PRODUCT",
        "products": [
            { "name": "Huawei AP362E Wireless Ceiling", "spec": "2.975Gbps WIFI 6 Access Point", "price": "95.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Huawei/Access%20Point/AP361-330x409.jpg" },
            { "name": "Huawei AP160 Wireless", "spec": "Wall Mounted 1.775Gbps WIFI 6 Access Point", "price": "75.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Huawei/Access%20Point/AP160-1-330x409.jpg" },
            { "name": "Huawei AP266 Wireless", "spec": "Wall plate 2.975Gbps WIFI 6 Access Point", "price": "110.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Huawei/Access%20Point/AP266-330x409.jpg" },
            { "name": "Huawei S310S-24P4J", "spec": "24Port L3 POE+ Management Gigabit Switch", "price": "320.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Huawei/Switch/S220S-24P4J-330x409.jpg" }
        ]
    },
    {
        "category": "MONITOR",
        "products": [
            { "name": "MSI PRO MP273U", "spec": '27" / 4K / IPS / 60Hz / 3 Years', "price": "199.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20MSI/PRO-MP273U-200x200.jpg" },
            { "name": "Samsung Odyssey OLED", "spec": 'G6 G60SD (Pivot) 27" / OLED', "price": "910.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20Samsung/G6-OLED-240Hz-200x200.jpg" },
            { "name": "Samsung Essential Monitor", "spec": 'S3 (S30GD) 2025 24"', "price": "109.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20Samsung/S3-2025-200x200.jpg" },
            { "name": "Samsung Odyssey OLED G6", "spec": '(Pivot) 27" / OLED', "price": "699.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Monitor%20Samsung/G6-OLED-240Hz-200x200.jpg" }
        ]
    },
    {
        "category": "PC COMPONENTS",
        "harf" : "PC_COMPONENTS",
        "products": [
            { "name": "FSP Hydro PTM PRO(ATX3.1)", "spec": "1650W Max Power 1600W", "price": "299.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/PSU/FSP1650W1-200x200.jpg" },
            { "name": "darkFlash PMT 850W ATX 3.1", "spec": "White 850W / Full Mo", "price": "79.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/PSU/PMT-White-750W-200x200.jpg" },
            { "name": "Power Supply FSP HV Pro", "spec": "85+ 650W / 80 Plus", "price": "45.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/PSU/HV-Pro-650W-200x200.jpg" },
            { "name": "Power FSP VITA GD 850W GOLD", "spec": "Max Power 850W / 80", "price": "95.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/PSU/FSP-VITA-GD-850W-200x200.jpg" }
        ]
    },
    {
        "category": "GAMING GEAR",
        "harf" : "GEAR",
        "products": [
            { "name": "MOUSE ONIKUMA CW929 USB", "spec": "GAMING RGB", "price": "12.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/CW929-1-200x200.png" },
            { "name": "Razer BlackShark V2 X Gaming", "spec": "Headset 7.1 Surround", "price": "55.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/blackshark-v2-x-1-200x200.jpg" },
            { "name": "Logitech G502 X Gaming", "spec": "Mouse White", "price": "79.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/G502-X-2-200x200.jpg" },
            { "name": "Logitech G502 X Gaming Mouse", "spec": "Mouse", "price": "75.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Mouse/G502-X-4-200x200.jpg" }
        ]
    },
    {
        "category": "ACCESSORIES",
        "products": [
            { "name": "ORICO Type-C 10-in-1 5Gbps", "spec": "Multifunction Docking", "price": "35.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/ORICO/PW11-10P-200x200.jpg" },
            { "name": "ORICO 6-in-1 Type-C Multifunction", "spec": "Docking Station", "price": "35.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/ORICO/MC-U602P-200x200.jpg" },
            { "name": "ORICO 5-in-1 Type-C Multifunction", "spec": "Docking Station", "price": "29.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/ORICO/MC-U501P-200x200.jpg" },
            { "name": "ORICO 8 IN 1 Type-C Multifunctional", "spec": "Docking Station", "price": "35.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Accessories%20Converter/ORICO/2CT-8HR-2-200x200.jpg" }
        ]
    },
    {
        "category": "AUDIO DEVICE",
        "harf" : "Audio",
        "products": [
            { "name": "Razer Seiren V3 Mini USB", "spec": "Microphone", "price": "59.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Gaming%20Gear/Gaming%20Headset/Razer-Seiren-V3-Mini-USB-Microphone-Condenser-Mic-200x200.jpg" },
            { "name": "Logitech H540 USB Headset", "spec": "Noise Cancelling", "price": "36.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Audio%20Device/Headset/H540-200x200.jpg" },
            { "name": "XDOBO Sinoband Dignity 2024 50W", "spec": "Portable Speaker", "price": "43.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Speaker/Speaker%20Xdobo/240607%20XDOBO%20SINOBAND%20Dignity%202024-4-200x200.jpg" },
            { "name": "XDOBO BMTL Grammy 5W portable", "spec": "Speaker", "price": "15.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Speaker/Speaker%20Xdobo/241004%20BMTL%20Grammy%202-200x200.jpg" }
        ]
    },
    {
        "category": "PROJECTOR",
        "products": [
            { "name": "Epson EB-L260F-Built-InWireles-WXGA", "spec": "1920x1080", "price": "1349.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Projector%20Epson/EB-L260F-3-200x200.png" },
            { "name": "Epson EB-2250U 3LCD Projector WUXGA", "spec": "5000 ANSI Lum", "price": "1499.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Projector%20Epson/EB-2256U%20(1)-200x200.png" },
            { "name": "Projector RTAKO A4300PRO", "spec": "Mouse White", "price": "150.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Projector%20Epson/H8c6ee81806fc48308e791c45309d17f6j.jpg_720x720q50-200x200.jpg" },
            { "name": "Epson CO-FH01 LCD Projector WXGA", "spec": "3000 ANSI Lumens", "price": "419.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Projector%20Epson/FH01-200x200.png" }
        ]
    },
    {
        "category": "PRINTER AND SCANNER",
        "harf" : "Printer",
        "products": [
            { "name": "HP Color LaserJet MFP M570DW A4", "spec": "Print, Copy, Scan", "price": "1029.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/HP%20Printer%20/M570DW-2-200x200.jpg" },
            { "name": "HP Color LaserJet MFP M283FDN A4", "spec": "Print, Copy, Scan", "price": "359.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/HP%20Printer%20/M283Fdw1-200x200.png" },
            { "name": "HP LASERJET PRO MFP M139FNW A4 B/W", "spec": "Print, Copy, Sc", "price": "225.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/HP%20Printer%20/M137FNW-200x200.jpg" },
            { "name": "HP LaserJet Enterprise M611DN A4", "spec": "B/W Print Only", "price": "749.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/HP%20Printer%20/M611DN-200x200.jpg" }
        ]
    },
    {
        "category": "DIGITAL STORAGE",
        "products": [
            { "name": "Synology 4TB BeeStation Personal", "spec": "Cloud (BST150-4T)", "price": "295.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Synology/BST150-4T-200x200.png" },
            { "name": "Synology USB Station 2 USB NAS", "spec": "USB NAS", "price": "120.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Synology/Synology-USB-Station-2-USB-NAS-200x200.jpg" },
            { "name": "Synology 1.92TB 2.5” Enterprise-Grade", "spec": "SATA SSD", "price": "585.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Synology/SYNOLOGY%20Accessories/SAT5220-1920G-200x200.jpg" },
            { "name": "Synology RAM 4GB module for", "spec": "RS2418(RP)+, RS2818RP+", "price": "105.00", "image": "https://www.goldonecomputer.com/image/cache/catalog/Products/Synology/SYNOLOGY%20Accessories/D4ECSO-2400-8G-200x200.jpg" }
        ]
    }
];

let cartItems = [];
let currentProduct = null;

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const checkoutButton = document.getElementById('checkout-button');
    const totalPriceElement = document.getElementById('total-price');

    if (!cartItemsContainer || !emptyCartMessage || !checkoutButton || !totalPriceElement) return;

    if (cartItems.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        checkoutButton.classList.add('hidden');
        totalPriceElement.classList.add('hidden');
        cartItemsContainer.innerHTML = '';
    } else {
        emptyCartMessage.classList.add('hidden');
        checkoutButton.classList.remove('hidden');
        totalPriceElement.classList.remove('hidden');
        cartItemsContainer.innerHTML = cartItems.map((item, index) => `
            <div class="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
                <img src="${item.product.image}" alt="${item.product.name}" class="w-16 h-16 object-cover rounded-md">
                <div class="flex-1">
                    <p class="text-sm font-semibold text-black">${item.product.name}</p>
                    <p class="text-gray-500 text-xs">${item.product.spec}</p>
                    <p class="text-green-600 font-semibold">$ ${item.product.price} x ${item.quantity}</p>
                </div>
                <button id="Cancel" class="remove-item p-2 bg-red-500 text-white rounded-md hover:bg-red-600" data-index="${index}">
                    <i class="bi bi-trash me-1"></i> Cancel
                </button>
            </div>
        `).join('');

        const totalPrice = cartItems.reduce((sum, item) => sum + (parseFloat(item.product.price) * item.quantity), 0).toFixed(2);
        totalPriceElement.textContent = `Total: $${totalPrice}`;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-index'));
                cartItems.splice(index, 1);
                renderCartItems();
            });
        });
    }

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const orderElement = document.getElementById('Order');
    if (orderElement) orderElement.textContent = totalQuantity;
}

document.addEventListener('click', function(e) {
    if (e.target.closest('.remove-item')) {
        const btn = e.target.closest('.remove-item');
        const index = btn.getAttribute('data-index');
        document.getElementById('success-modal').classList.remove('hidden');
    }
});

document.getElementById('close-success-modal').addEventListener('click', function() {
    document.getElementById('success-modal').classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const checkoutBtn = document.getElementById('checkout-button');
    const paymentModal = document.getElementById('payment-modal');
    const closePaymentModal = document.getElementById('close-modal-QR');
    const closeCartModal = document.getElementById('close-cart-modal');
    const cartModal = document.getElementById('cart-modal');

    if (checkoutBtn && paymentModal && closePaymentModal) {
        checkoutBtn.addEventListener('click', () => {
            paymentModal.classList.remove('hidden');
        });

        closePaymentModal.addEventListener('click', () => {
            paymentModal.classList.add('hidden');
        });
    }

    if (closeCartModal && cartModal) {
        closeCartModal.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });
    }
});

function addToCart(product) {
    const existingItem = cartItems.find(item => item.product.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ product, quantity: 1 });
    }
    renderCartItems();
}

function renderViewProduct(product) {
    const viewProductContainer = document.getElementById('view-product');
    if (viewProductContainer) {
        viewProductContainer.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-40 h-40 object-contain mx-auto rounded-md">
            <p class="text-lg font-semibold mt-4">${product.name}</p>
            <p class="text-gray-500 text-sm mt-2">${product.spec}</p>
            <p class="text-green-600 font-semibold mt-2">$ ${product.price}</p>
        `;
    }
}

function Category_Computer() {
    const category_computer = document.getElementById('category-computer');
    if (!category_computer) return;

    const newCarts = JSON.parse(localStorage.getItem('newCarts')) || [];
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || {};

    category_computer.innerHTML = Products_Computer.map(category => {
        const categoryNewCarts = newCarts.filter(cart => cart.category === category.category);
        return `
            <div class="mt-6">
                <h2 id="${category.harf}" class="text-lg font-semibold bg-yellow-500 text-white px-4 py-2 inline-block hover:scale-105 transition-all duration-300">${category.category}</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                    ${category.products.map(product => `
                        <div class="bg-white p-3 shadow-lg rounded-lg text-center hover:scale-105 transition-all duration-300">
                            <img src="${product.image}" alt="${product.name}" class="w-full rounded-md">
                            <p class="text-sm font-semibold mt-2">${product.name}</p>
                            <p class="text-gray-500 text-xs">${product.spec}</p>
                            <p class="text-green-600 font-semibold">$ ${product.price}</p>
                            <div class="flex justify-center space-x-4 mt-3 transition duration-300">
                                <button class="p-1 px-2 bg-yellow-100 rounded-md hover:bg-yellow-500 hover:text-white add-to-cart" data-product='${JSON.stringify(product)}'>
                                    <i class="bi bi-cart-plus text-yellow-600"></i>
                                </button>
                                <button class="p-1 px-2 bg-blue-100 rounded-md hover:bg-blue-500 hover:text-white view-product" data-product='${JSON.stringify(product)}'>
                                    <i class="bi bi-eye text-blue-600"></i>
                                </button>
                                <button class="p-1 px-2 bg-red-100 rounded-md hover:bg-red-500 hover:text-white toggle-like" data-product-id="${product.id}">
                                    <i class="bi ${likedProducts[product.id] ? 'bi-heart-fill text-red-600' : 'bi-heart text-red-600'}"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                    ${categoryNewCarts.map(cart => `
                        <div class="bg-white p-3 shadow-lg rounded-lg text-center hover:scale-105 transition-all duration-300 relative">
                            <span class="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Create</span>
                            <img src="${cart.image}" alt="${cart.name}" class="w-full rounded-md">
                            <p class="text-sm font-semibold mt-2">${cart.name}</p>
                            <p class="text-gray-500 text-xs">${cart.spec}</p>
                            <p class="text-green-600 font-semibold">$ ${cart.price}</p>
                            <div class="flex justify-center space-x-2 mt-3 transition duration-300">
                                <button class="p-1 px-2 bg-yellow-100 rounded-md hover:bg-yellow-500 hover:text-white add-to-cart" data-product='${JSON.stringify(cart)}'>
                                    <i class="bi bi-cart-plus text-yellow-600"></i>
                                </button>
                                <button class="p-1 px-2 bg-blue-100 rounded-md hover:bg-blue-500 hover:text-white view-product" data-product='${JSON.stringify(cart)}'>
                                    <i class="bi bi-eye text-blue-600"></i>
                                </button>
                                <button class="p-1 px-2 bg-red-100 rounded-md hover:bg-red-500 hover:text-white delete-cart" data-created-at='${cart.createdAt}'>
                                    <i class="bi bi-trash text-red-600"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="view-all-btn mt-3 px-4 py-2 bg-yellow-500 text-white rounded-md hover:scale-105 transition-all duration-300" data-category="${category.category}">
                    <i class="bi bi-eye me-1"></i> VIEW ALL
                </button>
                <button class="mt-3 px-4 py-2 bg-green-500 text-white rounded-md hover:scale-105 transition-all duration-300 new-cart-btn" data-category="${category.category}">
                    <i class="bi bi-cart-plus me-1"></i> New Cart
                </button>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.toggle-like').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const icon = button.querySelector('i');
            const isLiked = likedProducts[productId];

            if (isLiked) {
                delete likedProducts[productId];
                icon.classList.remove('bi-heart-fill', 'text-red-600');
                icon.classList.add('bi-heart', 'text-red-600');
            } else {
                likedProducts[productId] = true;
                icon.classList.remove('bi-heart');
                icon.classList.add('bi-heart-fill', 'text-red-600');
            }

            localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        });
    });

    document.querySelectorAll('.view-all-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const allItems = Products_Computer.find(c => c.category === category)?.products || [];
            const newItems = newCarts.filter(c => c.category === category);

            const content = [...allItems, ...newItems];

            const viewAllContent = document.getElementById('view-all-content');
            viewAllContent.innerHTML = content.map(product => `
                <div class="bg-white p-3 shadow-lg rounded-lg text-center">
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-md">
                    <p class="text-sm font-semibold mt-2">${product.name}</p>
                    <p class="text-gray-500 text-xs">${product.spec}</p>
                    <p class="text-green-600 font-semibold">$ ${product.price}</p>
                </div>
            `).join('');

            document.getElementById('view-all-modal').classList.remove('hidden');
        });
    });

    document.getElementById('close-view-all').addEventListener('click', () => {
        document.getElementById('view-all-modal').classList.add('hidden');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = JSON.parse(button.getAttribute('data-product'));
            addToCart(product);
        });
    });

    document.querySelectorAll('.view-product').forEach(button => {
        button.addEventListener('click', () => {
            currentProduct = JSON.parse(button.getAttribute('data-product'));
            renderViewProduct(currentProduct);
            document.getElementById('view-modal').classList.remove('hidden');
        });
    });

    document.querySelectorAll('.new-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById('new-cart-modal');
            const category = button.getAttribute('data-category');
            modal.dataset.category = category;
            modal.classList.remove('hidden');
        });
    });

    document.querySelectorAll('.delete-cart').forEach(button => {
        button.addEventListener('click', () => {
            const createdAt = button.getAttribute('data-created-at');
            let newCarts = JSON.parse(localStorage.getItem('newCarts')) || [];
            newCarts = newCarts.filter(cart => cart.createdAt !== createdAt);
            localStorage.setItem('newCarts', JSON.stringify(newCarts));
            category_computer.innerHTML = '';
            Category_Computer();
            document.getElementById('success-modal').classList.remove('hidden');
        });
    });

    const newCartForm = document.getElementById('new-cart-form');
    if (newCartForm) {
        newCartForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cartName = document.getElementById('cart-name').value;
            const cartSpec = document.getElementById('cart-spec').value;
            const cartPrice = parseFloat(document.getElementById('cart-price').value).toFixed(2);
            const cartImage = document.getElementById('cart-image').value;
            const category = document.getElementById('new-cart-modal').dataset.category;

            const newCart = {
                name: cartName,
                spec: cartSpec,
                price: cartPrice,
                image: cartImage,
                category: category,
                createdAt: new Date().toISOString()
            };

            let newCarts = JSON.parse(localStorage.getItem('newCarts')) || [];
            newCarts.push(newCart);
            localStorage.setItem('newCarts', JSON.stringify(newCarts));

            newCartForm.reset();
            document.getElementById('new-cart-modal').classList.add('hidden');
            category_computer.innerHTML = '';
            Category_Computer();
            document.getElementById('success-modal').classList.remove('hidden');
        });
    }

    document.getElementById('close-success-modal').addEventListener('click', function () {
        document.getElementById('success-modal').classList.add('hidden');
    });

    const closeNewCartModal = document.getElementById('close-new-cart-modal');
    if (closeNewCartModal) {
        closeNewCartModal.addEventListener('click', () => {
            newCartForm.reset();
            document.getElementById('new-cart-modal').classList.add('hidden');
        });
    }

    const cancelNewCart = document.getElementById('cancel-new-cart');
    if (cancelNewCart) {
        cancelNewCart.addEventListener('click', () => {
            newCartForm.reset();
            document.getElementById('new-cart-modal').classList.add('hidden');
        });
    }

    const newCartModal = document.getElementById('new-cart-modal');
    if (newCartModal) {
        newCartModal.addEventListener('click', (e) => {
            if (e.target === newCartModal) {
                newCartForm.reset();
                newCartModal.classList.add('hidden');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    FEATURE_PRODUCT_LINE();
    FROM_THE_BLOG();
    BRAND();
    Category_Computer();
    renderCartItems();

    const cartModal = document.getElementById('cart-modal');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartModal = document.getElementById('close-cart-modal');
    const viewModal = document.getElementById('view-modal');
    const closeViewModal = document.getElementById('close-view-modal');
    const viewAddToCart = document.getElementById('view-add-to-cart');

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartModal.classList.remove('hidden');
        });
    }

    if (closeCartModal) {
        closeCartModal.addEventListener('click', () => {
            cartModal.classList.add('hidden');
        });
    }

    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.add('hidden');
            }
        });
    }

    if (closeViewModal) {
        closeViewModal.addEventListener('click', () => {
            viewModal.classList.add('hidden');
            currentProduct = null;
        });
    }

    if (viewModal) {
        viewModal.addEventListener('click', (e) => {
            if (e.target === viewModal) {
                viewModal.classList.add('hidden');
                currentProduct = null;
            }
        });
    }

    if (viewAddToCart) {
        viewAddToCart.addEventListener('click', () => {
            if (currentProduct) {
                addToCart(currentProduct);
                viewModal.classList.add('hidden');
                currentProduct = null;
            }
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    if (searchButton && searchInput && modal && modalContent && closeModal) {
        searchButton.addEventListener('click', () => {
            const term = searchInput.value.trim().toLowerCase();
            let found = null;

            Products_Computer.forEach(category => {
                category.products.forEach(product => {
                    if (product.name.toLowerCase().includes(term)) {
                        found = product;
                    }
                });
            });

            modalContent.innerHTML = found ? `
                <img src="${found.image}" alt="${found.name}" class="w-32 h-32 object-contain mb-3 mx-auto rounded-md">
                <p><strong>Name:</strong> ${found.name}</p>
                <p><strong>Spec:</strong> ${found.spec}</p>
                <p><strong>Price:</strong> <span class="text-green-600 font-bold">${found.price} $</span></p>
            ` : `<p class="text-red-600 text-center">Product not found!</p>`;

            searchInput.value = '';
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        });

        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
    }
});