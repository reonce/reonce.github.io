---
title: 手写一个EventBus
date: 2022-6-14
author: reonce
tags: JavaScript
location: 成都  
---

```tsx
class EventBus {
  constructor(maxListeners = Infinity) {
    this.events = [];
    // 最大监听数
    this.maxListeners = maxListeners;
  }

  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    if (
      this.events[event].length >= this.maxListeners &&
      this.maxListeners !== Infinity
    ) {
      console.warn(`${event}事件监听数超过${this.maxListeners}`);
      return this;
    }
    this.events[event].push(cb);
    return this;
  }

  emit(event, ...args) {
    const cbs = this.events[event];
    if (!cbs) {
      console.log("没有这个事件");
      return this;
    }
    cbs.forEach((cb) => cb.apply(this, args));
  }

  off(event, cb) {
    if (!cb) {
      this.events[event] = [];
    }
    this.events[event] = this.events[event].filter((item) => item !== cb);
    return this;
  }

  once(event, cb) {
    const func = (...args) => {
      this.off(event, func);
      cb.apply(this, args);
    };
    this.on(event, func);
    return this;
  }
}
```
