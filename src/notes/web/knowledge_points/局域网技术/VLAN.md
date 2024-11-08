---
order: 2
---

# VLAN

## 能干什么

可以隔离广播域

::: warning 注意

1. VLAN 0 和 VLAN 4095 不可用
2. VLAN 1 为交换机默认VLAN，不需创建，不能删除
3. 属于相同 VLAN 的主机可以基于二层通信；属于不通 VLAN 的主机不能基于二层通信，但是可以在三层通信

:::

## 划分规则

1. 基于端口划分VLAN（常用于较为固定的节点）
2. 基于MAC地址划分VLAN（常用于移动性强的节点）
3. 基于IP组播划分VLAN
4. 基于洗液i内容划分VLAN

## 接口模式

### Access 接口

+ 可以传输一个 VLAN 流量

+ 交换机与PC连接

### Trunk 接口

+ 可以传输多个 VLAN 流量

+ 通常用于交换机互联

### Hybrid 接口

+ Access 和 Trunk 能干的都能干

## MUX-VLAN

既可实现VLAN间用户通信隔离，也可实现VLAN内的用户相互隔离。

::: warning 注意

不同vlan的主机需要配置相同的IP地址段。

:::

### 都有哪些VLAN

1. 主VLAN：可以与MUX-LVAN内所有接口通信
2. 从VLAN：可以和主VLAN通信，同一组内接口也可以互相通信，但是不能和其他组接口或隔离型从VLAN通信。每个组VLAN必须绑定一个主VLAN
3. 隔离型从VLAN：只能和主VLAN通信，每个隔离型从VLAN必须绑定一个主VLAN

## 华为配置

具体可以点击这里看[实验操作](../../huawei/二、VLAN配置.md)