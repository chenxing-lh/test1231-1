<template>
  <div>
    <form-check
      label="多选框"
      :is-label-visible="true"
      :options="formCheckOptions"
      :max="2"
      :min="1"
      :default-value="formCheckDefaultvalue"
      :status="0"
      :select-value="1"
      :select-option="formCheckSelectoption"
      :require="true"
      require-tips="121312"
      :is-show-min="true"
      :is-show-max="true"
      :is-show-customer="false"
      :rules="formCheckRules"
      v-roles="''"
    ></form-check>
    <form-container
      :inline="false"
      position="left"
      primary-text="搜索"
      :have-second="true"
      second-text="重置"
      v-roles="''"
    >
      <form-input
        :in-container="true"
        type="text"
        placeholder="请输入"
        label="单行文本"
        :is-label-visible="true"
        :status="0"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules"
        v-roles="''"
      ></form-input>
      <form-input
        :in-container="true"
        type="number"
        placeholder="请输入"
        label="数字框"
        :is-label-visible="true"
        :status="0"
        :step="1"
        :min="2"
        :max="30"
        :require="false"
        :is-show-min="false"
        :is-show-max="false"
        :is-show-customer="false"
        :rules="formInputRules_1"
        v-roles="''"
      ></form-input>
    </form-container>
  </div>
</template>
<script>
export default {
  components: {},
  data: function() {
    return {
      pageName: "首页",
      formCheckOptions: [
        {
          label: "上海",
          value: 1
        },
        {
          label: "北京",
          value: 2
        },
        {
          label: "广州",
          value: 3
        },
        {
          label: "深圳",
          value: 4
        }
      ],
      formCheckDefaultvalue: [],
      formCheckSelectoption: [
        {
          label: "静态数据",
          value: 1
        }
      ],
      formCheckRules: [
        {
          required: true,
          message: "",
          trigger: []
        }
      ],
      formInputRules: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_1: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ]
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped"></style>
