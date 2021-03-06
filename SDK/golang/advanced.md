<!--
order: 2
-->
# 高级用法

## 私钥管理

### 私钥存储模式

Golang SDK 支持四种私钥存储模式：

- Level DB：默认存储模式，私钥的 DB 文件持久化存储于 `$HOME/irita-sdk-go` 目录，适用于应用服务器控制少量链账户的场景；
- 文件模式：类似 Level DB 的存储方式，主要区别在于用户可以自定义持久化存储的路径；
- 内存模式：私钥导入后仅存储于内存中，服务进程关闭即丢弃，适用于应用服务器控制少量链账户以及测试的场景；
- 自定义模式：通过实现 KeyDAO 接口，可以灵活地自定义私钥存储方式而不需要关心私钥的处理逻辑，比如可以将私钥密文存储于关系型数据库而对称密钥由终端用户持有，适用于平台化应用大量托管用户私钥的场景；

配置方式：

- Level DB：无需配置
- 内存模式：
    ```go
 	options := []types.Option{
 		// 私钥存储使用内存模式
 		types.KeyDAOOption(store.NewMemory(nil)),
 	}
 
 	// 初始化 SDK 配置
 	cfg, err := types.NewClientConfig("http://47.100.192.234:26657", "ws://47.100.192.234:26657", "47.100.192.234:9090", "testing", options...)

    ......
    ```
- 自定义模式：

