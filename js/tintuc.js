// =========================================================
// QUẢN LÝ DỮ LIỆU & LOGIC TIN TỨC (Lưu tại js/tintuc.js)
// =========================================================

// Kho dữ liệu tin tức tổng hợp
const newsData = {
    1: {
            title: "Na Uy trở lại World Cup sau 28 năm",
            // Chỉ giữ lại một ảnh đại diện nhỏ (thumbnail) nếu cần, hoặc bỏ qua vì ta sẽ chèn ảnh trực tiếp trong phần content
            image: "img/nauy1.webp", 
            content: `
                <p>Sau gần ba thập kỷ chờ đợi, đội tuyển Na Uy đã chính thức giành vé tham dự FIFA World Cup 2026. Đây được xem là một trong những cột mốc đáng nhớ nhất của bóng đá Na Uy trong nhiều năm qua.</p>
                
                <p>Với sự dẫn dắt của Erling Haaland cùng nhiều cầu thủ trẻ tài năng, Na Uy đã thi đấu ấn tượng ở vòng loại và xứng đáng có mặt tại ngày hội bóng đá lớn nhất hành tinh.</p>
                
                <div class="article-image-container">
                    <img src="img/nauy1.webp" alt="Erling Haaland ăn mừng bàn thắng">
                    <span class="image-caption">Erling Haaland - niềm hy vọng số một của bóng đá Na Uy tại kỳ World Cup tới.</span>
                </div>

                <h3>Hành trình lột xác đầy cảm xúc</h3>
                <p>Người hâm mộ kỳ vọng đây sẽ là giải đấu đánh dấu bước chuyển mình của bóng đá Na Uy, đồng thời mở ra cơ hội cạnh tranh với các ông lớn của châu Âu trên sân khấu World Cup.</p>
                
                <div class="article-image-container">
                    <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800" alt="Không khí bóng đá">
                    <span class="image-caption">Sự cuồng nhiệt từ các khán đài sẽ là điểm tựa tinh thần lớn cho đội bóng Bắc Âu.</span>
                </div>

                <p>World Cup 2026 sẽ diễn ra tại Mỹ, Canada và Mexico với thể thức mới gồm 48 đội tuyển. Na Uy hứa hẹn sẽ là một trong những đội bóng mang đến nhiều bất ngờ nhất giải đấu.</p>
            `
    },

        2: {
            title: "Kết thúc của những huyền thoại cũ, mở ra thời đại mới",
            image: "img/tintuchome1.jpg",
            content: `
                <p>World Cup 2026 sẽ là sân chơi cuối cùng của thế hệ vàng đã thống trị bóng đá thế giới suốt hai thập kỷ qua. Những cái tên huyền thoại chuẩn bị bước qua bên kia sườn dốc sự nghiệp và nhường lại hào quang.</p>
                
                <div class="article-image-container">
                    <img src="img/tintuchome1.jpg" alt="Thế hệ huyền thoại">
                    <span class="image-caption">Những bước chạy cuối cùng của một thế hệ thống trị bóng đá thế giới.</span>
                </div>

                <p>Đồng thời, đây cũng là bệ phóng hoàn hảo cho những siêu sao Gen Z mới trỗi dậy. Một kỷ nguyên bóng đá hiện đại, tốc độ và giàu tính thực dụng hơn đang chuẩn bị mở ra trước mắt người hâm mộ.</p>
            `
        },
        3: {
            title: "16 Sân vận động hoành tráng đăng cai World Cup 2026",
            image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop",
            content: `
                <p>Lần đầu tiên trong lịch sử, một kỳ World Cup được tổ chức tại 3 quốc gia đồng chủ nhà: Mỹ, Canada và Mexico. Tổng cộng 16 thành phố với 16 siêu sân vận động hiện đại bậc nhất thế giới đã sẵn sàng đi vào vận hành.</p>
                <p>Các sân vận động nổi tiếng như MetLife (New York), Estadio Azteca (Mexico City) hay BC Place (Vancouver) hứa hẹn sẽ mang đến những trải nghiệm nghe nhìn bùng nổ, không gian lễ hội náo nhiệt cho hàng triệu cổ động viên từ khắp nơi đổ về.</p>
            `
        },
        4: {
            title: "Thể thức 48 đội hoạt động như thế nào?",
            image: "img/lich48doi.jpg",
            content: `
                <p>FIFA đã chính thức áp dụng thể thức thi đấu mới với sự tham gia của 48 đội tuyển xuất sắc nhất toàn cầu tại World Cup 2026.</p>
                <p>Thay vì 8 bảng như trước, giải đấu sẽ có 12 bảng đấu (mỗi bảng 4 đội). Hai đội đứng đầu mỗi bảng cùng với 8 đội xếp thứ 3 có thành tích tốt nhất sẽ giành vé bước vào vòng knock-out 32 đội. Thể thức mới này hứa hẹn số lượng trận đấu cực khủng lên đến 104 trận, kịch tính và cơ hội sửa sai nhiều hơn cho các đội bóng.</p>
            `
        }
    // Bạn có thể thêm các tin tiếp theo ("tin-2", "tin-3"...) vào đây
};

// Hàm đổ dữ liệu bài viết chi tiết vào trang chitiettintuc.html
function loadNews(newsId) {
    const article = newsData[newsId];

    if (article) {
        const titleEl = document.getElementById("news-title");
        const dateEl = document.getElementById("news-date");
        const authorEl = document.getElementById("news-author");
        const imgEl = document.getElementById("news-image");
        const contentEl = document.getElementById("news-content");

        if (titleEl) titleEl.innerText = article.title;
        if (dateEl) dateEl.innerText = article.date;
        if (authorEl) authorEl.innerText = "Tác giả: " + article.author;
        if (imgEl) imgEl.src = article.image;
        if (contentEl) contentEl.innerHTML = article.content;
    } else {
        const contentEl = document.getElementById("news-content");
        if (contentEl) {
            contentEl.innerHTML = "<p style='color:#999; text-align:center;'>Bài viết đang được cập nhật hoặc không tồn tại.</p>";
        }
    }
}