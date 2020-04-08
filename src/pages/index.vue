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
        class="text_3"
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
    <form-container
      :inline="false"
      position="left"
      primary-text="搜索"
      :have-second="true"
      second-text="重置"
      v-roles="''"
      class="material_4"
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
        :rules="formInputRules_2"
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
        :rules="formInputRules_3"
        v-roles="''"
      ></form-input>
    </form-container>
    <config-text
      :size="12"
      :weight="false"
      :italic="false"
      :underline="false"
      color="#000"
      vertical="left"
      inner-text="这是文本"
      :url_type="0"
      :page_new_window="false"
      :href_new_window="false"
      v-roles="''"
    ></config-text>
    <ve-histogram
      :data="veHistogramData"
      :grid="veHistogramGrid"
      :legend="veHistogramLegend"
      height="300px"
      v-roles="''"
    ></ve-histogram>
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
      ],
      formInputRules_2: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      formInputRules_3: [
        {
          required: false,
          message: "",
          trigger: []
        }
      ],
      veHistogramData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          {
            日期: "1/1",
            访问用户: 1393,
            下单用户: 1093,
            下单率: 32
          },
          {
            日期: "1/2",
            访问用户: 3530,
            下单用户: 3230,
            下单率: 26
          },
          {
            日期: "1/3",
            访问用户: 2923,
            下单用户: 2623,
            下单率: 76
          },
          {
            日期: "1/4",
            访问用户: 1723,
            下单用户: 1423,
            下单率: 49
          },
          {
            日期: "1/5",
            访问用户: 3792,
            下单用户: 3492,
            下单率: 32.3
          },
          {
            日期: "1/6",
            访问用户: 4593,
            下单用户: 4293,
            下单率: 78
          }
        ]
      },
      veHistogramGrid: {
        top: 35,
        bottom: 10
      },
      veHistogramLegend: {
        top: 5
      }
    }
  },
  mounted: function() {},
  watch: {},
  methods: {},
  destroyed: function() {}
}
</script>
<style lang="less" scoped="scoped">
.text_3 {
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 90px;
}
.material_4 {
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 12px;
}
</style>
