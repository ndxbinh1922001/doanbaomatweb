# Đồ án bảo mật web
## Những thứ đã làm được:
- hash password khi đăng kí bằng thư viện argon2

- trả về token khi đăng kí bằng thư viện jsonwebtoken

- khi đăng nhập kiểm tra được username với password đã được hash

- đăng nhập thành công trả về accesstoken

```
Chưa cài được hạn sử dụng cho mỗi token
```

- tạo được function verify token đứng giữa để kiểm tra xem request có đúng token thì mới cho phép truy cập vào post