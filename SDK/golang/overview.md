<!--
order: 1
-->
# 基础用法

## 前置条件

- 请使用 go 1.16 或更高版本
- 请使用 go module 管理依赖

## 引入依赖

编辑 go.mod

```
replace (
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.2-alpha.regen.4
	github.com/tendermint/tendermint => github.com/bianjieai/tendermint v0.34.1-irita-210113
)

require (
	github.com/bianjieai/irita-sdk-go v1.1.1-0.20210823135704-f8e5b446eb00
	github.com/bianjieai/opb-sdk-go v0.0.0-20210823140456-5bb465237893
)
```

## 创建客户端

::: tip
本示例使用文昌链测试网的连接参数，如需连接主网，请参考【[主网](../../guide/mainnet.md)】章节，完成账号申请和项目配置。
:::

```go
package main

import (
	"fmt"
	"github.com/bianjieai/irita-sdk-go/modules/nft"
	"github.com/bianjieai/irita-sdk-go/types"
	opb "github.com/bianjieai/opb-sdk-go/pkg/app/sdk"
	"github.com/bianjieai/opb-sdk-go/pkg/app/sdk/model"
	"time"
)

func main() {

	// 初始化 SDK 配置（RPC 地址、WebSocket 地址、GRPC 地址、Chain ID）
	cfg, err := types.NewClientConfig("http://47.100.192.234:26657", "ws://47.100.192.234:26657", "47.100.192.234:9090", "testing")
	if err != nil {
		panic(err)
	}

	// 初始化文昌链网关账号（项目 ID、项目 Key，链账户地址；测试网环境将 authToken 设置为 nil 即可）
	authToken := model.NewAuthToken("TestProjectID", "TestProjectKey", "TestChainAccountAddress")

	// 创建文昌链客户端
	client := opb.NewClient(cfg, &authToken)

	// 导入私钥（助记词模式）
	client.Key.Recover("test_key_name", "test_password", "supreme zero ladder chaos blur lake dinner warm rely voyage scan dilemma future spin victory glance legend faculty join man mansion water mansion exotic")
}
```

## 发送交易

使用创建好的文昌链客户端，向链上发送交易

```go
	// 初始化 Tx 基础参数
	baseTx := types.BaseTx{
		From:     "test_key_name", // 对应上面导入的私钥名称
		Password: "test_password", // 对应上面导入的私钥密码
		Gas:      200000,          // 单 Tx 消耗的 Gas 上限
		Memo:     "",              // Tx 备注
		Mode:     types.Commit,    // Tx 广播模式
	}

	// 使用 Client 选择对应的功能模块，构造、签名并发送交易；例：创建 NFT 类别
	result, err := client.NFT.IssueDenom(nft.IssueDenomRequest{ID: "testdenom", Name: "TestDenom", Schema: "{}"}, baseTx)
	if err != nil {
		fmt.Println(fmt.Errorf("NFT 类别创建失败: %s", err.Error()))
	} else {
		fmt.Println("NFT 类别创建成功：", result.Hash)
	}
```

## 查询信息

使用创建好的文昌链客户端，查询链上的信息

```go
	// 使用 Client 选择对应的功能模块，查询链上状态；例：查询账户信息
	acc, err := client.Bank.QueryAccount("iaa1lxvmp9h0v0dhzetmhstrmw3ecpplp5tljnr35f")
	if err != nil {
		fmt.Println(fmt.Errorf("账户查询失败: %s", err.Error()))
	} else {
		fmt.Println("账户信息查询成功：", acc)
	}
```

## 状态监听

使用创建好的文昌链客户端，监听链上状态变化

```go
	// 使用 Client 订阅事件通知，例：订阅区块
	subs, err := client.SubscribeNewBlock(types.NewEventQueryBuilder(), func(block types.EventDataNewBlock) {
		fmt.Println(block)
	})

	if err != nil {
		fmt.Println(fmt.Errorf("区块订阅失败: %s", err.Error()))
	} else {
		fmt.Println("区块订阅成功：", subs.ID)
	}
```

## 了解更多

- 代码仓库：[opb-sdk-go](https://github.com/bianjieai/opb-sdk-go)
- 代码示例：[opb-sdk-go/examples/main.go](https://github.com/bianjieai/opb-sdk-go/blob/master/examples/main.go)