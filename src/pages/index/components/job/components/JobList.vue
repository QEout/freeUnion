<template>
  <div class="pack basic"
       @click='cliList(depict,value)'>
    <p class="title">{{title}}</p>
    <p>
      <span class="cost">{{pay}}</span>{{addr}}
    </p>
    <div class="date">{{date}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    pay: {
      type: String,
      required: true
    },
    addr: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    depict: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    cliList(depict, value) {
      let data = {
        dep: depict,
        val: value
      }
      console.log(data)
      this.$emit('toggleD', data)
    }
  }
}
</script>
<style>
p {
  text-align: center;
  color: #666;
  font-size: 0.7rem;
  margin-bottom: 5px;
}
p.title {
  font-size: 0.8rem;
  font-weight: 700;
  background: #12c2e9;
  color: #f0f0f0;
  padding: 10px 0;
  margin: 0;
}
p .cost {
  display: block;
  font-weight: 700;
  font-size: 2rem;
}
.date {
  font-weight: 100;
  font-size: 0.7rem;
  text-align: center;
  color: #999;
  padding: 5px;
}
</style>