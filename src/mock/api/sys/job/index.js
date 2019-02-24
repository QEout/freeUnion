import Mock from 'mockjs'
const jobDB = [
  {
    id: '001',
    JName: '精选',
    JPay: '20￥/h',
    JAdd: '弋江区德盛广场辣味火锅',
    JDate: '2018/11/11',
    depict: '好棒啊',
    value: '30'
  },
  {
    id: '002',
    JName: '最热',
    JPay: '10￥/h',
    JAdd: '弋江区德盛广场甜味火锅',
    JDate: '2018/11/11',
    depict: '好帅啊',
    value: '50'
  },
  {
    id: '003',
    JName: '最新',
    JPay: '30￥/h',
    JAdd: '弋江区德盛广场酸味火锅',
    JDate: '2018/11/11',
    depict: '好shh啊',
    value: '80'
  }
]
Mock.mock('/api/getJob', 'get', ({ url, type, body }) => {
  return {
    job: jobDB
  }
})
