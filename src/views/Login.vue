<template>
  <!-- 布局组件的使用 -->
  <el-row type="flex" justify="center" align="middel" class="container">
    <!-- 登录表单的div -->
    <div class="form-wrap">
      <h3>登录</h3>
      <!-- model：表单的数据对象 -->
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      //表单数据对象
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          // required代表是否必填, message错误时候的提示,trigger什么时候触发
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //表单提交
    submitForm() {
      //validate方法是element表单才有的
      this.$refs.form.validate(valid => {
        //vaild为真的时候提交表单
        if (valid) {
          //强求请求登录接口
          this.$axios({
            url: "/login",
            method: "post",
            data: this.form
          }).then(res => {
            //如果登陆失败提示用户重新登录
            if (res.data.statusCode === 401) {
              this.$message.error(res.data.message);
              return;
            }
            //提示用户登陆成功
            this.$message.success(res.data.message);
            //将请求登录后后台返回的数据存储到本地存储中
            const { data } = res.data;
            localStorage.setItem("user", JSON.stringify(data));

            //跳转到后台管理页面
            setTimeout(() => {
              this.$router.push("/");
            }, 1000);
          });
        }
      });
    },
    //表单重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: #f2f2f2;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
  .form-wrap {
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    background: #ffffff;
    margin: auto;
  }
}
</style>