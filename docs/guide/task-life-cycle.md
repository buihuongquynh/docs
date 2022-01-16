
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
Open: Task cần được nhận làm. Người được gán thực sự làm việc sẽ chuyển trạng thái tiếp theo.

Analysis: Task đang được phân tích bởi người nhận. Phân tích xong vấn đề. Điền thời gian bỏ ra để đánh giá bằng label và chuyển tiếp cho leader

Reviewing: Phân tích đang cần comfirm xác nhận bởi người nắm rõ vấn đề trong team (bắt buộc). Sau khi review chuyển lại cho người phân tích và đặt trạng thái về Open.

In progress: Task đang làm (có link với pull request)

Close: Task đã hoàn thành (các linkings đã Close)

Pull request: 
```
In progress > Reviewing > Merged > Work > Testing > Staging > Testing > Production > Testing > Close
```
In progress: Pull request đang mở để làm.

Reviewing: Đang đợi review. Yêu cầu được approval bởi các lead.

Merged: Đã được merged

Work: đã deploy lên work

Testing: Chờ test

Staging: đã deploy lên staging

Production: đã deploy lên production 

Close: Hoàn thành
