---
order: 1
---

# IPv6 基础

## 能干什么

最大程度解决了IPv4网络地址资源不足的问题。除此以外，也解决了多种接入设备连入互联网的障碍。

## 类型

1. 单播：点对点，前缀必须为64位
2. 多播：一对多，地址范围FF00::/8
3. 任播：任意播地址不能作为源地址，只能作为目标地址；不能指定给IPv6终端，只能指定给IPv6路由器

::: tip 名词解释

任播，其实用大白话解释一下，任意播地址就像是一个“快递代收点”的地址，这个地址不是给某个人（也就是IPv6主机）专门用的，而是给一组人（也就是一组网络接口）共用的。当你往这个地址寄快递（也就是发送数据包）时，快递公司（也就是路由器）会看着哪个代收点离你最近，就把快递送到那个代收点去。

但是，如果你把这个“快递代收点”的地址给一个具体的人（也就是IPv6主机）用，就会出现问题了。因为这个人（主机）其实并不需要这个代收点，他有自己的家（也就是单播地址）可以收快递。如果用了代收点的地址，那么其他人给他寄快递时，就会送到代收点去，而不是直接送到他的家里。这样一来，他就不一定能及时收到快递，甚至可能会搞混谁的快递是谁的了。

而且，如果代收点（也就是任意播地址）收到了快递，也不知道这个快递到底是寄给谁的，因为代收点对应的是一组人，而不是具体某个人。这样一来，就会出现通信混乱，甚至可能会导致信息泄露或者丢失。

所以，为了避免这些问题，任意播地址就不能给IPv6主机用。每个IPv6主机都应该有自己的家（也就是单播地址），这样才能确保通信的准确性和可靠性。

:::

## 表示方式

IPv6的地址长度为128位，采用十六进制表示

### 地址压缩方式

中间0可以用::压缩；前导0可以压缩；二者可以同时使用，但是::只能出现一次

例如：

2001:0410:0000:0001:0000:0000:0000:45ff，可以表示为：

1. 2001:0410:0000:0001::45ff------中间0全压缩
2. 2001:410:0:1:0:0:0:45ff------压缩前导的0
3. 2001:410:0:1::45ff------中间0全压缩和压缩前导0同时使用

### 地址表示方式

IPv6地址=前缀+接口表示

例如：

2001:da8:207::8207/64，

前缀相当于IPv4的网络ID；前缀长度用“/xx”来表示，2001:da8:207:0000为网络ID

接口ID相当于IPv4的主机ID，剩下的为接口ID

## 地址范围

### 可聚合全球单播地址

类似IPv4公网地址。

有效地址范围前缀（2000~3FFF）

+ 2001::/64为首批使用的科举和全球单播地址
+ 2002::/64用于IPv4网络中建立6to4隧道的地址

### 链路本地地址

只限于==直连链路==

前缀地址为FE80::/10

### 站点本地地址

类似IPv4内部私有地址

前缀地址为FEC0::/10

#### 未指定地址

0:0:0:0:0:0:0:0或::

等同于IPv4的0.0.0.0

#### 环回接口地址

0:0:0:0:0:0:0:1或::1