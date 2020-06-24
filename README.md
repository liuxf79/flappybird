## 像素小鸟 微信小游戏
使用网络素材跟随教程学习开发的微信小游戏源码，仅供娱乐学习用途，请勿商用

## 源码目录介绍
```
./js
├── base                                   // 定义游戏开发基础类
│   ├── DataStore.js                       // 游戏内数据仓库
│   ├── Resource.js                        // 游戏资源
|   ├── ResourceLoader.js                  // 游戏资源加载类
│   └── Sprite.js                          // 游戏基本元素精灵类
├── player
│   ├── Birds.js                           // 小鸟类
│   └── Score.js                           // 用于展示分数
├── runtime
│   ├── BackGround.js                      // 背景类
│   ├── Pencil.js                        	 // 水管基类
│   ├── UpPencil.js                        // 上方水管类
│   ├── DownPencil.js                      // 下方水管类
│   └── Land.js                            // 地面类
└── Director.js                            // 导演类，用于全局控制

./res                                       // 图片素材
./audio                                     // 音频资源

./game.js                                   // 微信小游戏启动文件
./game.json                                 // 微信小游戏基础配置文件
./project.config.json                       // 微信小游戏基础项目配置文件

```
