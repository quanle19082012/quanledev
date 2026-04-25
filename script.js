const products = [{
        name: "Happy Birthday",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh2.png",
        label: "Wearables",
        link: "filecode/Happybirthday.zip"
    },
    {
        name: "Signin-signup Form",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh1.png",
        label: "Software",
        link: "https://github.com/QuanLehoang/Signin-signup-.git"
    },
    {
        name: "Spotify Clone",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/demo.png",
        label: "Audio",
        link: "filecode/spotifyclone.zip"
    },
    {
        name: "Giới thiệu địa danh Nam Đàn",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh3.png",
        label: "Digital",
        link: "filecode/project_webgioithieu.zip"
    },
    {
        name: "tool chèn file vào ảnh  ",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh5.png",
        label: "Digital",
        link: "filecode/chenfilevaoanh.zip"

    },
    {
        name: "tool tra txt",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh4.png",
        label: "Digital",
        link: "filecode/tool.zip"
    },
    {
        name: "Hệ thông quản lý học sinh (demo)",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh6.png",
        label: "Digital",
        link: "filecode/hethongquanlyhocsinh.zip"
    },
    {
        name: "Bong bóng tin nhắn",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh7.png",
        label: "Digital",
        link: "filecode/bongbongtinnhan.zip"
    },
    {
        name: "Electric Cursor ",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh8.gif",
        label: "Digital",
        link: "filecode/electriccursor.zip"
    },
    {
        name: "Hệ thống tra điểm thi (demo)",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh10.png",
        label: "Digital",
        link: "filecode/hethongtradiemthi.zip"
    },
    {
        name: "Quà tặng crush",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh9.png",
        label: "Digital",
        link: "filecode/quatangcrush.zip"
    },
    {
        name: "Interact main",
        price: "0",
        phanLoai: "Miễn phí",
        image: "anh/anh11.png",
        label: "Digital",
        link: "filecode/Interact-main.zip"
    },
    {
        name: "Đặt website theo yêu cầu",
        price: "Inbox",
        phanLoai: "Có phí",
        image: "anh12.png",
        label: "Software",
        link: "https://www.facebook.com/quan.le.51371/"
    },
];

function renderProducts(filterType = 'Tất cả') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filteredProducts = filterType === 'Tất cả' ?
        products :
        products.filter(p => p.phanLoai === filterType);

    grid.innerHTML = filteredProducts.map(product => {
        const tagClass = product.phanLoai === 'Miễn phí' ? 'bg-emerald-500' : 'bg-indigo-600';
        const priceText = product.price === "0" ? "FREE" : `${product.price}`;
        
        // LOGIC TỰ ĐỘNG ĐỔI NÚT DỰA VÀO GIÁ
        const isInbox = product.price === "Inbox";
        const btnIcon = isInbox ? "fas fa-paper-plane" : "fas fa-download"; // Icon máy bay giấy (gửi tin) hoặc Download
        const btnTitle = isInbox ? "Liên hệ ngay" : "Tải về file";
        const btnAttr = isInbox ? `target="_blank"` : `download="${product.name}"`; // Inbox mở tab mới, Download tải file
        const btnStyle = isInbox ? `background-color: #4f46e5;` : ``; // Làm nổi bật nút Inbox bằng màu tím

        return `
            <div class="product-card group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div class="product-img-wrapper relative overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold ${tagClass} text-white shadow-lg z-10">
                        ${product.phanLoai}
                    </div>
                </div>
                <div class="p-8">
                    <span class="text-[10px] font-800 uppercase tracking-widest text-slate-400">${product.label}</span>
                    <h3 class="text-xl font-800 mt-2 mb-6 text-slate-800 group-hover:text-indigo-600 transition">${product.name}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-800 tracking-tighter">${priceText}</span>
                        
                        <a href="${product.link || '#'}" ${btnAttr} class="add-btn" style="${btnStyle}" title="${btnTitle}">
                            <i class="${btnIcon}"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Hàm xử lý Filter
function filterProducts(type, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    renderProducts(type);

    // Nếu bạn có hàm checkEmptyState thì gọi ở đây
    if (typeof checkEmptyState === "function") {
        const filteredCount = type === 'Tất cả' ? products.length : products.filter(p => p.phanLoai === type).length;
        checkEmptyState(filteredCount);
    }
}

// Các hiệu ứng bổ trợ
function handleNavScroll() {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

function initContactForm() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ!');
    });
}

// Khởi tạo toàn bộ khi trang load xong
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('Tất cả');
    window.addEventListener('scroll', handleNavScroll);
    initContactForm();
});

// 1. Chặn click chuột phải
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 2. Chặn các phím tắt phổ biến để mở DevTools
document.onkeydown = function(e) {
    // Chặn F12
    if (e.keyCode === 123) {
        return false;
    }
    // Chặn Ctrl+Shift+I (Mở tab Elements)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        return false;
    }
    // Chặn Ctrl+Shift+C (Mở tab Elements)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        return false;
    }
    // Chặn Ctrl+Shift+J (Mở tab Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        return false;
    }
    // Chặn Ctrl+U (Xem mã nguồn HTML)
    if (e.ctrlKey && e.keyCode === 85) {
        return false;
    }
};
