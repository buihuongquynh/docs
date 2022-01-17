import axios from "axios";

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await axios.get("https://api.github.com/users");
        return users.data.map(({ id, login, avatar_url }) => ({
          id,
          login,
          avatar_url,
        }));
      } catch (error) {
        throw error;
      }
    },
    getUser: async (_, args) => {
      try {
        const user = await axios.get(
          `https://api.github.com/users/${args.name}`
        );
        return {
          id: user.data.id,
          login: user.data.login,
          avatar_url: user.data.avatar_url,
        };
      } catch (error) {
        throw error;
      }
    },
    getData: () => {
      return {
        data: `
        # docs
Itoa documents

### Tại sao cần phải viết?

Một trong những vấn đề khi làm việc nhóm là sự hiểu nhau giữa các thành viên trong team.
Mình có thể khăc phục bằng cách trao đổi nhiều hơn. Xác nhận nhiều hơn. Nhưng khi nhóm trở nên lớn.
Thành viên trong nhóm cũng có sự thay đổi liên tục. Hoặc khung giờ làm việc, lịch trình ngày làm việc của mọi người khác nhau. Thì việc này dần trở nên khó khăn hơn. Một chức năng phát triển xong cách khoảng thời gian dài sau đó nâng cấp. Nếu cùng một người thì đây là giao tiếp với chính bản thân mình.

Vậy để giải quyết vân đề này, mọi người cần viết viết và viết. Viết đung là tốn thời gian và làm chậm năng suât của mình. Nhưng đối vơi cac vấn đề trên. Viết là cách giải quyết.

### Viết cái gì, viết như thế nào?

Viết bât cứ cái gì có thể viết. Cách thức xác định cái gì cần viết bao gồm:

- Nếu như mình không làm công việc này nữa. Thì chỉ lại cho ai, chỉ những gì. Suy ra viết những gì học được.
- Nếu như ai đó cần giúp mình, thì mình cần chỉ họ đọc gì, hiểu gì để làm. Suy ra viết nhũng gì hiểu được trong từng trường hợp.
- Nếu như ai đó thay đổi công việc mình đã làm, họ cần lưu ý những gì. Suy ra viết những dự định hoặc rủi ro lường trước với công việc mình đang làm.
        `,
      };
    },
  },
};
