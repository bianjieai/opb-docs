<!--
order: 1
-->
# 快速开始
## 流程指引
### 1、注册账号
- 注册账号： [https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html) 
- 链账户的创建： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html)
（注意托管账户和非托管账户的区别及使用）
### 2、获取项目 ID 和项目 key
- 创建项目： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html)

### 3、配置测试及开发环境
1、接入IRITA测试网

初始化SDK配置：
```javascript
Chain-ID：testing
RPC：47.100.192.234:26657
gRPC：47.100.192.234:9090
```
注：测试网没有网关接入要求，开发者可以根据业务需要现先在测试网中进行相关应用接口的调试

2、接入文昌链（线上生产环境）

（1）下载文昌链的接入参数：https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html  

（2）配置接入网关（初始化SDK配置）：

将下载下来的接入参数按照不同语言 SDK 的接入方式，根据接入网关地址的规则进行输入配置  

文昌链网关接入说明： https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html

```javascript
Chain-ID：wenchangchain
RPCAddr: https://opbningxia.bsngate.com:18602/api/[project_key]/rpc
wsAddr:wss://opbningxia.bsngate.com:18602/api/[project_key]/ws
gRPCAddr: opbningxia.bsngate.com:18603                                                                     
```
### 4、选择您连接文昌链的应用端语言对应的 SDK：
- SDK-GO 地址：https://github.com/bianjieai/opb-sdk-go
- SDK-Java 地址：https://github.com/bianjieai/opb-sdk-java

### 5、NFT 技术文档
- NFT 技术模块简介：

https://irita.bianjie.ai/docs/core_modules/nft.html

- NFT 技术开发步骤：

https://irita.bianjie.ai/docs/quick_start/nft.html

- 链上NFT管理示例：

https://irita.bianjie.ai/docs/console/modules/nft.html

### 6、链信息和区块、交易查询
文昌链区块链浏览器已正式开放，链信息、区块信息和交易信息查询可访问以下链接：

https://explorer.wenchang.bianjie.ai

### 7、链上随机数

### PRNG

我们通过区块链生成的多个指标作为“因子”来计算随机数，使得此随机数公开透明，方便验证。

随机数“因子”具体包含以下指标：

- **上一个区块的 Hash：** 区块 Hash 的生成，取决于该区块的多方面因素，比如区块高度、交易数量、时间戳等等，因此区块 Hash 本身就具有一定的不可预测性。
- **当前区块的时间戳：** 区块时间戳采用 BFT 时间，即根据验证人的权重，使用上一个区块中每一个 Precommit 的时间，加权计算出来的分布式时间戳（毫秒级别），也具有一定的不可预测性 [[BFT Time]](https://docs.tendermint.com/master/spec/consensus/bft-time.html#bft-time)。
- **请求随机数的账户地址：** 主要是为了实现不同人在同一个区块高度得到不同的随机数。

由于区块 Hash 和 BFT 时间的计算都是基于上一个区块的信息，为了避免请求随机数之前可以预先计算结果，所以另一方面，我们通过“未来区块”，加强随机数的不可预测性。

#### 计算公式

```sh
seed = sha256(
    Int(timestamp)
    + Int(sha256(blockhash)) / Int(timestamp)
    + Int(sha256(consumer)) / Int(timestamp)
)

rand = seed mod 10^20 / 10^20
```

访问链接：

[https://irita.bianjie.ai/docs/core_modules/random.html](https://irita.bianjie.ai/docs/core_modules/random.html)

[https://irita.bianjie.ai/docs/console/modules/random.html](https://irita.bianjie.ai/docs/console/modules/random.html)



## 网络

- 主网：文昌链主网，即生产网络，主网 API 网关需要鉴权访问并计费；  [了解更多](./mainnet.md)
- 测试网：为了方便应用服务方开发和测试，文昌链提供了免费的测试网和对应的 API 网关。  [了解更多](./testnet.md)

## SDK

文昌链提供多语言的 API 网关 SDK，以满足不同应用服务方的开发需求：

- [Golang SDK]()
- [Java SDK]()
- JavaScript SDK（Coming Soon）
