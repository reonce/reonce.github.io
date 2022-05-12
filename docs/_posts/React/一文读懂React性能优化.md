---
title: 一文读懂React性能优化
date: 2022-5-8
author: reonce
tags: React
location: 成都  
---
# React性能优化
进行React开发时，如果组件设计不当，容易造成大量的重复渲染（render），影响页面的性能，存在心智负担。本文将解释以下几点：
1. React的性能优化是如何命中
2. 如何避免组件的重复渲染
3. 常见的性能优化手段

## 常见的性能优化策略
常见的交互有下面三种：
1. 点击按钮，触发状态更新
   
2. 组件render
   
3. 视图渲染

我们能做到优化的是前两种。
对于第一种，如果`状态`没有发生更新，则可以略过剩下的步骤，这个优化策略叫做`eagerState`<br/>对于第二种，如果组件的子孙节点没有状态变化，那么应该跳过子孙组件的重复渲染，这个策略叫做`bailout`

### 浅谈eagerStatey优化

看一个简单的例子，一个按钮，点击事件触发把num从0更新为1

~~~js
function App() {
  const [num, updateNum] = useState(0);
  console.log("App render", num);

  return (
    <div onClick={() => updateNum(1)}>
      <Child />
    </div>
  );
}

function Child() {
  console.log("child render");
  return <span>child</span>;
}

~~~

首次渲染，打印：

~~~js
App render 0
child render
~~~

第一次点击`div`，打印：

~~~js
App render 0
child render
~~~

第二次点击`div`,打印：

~~~js
App render 1
~~~

之后再点击`div`，没有打印任何东西



分析一下，当**第二次**点击后，打印了App render 1，没有打印`child render`。这说明App的子孙组件没有`render`，命中了`bailout`。关于它，我们后面会再聊。

**第三次及之后**的点击，什么都没打印，代表没有组件没有`render`,命中了**eagerStatey**。

> 这里就有一个问题，为什么第二次点击仍然会`render`，为什么第二次没有命中**eagerStatey**，多`render`一次不会造成性能浪费吗？
>
> PS: 实际上这可能也是React在更新虚拟dom的一种“妥协”，从这一点更新上来说，React的性能优化还没有做到极致，由于存在两个`fiber`，`eagerState`策略并没有达到最理想的状态，仍然会有一次“浪费”的过程。

这里我们需要明白，为什么它要叫**eagerStatey**（急迫的状态），这个名字。

当组件`render的时候，`useState`执行并返回最新的状态。

~~~js
const [num, setNum] = useState(0);
~~~

也就是说，我们获取最新的状态的时候是组件`render`的时候。

那么如果在组件`render`之前我们就知道这个更新的值了呢？如果它是一样的，我就可以不进行`render`，节省 性能了啊。是的，**eagerStatey**就是用来做这个的。

简单讲一下这个比较的过程：

React组件当中的filber树其实是有两个的，也就是**双缓存**。

* 一个用来保存当前视图相关信息，被称为`current fiber`
* 一个用来保存**接下来要变化的视图**的相关信息，被称为`wip filber`

当组件触发更新后，会在组件对应的2个`filber`上都**标记更新**。

具有**标记更新**这个标识，组件才会触发`render`。

当组件`render`的时候，`useState`会执行，计算出**最新状态**，然后把`wip filber`上的更新标记清除掉。

当视图渲染完成后，`current fiber`和`wip filber`会互换位置（本次更新的`wip filber`会变成下次更新的`current fiber`。

因此，当第二次点击`div`的时候，由于`wip filber`存在更新，没有命中**eagerStatey**，于是会打印

~~~js
App render1
~~~

第二次点击完，组件`render`后，`wip filber`上的**更新标记**被清除。

至此，两个`filber`上都不存在**更新标记**了。所以后续再点击也不会触发组件`render`了。

### 	浅谈bailout

React对于组件传值的更新策略需要对值进行比较，分为以下两种比较方式：
1. **全等比较**，性能消耗小，难命中。
2. **浅比较**，性能消耗大，易命中。

**全等比较**是对oldProps和newProps的值进行全等比较，例如我们的例子，之前的num和现在的num比较。

**浅比较**是采取键值配置的方式进行比较，需要遍历对象。

React组件的**Props**默认是全等比较，**Context**默认是浅比较。

但有时候**全等比较**是无法命中的，需要我们手动的加上React性能优Api（useCallback,useMemo,Memo），这时的比较方式就是**浅比较**。

#### React组件的性能优化（bailout）是如何命中的

首先我们看两个例子，当点击按钮触发状态改变时会`render`子组件（打印`child rende`）吗？

实例一：

~~~js
function App() {
  console.log("App render");
  return (
    <div>
     <Parent>
      <Child />
     </Parent>
    </div>
  );
}

function Child() {
  console.log("child render");
  return <span>child</span>;
}

function Parent(props) {
  console.log("父组件渲染了");
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        测试按钮
      </button>
      {props.children}
    </div>
  );
}
~~~

实例二：

~~~js
function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

function Child() {
  console.log("child render");
  return <span>child</span>;
}

function Parent() {
  console.log("父组件渲染了");
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        测试按钮
      </button>
      <Child />
    </>
  );
}
~~~

答案是第二种会打印`"child render"`。

这是因为实例一的方式，状态改变前后props是全等的，命中了`bailout`

而实例二，看似没有进行传值，实际上在jsx进行babel转义的时候，没有传props，就相当于传了一个空对象，而两个空对象是不全等的，因此没有命中bailout。

这时候可以给子组件套上`memo`，让组件的props进行**浅比较**，这时候子组件就不会重新`render`了。

