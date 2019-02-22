<template>
  <div :id="id"
       class="radar"
       :team="team"
       :ave="ave"></div>
</template>
<script>
export default {
  props: {
    id: {
      type: String
    },
    team: {
      type: Array
    },
    ave: {
      type: Array
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.MyEcharts = this.$echarts.init(document.getElementById(this.id))
      console.log(this.team)
      this.MyEcharts.clear()
      window.onresize = () => {
        this.MyEcharts.resize()
      }
      // 绘制图表
      this.MyEcharts.setOption({
        legend: {
          data: ['此战队', '同类型均值']
        },
        tooltip: {},
        radar: [
          {
            textStyle: {
              color: '#8992a7',
              backgroundColor: '#fff',
              fontSize: 4,
              borderRadius: 3,
              padding: [3, 5]
            },

            indicator: [
              { text: '对战场次', max: 200 },
              { text: '年龄指数', max: 30 },
              { text: '胜率指数', max: 1 },
              { text: '话题度', max: 2000 }
            ],
            center: ['50%', '50%'],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',

            name: {
              formatter: '【{value}】',
              textStyle: {
                color: '#72ACD1'
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  'rgba(114, 172, 209, 0.2)',
                  'rgba(114, 172, 209, 0.4)',
                  'rgba(114, 172, 209, 0.6)',
                  'rgba(114, 172, 209, 0.8)',
                  'rgba(114, 172, 209, 1)'
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }
        ],
        series: [
          {
            type: 'radar',
            //  radarIndex: 1,
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                label: {
                  normal: {
                    show: true
                  }
                },
                value:this.team,
                name: '此战队',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                }
              },
              {
                value: this.ave,
                name: '同类型均值',
                areaStyle: {
                  normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style>
.radar {
  height: 400px;
  width: 400px;
}
</style>
     
     