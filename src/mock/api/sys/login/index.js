import Mock from 'mockjs'

const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    name: '管理员'
  },
  {
    username: 'user',
    password: 'user',
    uuid: 'user-uuid',
    name: '游客'
  }
]

Mock.mock('/api/login', 'post', ({ body }) => { // 原句({ url, type, body })
  const bodyObj = JSON.parse(body)
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password)
  if (user) {
    return {
      code: 0,
      msg: '登录成功',
      data: {
        ...user,
        token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7dg'
      }
    }
  } else {
    return {
      code: 401,
      msg: '用户名或密码错误',
      data: {}
    }
  }
})
