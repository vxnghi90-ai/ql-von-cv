# Quản Lý Vốn CV - PWA

Ứng dụng quản lý vốn vay, hợp đồng khách hàng, lãi suất. Hoàn toàn offline, an toàn trên thiết bị.

## Tính năng PWA
- Cài đặt như app trên điện thoại (Android/iOS)
- Hoạt động offline hoàn toàn
- Cập nhật tự động khi có phiên bản mới

## Cách deploy lên GitHub Pages (dùng Git)

### 1. Cài đặt Git (nếu chưa có)
- Tải Git từ: https://git-scm.com/download/win
- Cài đặt với tùy chọn mặc định

### 2. Chuẩn bị GitHub
1. Tạo repository mới trên GitHub (https://github.com/new)
   - Tên: `ql-von-cv` (hoặc tên bạn thích)
   - Public
   - KHÔNG chọn "Initialize this repository with a README"

### 3. Upload bằng Git (khuyến nghị)

Mở PowerShell hoặc Git Bash trong thư mục này:

```powershell
# Khởi tạo git
git init

# Thêm các file
git add .

# Commit lần đầu
git commit -m "Initial PWA version - Quản Lý Vốn CV"

# Kết nối với GitHub (thay YOUR_USERNAME và YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Đẩy lên GitHub
git branch -M main
git push -u origin main
```

### 4. Kích hoạt GitHub Pages
1. Vào repository trên GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main`
5. Folder: `/ (root)`
6. Save

Link sẽ là: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### 5. Cài app lên điện thoại
- **Android (Chrome)**: Mở link → ⋮ → "Cài đặt ứng dụng" hoặc "Thêm vào màn hình chính"
- **iOS (Safari)**: Mở link → Chia sẻ → "Thêm vào Màn hình chính"

## Cập nhật sau này
```powershell
git add .
git commit -m "Update app"
git push
```

Sau 30-60 giây, app sẽ tự cập nhật khi người dùng mở lại.

## Lưu ý
- Dữ liệu lưu local trên thiết bị (an toàn, không gửi lên server)
- Offline hoạt động ngay sau khi cài
- Lần đầu cần mạng để tải và cài

## Phát triển
File chính: index.html
- manifest.json: cấu hình PWA
- sw.js: Service Worker cho offline

Tạo icon thật bằng cách thay thế icon-192.svg và icon-512.svg.
