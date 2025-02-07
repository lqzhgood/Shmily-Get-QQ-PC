/*
 * @Description:
 * @Author: lqzh
 * @Date: 2020-02-28 15:47:38
 * @LastEditTime: 2023-11-25 23:10:58
 */

const path = require('path');

const config = {
    // 用于 mht 匹配 消息是谁发出的
    direction: {
        // 这里通过昵称判断, 因为昵称可能被修改, 因此存在多个
        // 写多了没关系
        // 如果写少了, 程序会抛出 ❌ name 无匹配 |${昵称}|
        // 并且记录在 /dist/temp/NAME_NOT_IN_CONFIG.json 中
        // 此时从 NAME_NOT_IN_CONFIG.json 获取填入下方 重新执行即可
        name: {
            // go 代表自己
            go: ['自己的昵称1 ', '昵称2'],
            // come 代表对方
            come: ['对方的昵称1', '昵称2', '昵称3'],
        },
        // 此处QQ内部硬编码 因此不需要修改
        // 根据颜色 判断发送方向(粗略)
        // 因为每节的第一条颜色是错的. 所以需要以上 name 进行精准判断
        // 错误的示例可以查看 docs\config.js\config-color.jpg
        style: {
            //自己是绿色的 right
            go: 'color:#42B475;padding-left:10px;',
            // 对方是紫色的 left
            come: 'color:#006EFE;padding-left:10px;',
        },
    },

    // 用于在 Shmily 中显示 发送/接受 者信息
    // 因为实际的昵称可以有好几个
    // 默认会取 .mht 中显示的, 但因为某些 .mht 的 bug 取不到名字. 详见 "Name 昵称的规则"
    // 就会取这里的作为默认值兜底
    
    // 自己的 QQ 号码 和 用于默认显示的昵称
    rightNum: '110',
    rightName: '自己要显示的昵称',

    // 对方的 QQ 号码 和 用于默认显示的昵称
    leftNum: '119',
    leftName: '对方要显示的昵称',

    // Name 昵称的规则:
    // 每条消息只有发送人 , 那么第一条 msg 发送者 就不知道接收人的名字
    // 所以需要从后一条中匹配， 如果从后一条里面匹配到了 就回写之前未匹配的
    // 如果都没匹配到 才会用这里的 Name 。

    // #######

    // 资源的 根文件夹 名称, 此目录下会存放 图片 表情 等资源, 资源文件结构如下
    //  资源文件 根文件夹   资源路径
    //  /data/  $rootPath  ./emoticon/5e671f8149d1b094c44aa0f5232f9cfd.gif
    // 建议使用  QQ_PC_MHT-${对方QQ号}-${时间} 的格式用于和以后导出的数据区分
    rootPath: 'QQ_PC_MHT-12345678-20230101',

    // 以下无需修改
    DIST_DIR: path.join(__dirname, './dist/'),
};

config.DIST_DIR_TEMP = path.join(config.DIST_DIR, '_temp');

config.imgWebPublicDir = `./data/${config.rootPath}/img`;
config.faceWebPublicDir = `./data/${config.rootPath}/face`;
config.fileWebPublicDir = `./data/${config.rootPath}/file`;

module.exports = config;
