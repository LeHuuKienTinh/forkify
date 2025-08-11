Forkify

Ứng dụng tìm kiếm và quản lý công thức nấu ăn (Forkify) — README tiếng Việt

Mô tả

Forkify là một ứng dụng web nhỏ cho phép người dùng tìm kiếm công thức nấu ăn, xem chi tiết công thức, thêm công thức mới. Dự án này được phát triển như một bài tập thực hành Frontend (HTML/CSS/JS) 

Mục tiêu

Triển khai giao diện người dùng thân thiện để tìm và xem công thức.

Thực hành kiến trúc project, phân chia module rõ ràng, và xử lý asynchronous (fetch API).

Hỗ trợ lưu công thức yêu thích (bookmarks) 

Tính năng chính

Tìm kiếm công thức theo từ khóa.

Hiển thị danh sách kết quả với phân trang (nếu có).

Xem chi tiết công thức (nguyên liệu, cách làm, thời gian, khẩu phần).

Thêm / xóa bookmark (lưu công thức yêu thích vào localStorage).

Thêm công thức mới bằng form và upload.

Công nghệ sử dụng

HTML5, CSS3 

JavaScript (ES6+) 

Fetch API để gọi API

localStorage để lưu bookmarks cục bộ

Yêu cầu

Node.js (nếu dự án có build step hoặc dùng bundler như Parcel/Vite). Phiên bản đề xuất: 14+.

Cài đặt & chạy (phiên bản không dùng bundler)

Clone repository:

git clone https://github.com/LeHuuKienTinh/forkify.git
cd forkify

Mở file index.html bằng trình duyệt (hoặc dùng extension Live Server trên VSCode).

Cài đặt & chạy (phiên bản dùng bundler / dev server)

Nếu repository dùng Parcel/Vite/Webpack, làm theo các bước sau:

# cài dependencies
npm install

# chạy dev server
npm run dev

# build production
npm run build

Kiểm tra file package.json để biết chính xác các lệnh scripts.

Cấu trúc thư mục (gợi ý)

forkify/
├─ src/
│  ├─ controllers/
│  ├─ models/
│  ├─ views/
│  ├─ helpers/
│  └─ index.js
├─ dist/ (nếu build)
├─ index.html
├─ package.json
└─ README.md

Hướng dẫn sử dụng

Mở ứng dụng trên trình duyệt.

Gõ từ khóa công thức vào ô tìm kiếm và nhấn Enter.

Chọn một kết quả để xem chi tiết.

Nhấn biểu tượng bookmark để lưu công thức yêu thích.

Vào danh sách bookmarks để quản lý công thức đã lưu.

Cách đóng góp

Fork repository.

Tạo branch feature: git checkout -b feat/ten-feature.

Commit thay đổi: git commit -m "Mô tả thay đổi".

Push và tạo Pull Request.

Vui lòng viết mô tả rõ ràng trong PR và kèm hướng dẫn test nếu cần.

Gợi ý cải tiến

Thêm pagination hoặc infinite scroll cho kết quả.

Đồng bộ bookmarks với backend (nếu có user accounts).

Thêm unit tests cho các module JS.

Cải thiện trải nghiệm trên mobile (responsive, accessibility).

License

Mã nguồn được phát hành theo MIT License.

Liên hệ

Nếu cần trợ giúp hoặc sửa README này, liên hệ: LeHuuKienTinh (GitHub) hoặc mở issue trên repository.

