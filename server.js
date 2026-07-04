const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

let PORT = 3000;

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/Quản-Lý-Vốn-CV-Full.html' : req.url;
  urlPath = urlPath.split('?')[0];
  
  const filePath = path.join(__dirname, decodeURIComponent(urlPath));
  const ext = path.extname(filePath).toLowerCase();
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Không tìm thấy tệp: ' + urlPath);
      return;
    }
    res.writeHead(200, { 
      'Content-Type': MIME_TYPES[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache, must-revalidate, private'
    });
    res.end(data);
  });
});

function startServer(port) {
  server.listen(port, () => {
    const localIP = getLocalIP();
    console.log('==================================================');
    console.log('🚀 HỆ THỐNG MÁY CHỦ BẢO MẬT ĐÃ KHỞI CHẠY!');
    console.log(`- Mở trên máy tính: http://localhost:${port}`);
    console.log(`- Mở trên iPhone:   http://${localIP}:${port}`);
    console.log('==================================================');
    console.log('Để cài đặt ứng dụng lên màn hình iPhone:');
    console.log('1. Kết nối iPhone và máy tính vào cùng mạng Wi-Fi.');
    console.log(`2. Mở trình duyệt Safari trên iPhone, truy cập: http://${localIP}:${port}`);
    console.log('3. Bấm nút "Chia sẻ" (Share icon ở dưới màn hình Safari).');
    console.log('4. Chọn "Thêm vào MH chính" (Add to Home Screen) -> chọn "Thêm".');
    console.log('==================================================');
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`⚠️ Cổng ${PORT} đang bận. Đang tự động thử cổng ${PORT + 1}...`);
    PORT++;
    startServer(PORT);
  } else {
    console.error('Lỗi khởi chạy máy chủ:', err);
  }
});

startServer(PORT);
