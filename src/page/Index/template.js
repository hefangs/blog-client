import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

  export default {
    data () {
      return {

      }
    },
    methods:{
      onClick1 (){
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        })
      },
      onClick2 (){
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: '成功，这是一条成功消息'
            });
          }
        });
      },
    }
  }
