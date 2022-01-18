## Github workflow

- Khi bắt đầu dự án cần fork repo **https://github.com/Tenaity/leamaz.git** về
- Tiếp đó tiên hành clone code từ repo đã fork nói trên **[username]/leamaz**
- Sau khi clone sẽ di chuyển vào folder vừa clone để add thêm repo chính của dự án **framgia/leamaz** với lệnh sau nếu sử dụng SSH key:
```
git remote add leamaz git@github.com:Tenaity/leamaz.git
```
hoặc nếu sử dụng https
```
git remote add leamaz https://github.com/Tenaity/leamaz.git
```
- Branch chính của dự án là **master**
- Mỗi tính năng mới hoặc bug fix mới sẽ làm theo flow như sau
1. Đảm bảo code mới nhất ở nhánh develop dưới local tương đương với nhánh mới nhất trên server bằng cách chạy 2 lệnh:
```
git checkout master
git pull leamaz master
```

2. Checkout một nhánh mới cho tính nắng cần làm

```
git checkout -b feat/login
```

3. Sau khi code xong tiến thành commit code
```
git add .
git commit -m"feat: login"
```

4. Giả sử sau khi code xong tính năng login trong nhánh *feat/login* nói trên và gửi chuẩn bị gửi pull request mà thấy branch develop trên server có code mới của các bạn khác thì cần chạy lệnh như sau trước khi tạo pull request:
```
git checkout master
git pull leamaz master
git checkout feat/login
git rebase master
```
*Sau khi rebase phát hiện có conflict thì chủ động xử lý
```
(no branch)
fix conflict
add
rebase --continue
push origin new_branch -f
```
*Trường hợp nếu nhánh master trên repo chính không có code mới thì có thể bỏ qua bước 4

5. Push nhánh **feat/login** vừa làm lên repo fork về:
```
git push origin feat/login
```

6. Tạo pull request từ branch nói trên trong repo fork về đến branch develop trong repo chính

=> Quá trình nói trên được lặp lại trong toàn bộ chu trình phát triển của dự 

## How to merge multi commits?
```
commit --amend
or 
rebase -i: git rebase -i HEAD~n 
```

