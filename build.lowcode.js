/*
 * @Description: 
 * @Author:  
 * @Date: 2023-06-02 11:15:03
 * @LastEditTime: 2023-06-05 15:02:25
 * @LastEditors:  
 */
const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: "@alilc",
        // 添加其他资产包
        // extraAssets: [
        //   ""
        // ]
      },
    ],
  ],
};
