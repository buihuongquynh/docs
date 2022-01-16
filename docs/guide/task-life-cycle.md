
### 1. Yêu cầu

Người xử lí: Leader, Manager, Bridge, Owner,...

- Những người có liên quan trao đổi trực tiếp với nhau để hiểu yêu cầu. Viết thành tài liệu bằng lời.
- Chuyển qua phân tích và thiết kế wireframe, UX.
- Xác nhận nhận lại để chuyển qua cho Developer Leader.

### 2. Phân tích

Người xử lí: Đối với Developer Leader

#### Đầu vào

Yêu cầu tính năng mô tả bằng lời, và UX/UI Design nếu có:

#### Đầu ra

Các phiên bản phát hành

#### Quy trình

- Chia ra nhánh tính năng cụ thể.
- Chia ra thành các bản release.
- Chia ra từng giai đoạn trong mỗi release.
- Chia ra từng task nhỏ trong mỗi giai đoạn.
- Phân tích và hướng dẫn từng task nếu có.
- Phối hợp với Quanlity assurance để hoàn thành task.

### 3. Phát triển

Issue: 
```
Open > Analysis > Reviewing > In progress > Close
```

Pull request: 
```
Open > In progress > Reviewing > Merged > Work > Testing > Staging > Testing > Production > Testing > Close
```

#### Developer

- Task từ DL sẽ phân chia cho các thành viên Developers tương ứng.
- Sau khi nhận task về, Developer chuyển trạng thái từ Open sang Analysis, điền các thông tin: Phân tích hướng thực thi giải quyêt. Gắng thời gian bỏ ra để phân tích.
- Chuyển sang Revewing và gán cho Leader, hoặc thành viên khác xác nhận.
- Sau khi xác nhận cần ước lượng thời gian phát triển. Chuyển sang In progress để bắt đầu phát triển.
- Cộng dồn thời gian phát triển thực tế vào task.
- Sau khi hoàn thành báo cáo trong pull request, chuyển trạng thái về Reviewing.

#### Developer leader

- Review xác nhận hướng giải quyết. Chuyển sang Open
- Review xác nhận và Merged task. Chuyển sang Merged
- Deploy các task có gắn mode tương ứng. Riêng mode Merged Testing ở local

#### Quanlity assurance

- Nhận các task ở mode Merged để trao đổi cùng leader viết thành test-case
- Thực hiện test và re-open, viết báo cáo cho task đó nếu có lỗi.
- Tạo task mới để báo lỗi.
