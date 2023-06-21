
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const HoverPnelMeta: ComponentMetadata = {
  "componentName": "HoverPnel",
  "title": "HoverPnel",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group": "精选组件",
  "category": "基础类",
  "npm": {
    "package": "wangyf-material-demo",
    "version": "0.1.0",
    "exportName": "HoverPnel",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "标题"
          },
          "tip": "title | 标题"
        },
        "name": "title",
        "description": "标题",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": "标题"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "discription",
            "zh-CN": "描述"
          }
        },
        "name": "discription",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": "描述"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "link",
            "zh-CN": "链接"
          }
        },
        "name": "link",
        "setter": {
          "componentName": "StringSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": ""
              }
            }
          },
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "backgroundImage",
            "zh-CN": "背景图片"
          }
        },
        "name": "backgroundImage",
        "setter": {
          "componentName": "StringSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": ""
              }
            }
          },
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "HoverPnel",
    "screenshot": "https://tianshu.alicdn.com/c2e0a8a2-9b6a-48b5-ba85-9b77ce16a89e.png",
    "schema": {
      "componentName": "HoverPnel",
      "props": {}
    }
  }
];

export default {
  ...HoverPnelMeta,
  snippets
};
