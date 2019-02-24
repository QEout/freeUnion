import request from '@/plugin/axios'

export function FindComment (data) {
  return request({
    url: '/getComment',
    method: 'get',
    data
  })
}
