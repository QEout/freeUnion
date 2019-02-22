import request from '@/plugin/axios'

export function FindJob(data) {
    return request({
        url: '/getJob',
        method: 'post',
        data
    })
}