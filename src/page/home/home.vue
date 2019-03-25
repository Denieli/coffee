<template>
  <div class="cof-home-container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="配色方案">
        <el-button @click="additem">新增配色方案 + </el-button>
      </el-form-item>
      <el-form-item label="方案列表">
        <div v-for="(item,index1) in list" :key="index1" class="conf-item">
          <el-select v-model="item.value" placeholder="请选择配色方案">
            <el-option v-for="option in item.options" :key="option.value" :label="option.value" :value="option.value">
              <span
                :style='"background-color:"+option.color+";height:20px;width:60px; float:left;margin-top:7px; "'></span>
              <span style="float: right;">{{ option.value }}</span>
            </el-option>
          </el-select>
          <el-button type="info" v-for="(bgcolor,index2) in item.color">{{bgcolor.name}}</el-button>
          <el-button icon="el-icon-plus" @click="plus(index1)"></el-button>
          <el-button icon="el-icon-minus"  @click="minus(index1)"></el-button>
          <el-button icon="el-icon-delete"  @click="remove(index1)" type="text"></el-button>
        </div>
      </el-form-item>
    </el-form>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        },

        list: [{
            color: [{
              name: "主",
              rgb: "red"
            }],
            options: [{
              value: '蓝色',
              color: 'blue'
            }, {
              value: '绿色',
              color: 'green'
            }, {
              value: '灰色',
              color: 'gray'
            }],
            value: ''
          },
          {
            color: [{
                name: "主",
                rgb: "red"
              },
              {
                name: "夹1",
                rgb: "gray"
              }
            ],
            options: [{
              value: '蓝色',
              color: 'blue'
            }, {
              value: '绿色',
              color: 'green'
            }, {
              value: '灰色',
              color: 'gray'
            }],
            value: ''
          }
        ]
      }
    },
    methods: {
      toObj(item1,item2,value1,value2){
          var obj = {};
          obj[item1] =value1;
          obj[item2] =value2;
          return obj
      },

      additem() {
        let color = [];
        color.push(this.toObj("name","rgb","主","gray"))

        let options = [];
        options.push(this.toObj("value","color","蓝色","blue"))
        options.push(this.toObj("value","color","绿色","green"))
        options.push(this.toObj("value","color","灰色","gray"))

        this.list.push({
          color,options
        })
      },
     
      plus(index){
        let value;
        const len=this.list[index]["color"].length;
        if(len==0){
           value="主";
        }else{
           value="夹"+this.list[index]["color"].length;
        }
       
        this.list[index]["color"].push(this.toObj("name","rgb",value,"gray"))
      },
      minus(index){
        this.list[index]["color"].pop();
      },
      remove(index){
       
      }
  }
}
</script>
<style lang="scss" scoped>
  .cof-home-container {
    margin-top: 30px;

    .el-button--text {
      color: #ccc;
    }

    .conf-item {
      margin-top: 10px;
    }
  }

</style>
