(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{267:function(v,_,r){"use strict";r.r(_);var n=r(5),t=Object(n.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"三次握手和四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[v._v("#")]),v._v(" 三次握手和四次挥手")]),v._v(" "),r("blockquote",[r("p",[v._v("客户端和服务器建立通信的过程中要进行三次握手，结束通信要进行四次挥手。")])]),v._v(" "),r("p",[v._v("其实”握手“这一词本身是具有歧义的，”握手“不应该是双方手掌接触互相传输信息吗?"),r("br"),v._v("\n已经搞懂本文的同学会发现，其实三次握手就是三次单向交流的过程，即我告诉你，你告诉我，我再告诉你。")]),v._v(" "),r("p",[v._v("好吧，暂且不管哪个傻吊取得这个名字。我们回到正题，首先了解一下为什么需要三次握手吧，让我们带着好奇心搞懂本文。")]),v._v(" "),r("h3",{attrs:{id:"假设客户端和服务器直接进行连接-会出现什么问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#假设客户端和服务器直接进行连接-会出现什么问题"}},[v._v("#")]),v._v(" 假设客户端和服务器直接进行连接，会出现什么问题?")]),v._v(" "),r("p",[v._v("由于网络传输是有延时的(要通过网络光纤和各种中间代理服务器)，在传输的过程中，比如客户端发起了 SYN=1 创建连接的请求(第一次握手)。")]),v._v(" "),r("p",[v._v("如果服务器端就直接创建了这个连接并返回包含 SYN、ACK 和 Seq 等内容的数据包给客户端，这个数据包因为网络传输的原因丢失了，丢失之后客户端就一直没有接收到服务器返回的数据包。")]),v._v(" "),r("p",[v._v("客户端可能设置了一个超时时间，时间到了就关闭了连接创建的请求。再重新发出创建连接的请求，而服务器端是不知道的，如果没有第三次握手告诉服务器端客户端收的到服务器端传输的数据的话，")]),v._v(" "),r("p",[v._v("服务器端是不知道客户端有没有接收到服务器端返回的信息的。也就因为网络波动造成了，相应请求回了，但是数据丢失的问题。")]),v._v(" "),r("blockquote",[r("p",[v._v("也就是说，三次握手是为了防止服务器端开启一些无用的连接增加服务器开销以及防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。关键词： "),r("strong",[v._v("节省服务器开销")]),v._v("、"),r("strong",[v._v("保证连接正确性")])])]),v._v(" "),r("h3",{attrs:{id:"三次握手发生了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三次握手发生了什么"}},[v._v("#")]),v._v(" 三次握手发生了什么?")]),v._v(" "),r("p",[v._v("现在我们准备讲三次握手具体是怎样执行的，再此之前先看一个比喻："),r("br"),v._v("\n我： 准备好了吗, 现在出门吗？ "),r("br"),v._v("\n女朋友： 准备好了。"),r("br"),v._v("\n我： 好，我们走。"),r("br")]),v._v(" "),r("p",[v._v("三次握手："),r("br"),v._v("\n客户端： 向服务器端发送一段TCP报文，标记位为SYN，序号为Seq=X（X一般为1）。表示"),r("strong",[v._v("请求建立新连接")]),v._v(";"),r("br"),v._v(" "),r("code",[v._v("服务端收到报文后，结束LISTEN阶段")]),r("br"),v._v("\n服务端： 返回一段TCP报文，其中：标志位为SYN和ACK，表示“确认客户端的报文Seq序号有效，服务器能正常接收客户端发送的数据，并同意创建新连接”。"),r("strong",[v._v("表示服务器正常收到了你的请求")]),r("br"),v._v(" "),r("code",[v._v("客户端接收到来自服务器端的确认收到数据的TCP报文之后，明确了从客户端到服务器的数据传输是正常的，结束SYN-SENT阶段")]),r("br"),v._v("\n客户端： 发送最后一段TCP报文。其中：标志位为ACK，表示“确认收到服务器端同意连接的信号”。序号为Seq=x+1，表示收到服务器端的确认号Ack，并将其值作为自己的序号值；确认号为Ack=y+1，表示收到服务器端序号Seq，并将其值加1作为自己的确认号Ack的值；\n确认号为Ack=x+1，表示收到客户端的序号Seq并将其值加1作为自己确认号Ack的值；表示"),r("strong",[v._v("我知道你可以正常收到我发的数据了")]),r("br"),v._v(" "),r("code",[v._v("服务器端进入SYN-RCVD阶段")]),r("br"),v._v(" "),r("code",[v._v("客户端进入ESTABLISHED阶段。序号为Seq=y")]),r("br")]),v._v(" "),r("blockquote",[r("p",[v._v('服务器收到来自客户端的“确认收到服务器数据”的TCP报文之后，明确了从服务器到客户端的数据传输是正常的。结束SYN-SENT阶段，进入ESTABLISHED阶段。\n在客户端与服务器端传输的TCP报文中，双方的确认号Ack和序号Seq的值，都是在彼此Ack和Seq值的基础上进行计算的，这样做保证了TCP报文传输的连贯性。一旦出现某一方发出的TCP报文丢失，便无法继续"握手"，以此确保了"三次握手"的顺利完成。'),r("br"),v._v("\n此后客户端和服务器端进行正常的数据传输。这就是“三次握手”的过程。")])]),v._v(" "),r("h3",{attrs:{id:"三次握手我懂了-为啥要四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三次握手我懂了-为啥要四次挥手"}},[v._v("#")]),v._v(" 三次握手我懂了，为啥要四次挥手?")]),v._v(" "),r("p",[v._v("现在我们准备讲四次挥手具体是怎样执行的，再此之前先看一个比喻："),r("br"),v._v("\n我： 要出去吃饭吗 "),r("br"),v._v("\n女朋友： 要吃，等我十分钟准备一下。"),r("br"),v._v("\n这时候女朋友开始准备，一小时后......"),r("br"),v._v("\n女朋友： 准备好了，我们去吃饭吧"),r("br"),v._v("\n我： 好，我们走。"),r("br")]),v._v(" "),r("p",[r("strong",[v._v("客户端：")]),v._v(" "),r("strong",[v._v("请求释放连接")]),v._v("\n首先客户端想要释放连接，向服务器端发送一段TCP报文，其中：\n标记位为FIN；序号为Seq=U；随后客户端进入FIN-WAIT-1阶段，即半关闭阶段。并且停止在客户端到服务器端方向上发送数据，但是客户端仍然能接收从服务器端传输过来的数据。\n注意：这里不发送的是正常连接时传输的数据(非确认报文)，而不是一切数据，所以客户端仍然能发送ACK确认报文。")]),v._v(" "),r("p",[r("strong",[v._v("服务端：")]),v._v(" "),r("strong",[v._v("接收到客户端发送的释放连接的请求")]),r("br"),v._v('\n服务器端接收到从客户端发出的TCP报文之后，确认了客户端想要释放连接，随后服务器端结束ESTABLISHED阶段，进入CLOSE-WAIT阶段（半关闭状态）并返回一段TCP报文，其中：\n标记位为ACK，序号为Seq=V；\n确认号为Ack=U+1，表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值；\n随后服务器端开始准备释放服务器端到客户端方向上的连接。\n客户端收到从服务器端发出的TCP报文之后，确认了服务器收到了客户端发出的释放连接请求，随后客户端结束FIN-WAIT-1阶段，进入FIN-WAIT-2阶段\n前"两次挥手"既让服务器端知道了客户端想要释放连接，也让客户端知道了服务器端了解了自己想要释放连接的请求。于是，可以确认关闭客户端到服务器端方向上的连接了'),r("br")]),v._v(" "),r("p",[r("code",[v._v("这时候服务端处理释放链接程序")]),r("br")]),v._v(" "),r("p",[v._v("服务端： "),r("strong",[v._v("已经准备好释放连接了")]),r("br"),v._v("\n服务器端自从发出ACK确认报文之后，经过CLOSED-WAIT阶段，做好了释放服务器端到客户端方向上的连接准备，再次向客户端发出一段TCP报文，其中：\n标记位为FIN，ACK。注意：这里的ACK并不是确认收到服务器端报文的确认报文。序号为Seq=W；确认号为Ack=U+1；表示是在收到客户端报文的基础上，将其序号Seq值加1作为本段报文确认号Ack的值。\n随后服务器端结束CLOSE-WAIT阶段，进入LAST-ACK阶段。并且停止在服务器端到客户端的方向上发送数据，但是服务器端仍然能够接收从客户端传输过来的数据。")]),v._v(" "),r("p",[v._v("客户端："),r("strong",[v._v("接收到服务器准备好释放连接的信号")]),r("br"),v._v("\n客户端收到从服务器端发出的TCP报文，确认了服务器端已做好释放连接的准备，结束FIN-WAIT-2阶段，进入TIME-WAIT阶段，并向服务器端发送一段报文，其中：标记位为ACK，序号为Seq=U+1；表示是在收到了服务器端报文的基础上，将其确认号Ack值作为本段报文序号的值。\n确认号为Ack=W+1；表示是在收到了服务器端报文的基础上，将其序号Seq值作为本段报文确认号的值。\n随后客户端开始在TIME-WAIT阶段等待2MSL")]),v._v(" "),r("p",[v._v("相信看到这，你已经直到了为什么需要四次挥手而不是三次。没错，就是在第二步的时候，服务器需要处理关闭链接的程序，处理好之后，再去告诉客户端。因此要比建立连接多一次“挥手”")]),v._v(" "),r("p",[v._v("（本文完）")]),v._v(" "),r("p",[v._v("参考链接 https://baijiahao.baidu.com/s?id=1654225744653405133&wfr=spider&for=pc")])])}),[],!1,null,null,null);_.default=t.exports}}]);