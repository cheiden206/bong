function loadPage(pageName, extraId = null) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<div style="text-align:center;padding:50px;">Đang tải dữ liệu...</div>';

    // 1. Xác định thư mục chứa file cần tải
    let folderPath = "layouts"; 
    let fileExtension = "html"; // Mặc định tất cả các file sử dụng đuôi .html

    // Chuyển hướng các trang con chi tiết vào thư mục "chitiet"
    if (pageName === "chitiettintuc" || pageName === "chitietdoihinh" || pageName === "chitietcauthu") {
        folderPath = "chitiet"; 
    }

    // 2. Xử lý riêng biệt đuôi file .htm cho trang chitietcauthu (khớp với cấu trúc thư mục của bạn)
    if (pageName === "chitietcauthu") {
        fileExtension = "html";
    }

    // Tiến hành fetch file giao diện tương ứng
    fetch(`${folderPath}/${pageName}.${fileExtension}`)
        .then(response => {
            if (!response.ok) throw new Error("Không tìm thấy trang");
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html;

            // --- ĐIỀU PHỐI KÍCH HOẠT CÁC HÀM XỬ LÝ JS ---

            // 1. Nếu vào trang Chi tiết Tin tức
            if (pageName === "chitiettintuc" && extraId !== null) {
                setTimeout(() => loadNews(extraId), 50);
            }
            
            // 2. Nếu vào trang Chi tiết Đội hình
            if (pageName === "chitietdoihinh" && extraId !== null) {
                setTimeout(() => loadSquadDetail(extraId), 50);
            }
            
            // 3. Nếu vào trang Danh sách Đội hình chính
            if (pageName === "doihinh") {
                setTimeout(() => loadSquad(), 50);
            }

            // 4. Nếu vào trang Chi tiết Cầu thủ
            if (pageName === "chitietcauthu" && extraId !== null) {
                setTimeout(() => loadPlayerDetail(extraId), 50);
            }

            // 5. Nếu vào trang Danh sách Cầu thủ
            if (pageName === "cauthu") {
                setTimeout(() => loadCauthu(), 50);
            }

            // 6. MỚI BỔ SUNG: Nếu vào trang Phân tích
            if (pageName === "phantich") {
                // Hiện tại đang dùng HTML tĩnh nên không cần gọi data
                // Nếu sau này có hàm load data riêng trong file phantich.js thì bạn sẽ gọi ở đây
                console.log("Đã tải trang Phân Tích thành công!");
            }
        })
        .catch(error => {
            console.error(error);
            contentDiv.innerHTML = '<div style="text-align:center;padding:50px;color:red;">Lỗi tải trang!</div>';
        });
}

document.addEventListener("DOMContentLoaded", () => {
    // Mặc định nạp trang chủ khi vừa mở web
    loadPage('home'); 
});

// =========================================================================
// HÀM BỔ TRỢ: XỬ LÝ CHUYỂN TAB CHO TRANG PHÂN TÍCH
// =========================================================================
window.switchPhanTichTab = function(evt, tabId) {
    // 1. Ẩn toàn bộ nội dung của các tab
    let tabcontents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active");
    }
    
    // 2. Xóa trạng thái 'active' (màu đỏ, vạch vàng) khỏi tất cả các nút tab
    let tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // 3. Hiển thị nội dung Tab được chọn và đổi màu nút tương ứng
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add("active");
        evt.currentTarget.classList.add("active");
    }
};

const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });