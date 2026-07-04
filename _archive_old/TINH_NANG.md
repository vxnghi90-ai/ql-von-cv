# Hướng Dẫn Sử Dụng - Ứng Dụng Quản Lý Vốn CV (VIP Offline)

**Phiên bản:** Bản chuẩn đầy đủ tính năng - Offline hoàn toàn  
**File chính:** `Quản-Lý-Vốn-CV-Full.html`

---

## Mục lục

1. Giới thiệu & Yêu cầu
2. Cách chạy & Cài đặt (PC + iPhone PWA)
3. Giao diện & Menu chính
4. Tính năng chi tiết (hướng dẫn từng bước)
   - Dashboard Tổng quan
   - Quản lý Khách hàng
   - Quản lý Nguồn Vốn
   - Quản lý Hợp đồng vay
   - Ghi nhận Thanh toán & Thu tiền
   - Theo dõi Tiền thu hộ nhân viên
   - Sao lưu & Khôi phục dữ liệu
5. Bảng dữ liệu Demo chi tiết
6. Mẹo sử dụng & Lưu ý quan trọng
7. Các tính năng đã loại bỏ (Online/Cloud)

---

## 1. Giới thiệu

Ứng dụng **Quản Lý Vốn CV** là công cụ chuyên nghiệp dành cho người cho vay, tiệm cầm đồ, hoặc ai cần quản lý vốn vay nhiều nguồn.

**Điểm nổi bật:**
- **Offline 100%**: Mở 1 lần là dùng được mãi, không cần internet.
- **Quản lý vốn thông minh**: Hỗ trợ nhiều nguồn vốn (tự có, vay gia đình, vay ngân hàng) với lãi suất khác nhau.
- **Giao diện VIP đẹp**: Card trực quan, bảng rõ ràng, responsive tốt trên điện thoại.
- **An toàn & đơn giản**: Dữ liệu lưu cục bộ, dễ backup bằng 1 nút.

---

## 2. Cách chạy & Cài đặt

### Trên máy tính (PC)
1. Double-click file `Quản-Lý-Vốn-CV-Full.html`
2. Nếu lần đầu chậm, đợi 2-3 giây.
3. Khuyến nghị dùng Chrome hoặc Edge mới nhất.
4. **Hard reload** lần đầu (Ctrl + Shift + R) nếu giao diện lạ.

### Trên iPhone (PWA - giống app thật)
1. Mở file bằng Safari.
2. Nhấn nút Chia sẻ (hình vuông + mũi tên lên).
3. Chọn **"Thêm vào Màn hình chính"**.
4. Sau đó có icon riêng, chạy full screen, không cần Safari.

**Lưu ý quan trọng:** Dữ liệu chỉ nằm trên thiết bị này. Hãy thường xuyên **Xuất dữ liệu (JSON)** để backup.

---

## 3. Giao diện & Menu chính

Ứng dụng có **Sidebar bên trái** (menu) và khu vực nội dung bên phải.

### Các mục trong Sidebar:
- **Tổng quan Dashboard** → Xem tổng hợp vốn, lợi nhuận, chi phí ngay lập tức.
- **Khách hàng** → Quản lý danh sách khách vay.
- **Nguồn Vốn** → Quản lý các nguồn tiền bạn đang dùng để cho vay.
- **Hợp đồng** → Thêm, xem, thu tiền các hợp đồng vay.
- **Nhật ký dòng tiền / Thu hộ** → Xem lịch sử thu tiền và tiền đang do nhân viên giữ.
- **Cài đặt & Sao lưu** → Xuất/nhập dữ liệu, reset demo.

---

## 4. Tính năng chi tiết (Hướng dẫn từng bước)

### 4.1 Dashboard Tổng quan (Màn hình chính)

Khi mở app bạn sẽ thấy ngay 4 thẻ lớn:

- **TỔNG VỐN ĐI VAY**: Tổng số tiền đang cho vay ra.
- **LỢI NHUẬN RÒNG THỰC TẾ**: Lãi thực nhận sau khi trừ chi phí vay vốn.
- **PHÍ LÃI NGUỒN ĐI VAY**: Số tiền bạn phải trả lãi cho các nguồn vốn bạn vay.
- **TỔNG LÃI CÒN NỢ**: Lãi khách còn nợ bạn.

**Bên dưới** có bảng phân tích chi tiết theo từng nguồn vốn:
- % vốn đang dùng
- Lãi phải trả hàng tháng
- Tiền đã thu từ khách
- Trích quỹ bù (nếu nguồn vốn bị âm)

**Bảng "Tiền mặt nhân viên thu hộ đang cầm"**: Rất quan trọng! Hiện số tiền nhân viên đang giữ (chưa nộp về quỹ). Có nút "Duyệt nộp két" để chuyển về quỹ chính thức.

**Giao dịch thu tiền gần đây**: Danh sách 10-20 khoản thu mới nhất.

**Hướng dẫn sử dụng nhanh**:
- Mở app → Xem ngay Dashboard để biết tình hình vốn hôm nay.
- Sau khi thu tiền của nhân viên → vào bảng thu hộ → bấm "Duyệt nộp két".

### 4.2 Quản lý Khách hàng

**Vị trí**: Menu → Khách hàng

**Chức năng**:
- Thêm khách mới (Mã KH tự sinh hoặc tự đặt, Tên, SĐT, Địa chỉ, Ghi chú).
- Sửa thông tin khách.
- Xóa khách (chỉ xóa được nếu chưa có hợp đồng đang vay).
- Tìm kiếm theo tên/SĐT.

**Bước thực hiện thêm khách**:
1. Vào Khách hàng.
2. Nhấn nút **Thêm khách hàng**.
3. Điền thông tin → Lưu.

**Mẹo**: Nên đặt Mã KH theo kiểu "KHX 1", "KHX 2"... để dễ quản lý (như dữ liệu demo).

### 4.3 Quản lý Nguồn Vốn (Rất quan trọng)

**Vị trí**: Menu → Nguồn Vốn

Ứng dụng hỗ trợ theo dõi **nhiều nguồn vốn cùng lúc**:

Ví dụ nguồn vốn demo:
- **Vốn Tự Có** → Lãi suất 0%
- **Vay Ngoài (Gia đình)** → Lãi 1.2%/tháng
- **Vay Ngân Hàng A** → Lãi 0.85%/tháng

**Mỗi nguồn vốn có**:
- Số dư hiện tại
- % đang được dùng để cho vay
- Lãi phải trả hàng tháng
- Lịch sử tăng/giảm vốn (bảng "Lịch sử biến động")

**Hướng dẫn thêm / điều chỉnh nguồn vốn**:

**Thêm nguồn vốn mới**:
1. Vào Nguồn Vốn.
2. Nhấn **Thêm nguồn vốn**.
3. Nhập tên nguồn, lãi suất tháng, ghi chú → Lưu.

**Điều chỉnh vốn (Tăng vốn / Rút vốn)**:
1. Trong bảng Nguồn Vốn, nhấn nút **Biến động vốn** của nguồn đó.
2. Chọn loại: Tăng vốn (vay thêm) hoặc Giảm vốn (trả bớt).
3. Nhập số tiền, ngày, nội dung.
4. Lưu → Số dư nguồn vốn sẽ tự động cập nhật.

**Tại sao quan trọng?**  
Mỗi hợp đồng bạn cho vay sẽ được "gắn" vào 1 nguồn vốn. App sẽ tự tính chi phí lãi bạn phải chịu từ nguồn đó.

### 4.4 Quản lý Hợp đồng vay (Cầm đồ / Tín chấp)

**Vị trí**: Menu → Hợp đồng

**Hợp đồng bao gồm**:
- Thông tin khách
- Số tiền vay
- Lãi ngày trên triệu (ví dụ: 2500 = 2.500đ/ngày/triệu)
- Ngày vay + Ngày đáo hạn
- **Tài sản đảm bảo** (rất chi tiết cho cầm đồ):
  - Loại tài sản (Xe máy, Điện thoại, Vàng...)
  - Tên tài sản (Honda SH 150i, iPhone 14...)
  - Biển kiểm soát
  - Số khung, Số máy
- Nguồn vốn đang tài trợ hợp đồng này (rất quan trọng!)

**Hướng dẫn thêm hợp đồng mới (có tài sản)**:

1. Vào **Hợp đồng** → nhấn **Thêm hợp đồng**.
2. Chọn khách hàng (hoặc thêm khách mới ngay trong form).
3. Nhập Số tiền vay.
4. Nhập **Lãi ngày trên triệu** (đây là cách tính lãi phổ biến ở Việt Nam).
5. Chọn ngày vay và hạn trả.
6. **Phần Tài sản** (nếu là cầm đồ):
   - Chọn loại (Xe máy)
   - Nhập tên (Honda Vision)
   - Biển số, Số khung, Số máy.
7. Chọn **Nguồn vốn** đang dùng để cho vay hợp đồng này.
8. Ghi chú (nếu có) → Lưu.

**Thao tác trên hợp đồng**:
- **Thu tiền**: Bấm nút "Thu tiền" → nhập số tiền, chọn loại (Lãi / Gốc / Tất toán), ghi chú, trạng thái (Nhân viên giữ hay đã nộp).
- **Sửa hợp đồng**: Bấm "Sửa".
- **Xóa hợp đồng**: Chỉ xóa được khi chưa có phiếu thu.

### 4.5 Ghi nhận Thanh toán & Quản lý Thu hộ

**Cách thu tiền**:
1. Trong danh sách Hợp đồng → bấm **Thu tiền** của hợp đồng cần thu.
2. Chọn loại thanh toán:
   - Thu lãi
   - Thu gốc
   - Tất toán (thu hết phần còn lại)
3. Nhập số tiền.
4. Ghi chú (ví dụ: "Lãi tháng 9").
5. **Trạng thái thu**:
   - "Đã nộp" → tiền về quỹ luôn.
   - "Nhân viên giữ" → tiền đang ở nhân viên (sẽ xuất hiện ở bảng thu hộ).
6. Lưu.

**Quản lý tiền nhân viên đang cầm**:
- Vào Dashboard hoặc mục "Thu hộ".
- Bảng "Tiền mặt nhân viên thu hộ đang cầm" sẽ liệt kê các khoản đang ở nhân viên.
- Bấm **"Duyệt nộp két"** → chuyển tiền về quỹ chính thức, cập nhật dòng tiền.

Đây là tính năng rất thực tế cho các tiệm có nhân viên đi thu.

### 4.6 Sao lưu & Khôi phục dữ liệu (Rất quan trọng!)

**Xuất dữ liệu (Backup)**:
- Vào phần Cài đặt / Sao lưu.
- Nhấn **Xuất dữ liệu (JSON)**.
- Tệp sẽ tải về máy (tên kiểu `backup_2025-... .json`).
- Nên backup sau mỗi ngày làm việc hoặc khi có thay đổi lớn.

**Nhập dữ liệu**:
- Nhấn **Nhập dữ liệu từ file JSON**.
- Chọn file backup → xác nhận.
- Dữ liệu sẽ được thay thế.

**Reset về dữ liệu demo**:
- Dùng khi muốn thử lại từ đầu.
- Nhấn nút Reset → xác nhận.
- App sẽ load lại bộ dữ liệu demo (9 khách + nhiều hợp đồng + nguồn vốn).

**Khuyến nghị mạnh**:
- Luôn backup trước khi Reset.
- Lưu file backup vào Google Drive / USB để phòng trường hợp hỏng máy.

---

## 5. Bảng dữ liệu Demo chi tiết (rất hữu ích để thử)

Ứng dụng có sẵn dữ liệu demo thực tế (không phải dữ liệu giả ngẫu nhiên).

### Khách hàng mẫu:
| Mã KH | Tên khách hàng     | SĐT          | Địa chỉ                  | Ghi chú             |
|-------|--------------------|--------------|--------------------------|---------------------|
| KH1   | Trọng (KHX 1)     | 0587560719  | Tiên Lãng, Hải Phòng    | Khách hàng thân thiết |
| KH2   | A Cường (KHX 2)   | 0934386286  | Tiên Lãng, Hải Phòng    |                     |
| KH3   | Bằng (KHX 3)      | 0898263358  | Tiên Lãng, Hải Phòng    |                     |
| ...   | ...                | ...         | ...                     |                     |

### Hợp đồng mẫu (một số ví dụ):
- **HDVT1**: 6.000.000đ, khách KH1, xe máy Yamaha Exciter, biển 15-B1 999.99, lãi 2500/tr/ngày, nguồn VAY_NGOAI_1.
- **HDVT3**: 5.000.000đ, khách KH3, nguồn NGUON_TU_CO (vốn tự có).
- **HDVT7**: Đã tất toán, nguồn vốn tự có.

### Thanh toán mẫu:
Có cả "Nhân viên giữ tiền" (VD: HDVT3 và HDVT5 đang ở nhân viên Nguyễn Văn Nam và Trần Văn Bắc).

### Nguồn vốn mẫu:
- NGUON_TU_CO: 150 triệu, lãi 0%
- VAY_NGOAI_1: 300 triệu, lãi 1.2%/th
- VAY_NGAN_HANG_A: 100 triệu, lãi 0.85%/th

Bạn có thể xóa hết và tạo dữ liệu thật của mình.

---

## 6. Mẹo sử dụng & Lưu ý quan trọng

### Mẹo hay:
- Khi cho vay hợp đồng mới → **bắt buộc chọn đúng nguồn vốn** đang tài trợ → giúp tính lợi nhuận ròng chính xác.
- Dùng trạng thái "Nhân viên giữ" cho các khoản thu tiền chưa về quỹ → dễ kiểm soát.
- Cuối ngày nên vào Dashboard xem "Lợi nhuận ròng thực tế" và "Phí lãi nguồn" để biết thực tế mình lãi bao nhiêu sau khi trừ chi phí vốn.
- Trên iPhone nên dùng chế độ PWA (Add to Home Screen) để có trải nghiệm tốt hơn.

### Lưu ý bắt buộc:
- **Dữ liệu chỉ ở máy này**. Muốn dùng chung 2 máy → phải tự Export/Import JSON.
- **Backup là vua**: Xuất JSON ít nhất 1 lần/tuần hoặc sau mỗi ngày bận.
- Không nên xóa dữ liệu trình duyệt (cache, local storage) nếu không muốn mất hết.
- File này chạy tốt trên file:// (mở trực tiếp), không cần server.

---

## 7. Các tính năng đã loại bỏ (theo yêu cầu trước)

- Cloud Sync / Đồng bộ dữ liệu qua Firebase (đã gỡ bỏ hoàn toàn).
- Đăng nhập bằng email/password online.
- Màn hình setup cấu hình Firebase.

Bây giờ ứng dụng là **bản offline chuẩn**, tập trung vào tính năng cốt lõi, nhanh, đơn giản, không phụ thuộc mạng.

---

**Phiên bản tài liệu**: 1.1 (cập nhật sau khi loại bỏ online)  
**Tác giả tài liệu**: Tạo từ yêu cầu người dùng + phân tích code ứng dụng.

Nếu cần thêm hướng dẫn chi tiết hơn, ảnh chụp màn hình thực tế, hoặc xuất thêm phiên bản PDF/HTML đẹp, cứ bảo mình nhé!
